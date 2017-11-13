import React, { Component } from 'react';
import Material from './Material';
import TypedText from './TypedText';
import Scores from './Scores';
import UserSettings from './UserSettings';
import './App.css';

class Typing extends Component {
  render() {
    let customMessage;
    let strokeTip;

    if (this.props.settings.customMessage) {
      customMessage = <h3 className="custom-message">{this.props.settings.customMessage}</h3>;
    } else {
      customMessage = <span style={{paddingTop: '24px' }}>&nbsp;</span>
    }

    if (this.props.userSettings.showStrokes) {
      strokeTip = <div className="stroke-tip"><span className="visually-hidden">Hint: </span><pre><span className="steno-stroke">{this.props.currentStroke}</span></pre></div>;
    } else {
      strokeTip = <div className="stroke-tip"><span aria-hidden="true">&#8203;</span></div>;
    }

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
              {strokeTip}
            </div>
          </div>
          <div className="scores">
            <Scores
              timer={this.props.timer}
              totalNumberOfMatchedWords={this.props.totalNumberOfMatchedWords}
              totalNumberOfNewWordsMet={this.props.totalNumberOfNewWordsMet}
              totalNumberOfLowExposures={this.props.totalNumberOfLowExposures}
              totalNumberOfFamiliarWords={this.props.totalNumberOfFamiliarWords}
              totalNumberOfMisstrokes={this.props.totalNumberOfMisstrokes}
            />
          </div>
        </div>
      </div>
    )
  }

}

export default Typing;
