import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Autocomplete from 'react-autocomplete';
import { matchLessonToTerm, sortLessons } from './utils';
import './App.css';

class Header extends Component {

  render() {
  let nextLesson = this.props.value || 'No lesson selected. See all lessons.';
    return (
      <div>
        <div className="header">
          <nav>
            <div className="site-heading-banner">
              <Link to="/" className="site-heading-link"><h1>Typey type</h1></Link>
            </div>
            <div className="table search-container">
              <Link to="/lessons" className="link-ghost-button mr1 table-cell">Lessons</Link>
              <label htmlFor="lessons-autocomplete" className="visually-hidden">Search for a lesson</label>
              <Autocomplete
                getItemValue={(item) => item.title}
                inputProps={{ id: 'lessons-autocomplete', spellCheck: 'false', autoCapitalize: "off", autoCorrect: "off" }}
                items={this.props.items}
                menuStyle={{ }}
                onChange={this.props.onChange}
                onSelect={this.props.onSelect}
                renderInput={function(props) {
                  return <input {...props} className="inline-form-control" />
                }}
                renderItem={(item, highlighted) =>
                  <div
                    key={item.path}
                    className={ highlighted ? "autocomplete-highlight py05 px1 text-small" : "py05 px1 text-small" }
                  >
                    <span className={ highlighted ? "text-uppercase text-small" : "text-uppercase text-small de-emphasized" }>{item.category} >&nbsp;{item.subcategory}</span><br />
                    <span className="text-small">{item.title}</span> <span className="text-small">{item.subtitle}</span>
                  </div>
                }
                renderMenu={function(items, value, style) {
                  return <div style={{ ...style, ...this.menuStyle }} className="autocomplete-menu" children={items}/>
                }}
                shouldItemRender={matchLessonToTerm}
                sortItems={sortLessons}
                value={this.props.value}
                wrapperStyle={{ position: 'relative', display: 'table-cell', paddingLeft: '0.5em', paddingRight: '0.5em', width: '100%' }}
              />
              <div className="visually-hidden">Selected lesson to start next:
                <div role="status" aria-live="assertive">
                  {nextLesson}
                </div>
              </div>
              <Link to={'/lessons'+this.props.nextLessonPath.replace(/lesson\.txt$/,'')} className="link-button table-cell" role="button">Start</Link>
            </div>
          </nav>
        </div>
        <div className="subheader">
          <div className="flex mr1">
            <header>
              <h2>{this.props.lessonTitle}</h2>
              <h3>{this.props.lessonSubTitle}</h3>
            </header>
          </div>
          <a href={this.props.path} onClick={this.props.restartLesson} className="link-button table-cell mr1" role="button">Restart</a>
          <a href={this.props.path} onClick={this.props.handleStopLesson} className="link-button table-cell" role="button">Stop</a>
        </div>
      </div>
    )
  }
}

export default Header;
