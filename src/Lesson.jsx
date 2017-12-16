import React, { Component } from 'react';
import Material from './Material';
import TypedText from './TypedText';
import Scores from './Scores';
import UserSettings from './UserSettings';
import Finished from './Finished';

class Lesson extends Component {
  componentDidMount() {
    if((this.props.lesson.path!==this.props.location.pathname+'lesson.txt') && (this.props.location.pathname.startsWith('/lessons'))) {
      this.props.handleLesson(process.env.PUBLIC_URL + this.props.location.pathname+'lesson.txt');
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if((prevProps.match.url!==this.props.match.url) && (this.props.location.pathname.startsWith('/lessons'))) {
      this.props.handleLesson(process.env.PUBLIC_URL + this.props.location.pathname+'lesson.txt');
    }
  }

  isFinished() {
    return (this.props.currentPhraseID === this.props.lesson.presentedMaterial.length);
  }

  render() {
    let customMessage;
    let strokeTip;

    if (this.props.settings.customMessage) {
      customMessage = <h3 className='p4'>{this.props.settings.customMessage}</h3>;
    } else {
      customMessage = ''
    }

    if (this.props.userSettings.showStrokes || this.props.showStrokesInLesson) {
      strokeTip = <div className="stroke-tip"><span className="visually-hidden">Hint: </span><pre><span className="steno-stroke"><abbr>{this.props.currentStroke}</abbr></span></pre></div>;
    } else {
      strokeTip = <div className="stroke-tip">
        <label className="mb0">
          <input
            className="checkbox-input hide"
            type="checkbox"
            name="showStrokesInLesson"
            id="showStrokesInLesson"
            checked={this.props.showStrokesInLesson}
            onChange={this.props.changeShowStrokesInLesson}
            />
          Show stroke?
        </label>
      </div>;
    }

    if (this.props.lesson) {
      if (this.isFinished()) {
        return (
          <Finished
            actualText={this.props.actualText}
            changeSortOrderUserSetting={this.props.changeSortOrderUserSetting}
            changeSpacePlacementUserSetting={this.props.changeSpacePlacementUserSetting}
            changeUserSetting={this.props.changeUserSetting}
            disableUserSettings={this.props.disableUserSettings}
            handleLimitWordsChange={this.props.handleLimitWordsChange}
            handleRepetitionsChange={this.props.handleRepetitionsChange}
            settings={this.props.lesson.settings}
            timer={this.props.timer}
            totalNumberOfMatchedWords={this.props.totalNumberOfMatchedWords}
            totalNumberOfNewWordsMet={this.props.totalNumberOfNewWordsMet}
            totalNumberOfLowExposuresSeen={this.props.totalNumberOfLowExposuresSeen}
            totalNumberOfRetainedWords={this.props.totalNumberOfRetainedWords}
            totalNumberOfMistypedWords={this.props.totalNumberOfMistypedWords}
            totalNumberOfHintedWords={this.props.totalNumberOfHintedWords}
            totalWordCount={this.props.lesson.presentedMaterial.length}
            userSettings={this.props.userSettings}
          />
          )
      } else {
        return (
          <div>
            {customMessage}
            <div className="content">
              <UserSettings
                changeUserSetting={this.props.changeUserSetting}
                changeSortOrderUserSetting={this.props.changeSortOrderUserSetting}
                changeSpacePlacementUserSetting={this.props.changeSpacePlacementUserSetting}
                disableUserSettings={this.props.disableUserSettings}
                handleLimitWordsChange={this.props.handleLimitWordsChange}
                handleRepetitionsChange={this.props.handleRepetitionsChange}
                totalWordCount={this.props.totalWordCount}
                userSettings={this.props.userSettings}
              />
              <div className="lesson-canvas">
                <div className="mx-auto text-center">
                  <Material
                    actualText={this.props.actualText}
                    currentPhrase={this.props.currentPhrase}
                    currentStroke={this.props.currentStroke}
                    settings={this.props.settings}
                    userSettings={this.props.userSettings}
                  />
                  <TypedText
                    actualText={this.props.actualText}
                    currentPhrase={this.props.currentPhrase}
                    settings={this.props.settings}
                    updateMarkup={this.props.updateMarkup.bind(this)}
                    userSettings={this.props.userSettings}
                  />
                  <div role="status" aria-live="assertive">
                    {strokeTip}
                  </div>
                </div>
              </div>
              <div className="scores">
                <Scores
                  timer={this.props.timer}
                  totalNumberOfMatchedWords={this.props.totalNumberOfMatchedWords}
                  totalNumberOfNewWordsMet={this.props.totalNumberOfNewWordsMet}
                  totalNumberOfLowExposuresSeen={this.props.totalNumberOfLowExposuresSeen}
                  totalNumberOfRetainedWords={this.props.totalNumberOfRetainedWords}
                  totalNumberOfMistypedWords={this.props.totalNumberOfMistypedWords}
                  totalNumberOfHintedWords={this.props.totalNumberOfHintedWords}
                />
              </div>
            </div>
          </div>
        )
      }
    } else {
      return '<div><h2>That lesson is missing.</h2></div>';
    }
  }
}

export default Lesson;