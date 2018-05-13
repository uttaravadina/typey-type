import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import './App.css';
import Clipboard from 'clipboard';
import {
  fetchDictionaries,
  parseWordList,
  processDictionary,
  swapKeyValueInDictionary,
  generateDictionaryEntries
} from './typey-type';

class CustomLessonSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: [],
      sourceWordsAndStrokes: {"the": "-T"},
      processedSourceWordsAndStrokes: {"the": "-T"}
    }
  }

  componentDidMount() {
    new Clipboard('.js-clipboard-button');
    if (this.mainHeading) {
      this.mainHeading.focus();
    }
    fetchDictionaries().then((json) => {
      let sourceWordsAndStrokes = swapKeyValueInDictionary(json);
      let processedSourceWordsAndStrokes = Object.assign({}, processDictionary(sourceWordsAndStrokes));
      this.setState({
        // sourceWordsAndStrokes: sourceWordsAndStrokes,
        processedSourceWordsAndStrokes: processedSourceWordsAndStrokes
      });
    });
  }

  handleWordsForDictionaryEntries(event) {
    if (event && event.target && event.target.value && event.target.value.length > 0) {
      let result = parseWordList(event.target.value);
      if (result && result.length > 0) {
        let dictionary = generateDictionaryEntries(result, this.state.processedSourceWordsAndStrokes);
        if (dictionary && dictionary.length > 0) {
          this.setState({
            dictionary: dictionary
          });
        }
      }
    }
    return event;
  }


  render() {

    let filledPre = '';
    if (this.state.dictionary.length > 0) {
      filledPre = "quote ";
    }

    const dictionaryEntries = this.state.dictionary.map( (entry, index) => {
      return(
        <code key={ index }>
          {entry.phrase}{`	`}{entry.stroke}{`
`}
        </code>
      )
    });

    return (
      <main id="main">
        <div className="subheader">
          <div className="flex items-baseline mx-auto mw-1024 justify-between p3">
            <div className="flex mr1">
              <header className="flex items-baseline">
                <h2 ref={(heading) => { this.mainHeading = heading; }} tabIndex="-1" id="about-typey-type-for-stenographers">Create a custom lesson</h2>
              </header>
            </div>
          </div>
        </div>
        <div className="p3 mx-auto mw-1024">
          <div className="custom-page-layout">
            <div>
              <p>To start a custom lesson, supply a list of words and their strokes. An easy way to create a lesson is to copy columns from a spreadsheet.</p>
              <p>See the&nbsp;&#8203;
                <GoogleAnalytics.OutboundLink
                  eventLabel="community's lessons"
                  to="https://docs.google.com/spreadsheets/d/1AlO2SSUwuv3yrz7RI9ix_z1Efbiu_j50c_ibGYwdsgc/edit?usp=sharing"
                  target="_blank">
                  community's lessons <small>(opens in new tab)</small>
                </GoogleAnalytics.OutboundLink>.</p>
              <label htmlFor="your-material">Paste your material here:</label>
              <textarea
                id="your-material"
                className="input-textarea mw100 w-100 h-192 overflow-scroll"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="example	KP-PL
consisting of	KAOFG
examples.	KP-PLS TP-PL"
                rows="8"
                wrap="off"
                onChange={this.props.createCustomLesson}
                >
              </textarea>
            </div>
            <div>
              <div className="panel p3">
                <h2>Share your lessons</h2>
                <p className="mb0">To help Typey type grow even faster, be sure to add your lessons to the <a className="" href="https://docs.google.com/spreadsheets/d/1AlO2SSUwuv3yrz7RI9ix_z1Efbiu_j50c_ibGYwdsgc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">community's lessons <small>(opens in new tab)</small></a>.</p>
                <h3>Custom material format</h3>
                <ul className="text-small ml1 mt0 mb0">
                  <li>Each word must be on its own line.</li>
                  <li>Each word must be separated from its stroke by a "Tab" character.</li>
                  <li>If you skip strokes, multi-stroke words may count as misstrokes.</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Create Plover lesson from word list</h3>
          <div className="custom-lesson-generator">
            <div>
              <label htmlFor="your-words-for-dictionary-entries">Paste a word list without strokes here to create a custom lesson using Plover theory:</label>
              <textarea
                id="your-words-for-dictionary-entries"
                className="input-textarea mw100 w-100 mb1 overflow-scroll"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="capitalise
excluded
plover"
                rows="8"
                wrap="off"
                onChange={this.handleWordsForDictionaryEntries.bind(this)}
                >
              </textarea>
            </div>
            <div>
              <pre id="js-custom-lesson-dictionary-entries" className={filledPre + "h-192 overflow-scroll mw-384 mt1 mb3"}>{dictionaryEntries}</pre>
              <button className="js-clipboard-button link-button copy-to-clipboard fade-out-up" data-clipboard-target="#js-custom-lesson-dictionary-entries">
                Copy custom lesson to clipboard
              </button>
            </div>
          </div>

        </div>
      </main>
    )
  }

}

export default CustomLessonSetup;
