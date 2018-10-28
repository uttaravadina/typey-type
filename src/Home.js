import React, { Component } from 'react';
import GoogleAnalytics from 'react-ga';
import { Link } from 'react-router-dom';
import { IconExternal } from './Icon';
import {
  Tooltip,
} from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import typeyTypeyDemoGIF from './images/typey-type-for-stenographers-demo.gif';

class Home extends Component {
  componentDidMount() {
    if (this.mainHeading) {
      this.mainHeading.focus();
    }
  }

  render () {
    return (
      <div>
        <main id="main">
          <div className="subheader">
            <div className="flex items-baseline mx-auto mw-1024 justify-between p3">
              <div className="flex mr1 self-center">
                <header className="flex items-baseline">
                  <h2 id="home-typey-type-for-stenographers" ref={(heading) => { this.mainHeading = heading; }} tabIndex="-1">Typey Type for Stenographers</h2>
                </header>
              </div>
            </div>
          </div>
          <div className="strapline text-vertical p0 m0 lh-single">Typey Type for Stenographers</div>
          <div className="bg-info landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584">
                <div className="relative"><Link to="/lessons"><img src={typeyTypeyDemoGIF} className="homepage-demo-lg" alt='Demo of Typey Type for Stenographers in action' /></Link></div>
                <h3 className="tiny-rule">What is stenography?</h3>
                <p>The process of writing shorthand is called <strong>stenography</strong>. Want to write over 100 words per minute? Grab yourself a fancy keyboard and start learning stenography!</p>
                <p>Typey&nbsp;Type for Stenographers is a free typing app designed specifically to help{" "}
                  <Tooltip
                    animation="shift"
                    arrow="true"
                    className="abbr"
                    duration="200"
                    tabIndex="0"
                    tag="abbr"
                    theme="didoesdigital"
                    title="stenography"
                    trigger="mouseenter focus click"
                    onShow={this.props.setAnnouncementMessage}
                  >
                    steno
                  </Tooltip>{" "}
                  students practice and rapidly master stenography.</p>
                <div className="relative"><Link to="/lessons"><img src={typeyTypeyDemoGIF} className="homepage-demo-xs" alt='Demo of Typey Type for Stenographers in action' /></Link></div>
                <Link to='/support' className="link-button dib" style={{lineHeight: 2}}>Learn more</Link>
              </div>
            </div>
          </div>
          <div className="bg-white landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584 ml-auto text-right">
                <h3>Steno students</h3>
                <p>After learning a little bit of steno theory, check out Typey&nbsp;Type’s fundamental <Link to="/lessons/">lessons</Link>, starting with <Link to="/lessons/fundamentals/one-syllable-words-with-simple-keys/">one-syllable words with simple keys</Link>. Before you start typing, customise “your settings” so spaces match your steno settings: spaces before words, spaces after words, or ignore spaces completely.</p>
                <Link to='/lessons/fundamentals/one-syllable-words-with-simple-keys/' className="link-button dib" style={{lineHeight: 2}}>Start typing</Link>
              </div>
            </div>
          </div>
          <div className="bg-info landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584">
                <h3 className="overline">Discover</h3>
                <p>Discover 5–15 new briefs a day from various lessons, revealing their strokes as you learn to write them. Write them slowly, concentrating on accuracy and forming good habits around how you stroke word parts.</p>
                <Link to='/lessons/fundamentals/one-syllable-words-with-simple-keys/' className="link-button dib" style={{lineHeight: 2}}>Discover</Link>
              </div>
            </div>
          </div>
          <div className="bg-white landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584 ml-auto text-right">
                <h3 className="overline">Revise</h3>
                <p>Revise 50 briefs a day from a lesson with loads of words you want to memorise, like the top 10000 English words. Try to recall the briefs before revealing their strokes. Avoid fingerspelling or writing out the long forms of words, so you can memorise the best brief for every word. </p>
                <Link to='/lessons/drills/top-10000-project-gutenberg-words/' className="link-button dib" style={{lineHeight: 2}}>Revise</Link>
              </div>
            </div>
          </div>
          <div className="bg-info landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584">
                <h3 className="overline">Drill</h3>
                <p>Regularly drill common words to build up your muscle memory and test your skills. Write as fast and furiously as you can, aiming for a high speed score. Pick specific drills that focus on a certain kind of brief or many similar words so you can associate them together.</p>
                <Link to='/lessons/drills/pronouns/' className="link-button dib" style={{lineHeight: 2}}>Drill</Link>
              </div>
            </div>
          </div>
          <div className="bg-white landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584 ml-auto text-right">
                <h3 className="overline">Practice</h3>
                <p>Finally, practice longer lessons to mimic real usage as closely as possible. Write as fast as you can without causing misstrokes. Explore classic stories that use simple sentences and common words.</p>
                <Link to='/lessons/stories/fables/belling-the-cat/' className="link-button dib" style={{lineHeight: 2}}>Practice</Link>
              </div>
            </div>
          </div>
          <div className="bg-info landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584">
                <h3>Track your progress</h3>
                <p>Typey&nbsp;Type tracks your progress automatically without signing in. To keep your progress safe, however, you need to save it out of Typey&nbsp;Type regularly.</p>
                <Link to='/progress/' className="link-button dib" style={{lineHeight: 2}}>Your progress</Link>
              </div>
            </div>
          </div>
          <div className="bg-white landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584 ml-auto text-right">
                <h3 className="tiny-rule--adjacent">Custom material</h3>
                <p>Practice any text you like. Paste in a word list to create a custom lesson using Plover theory, or paste in words and strokes to use your own theory and material.</p>
                <Link to='/lessons/custom' className="link-button dib" style={{lineHeight: 2}}>Custom lessons</Link>
              </div>
            </div>
          </div>
          <div className="bg-info landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584">
                <h3>Dictionaries</h3>
                <p>In addition to Typey&nbsp;Type’s own dictionary, you can find recent Plover dictionaries, links to community dictionaries, and a dictionary for every lesson.</p>
                <Link to='/dictionaries/' className="link-button dib" style={{lineHeight: 2}}>Dictionaries</Link>
              </div>
            </div>
          </div>
          <div className="bg-white landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584 ml-auto text-right">
                <h3>Your settings</h3>
                <p>Choose the right settings for you. Try other steno layouts, blur words, or have words spoken to you.</p>
                <Link to='/lessons/fundamentals/one-syllable-words-with-simple-keys/' className="link-button dib" style={{lineHeight: 2}}>Explore</Link>
              </div>
            </div>
          </div>
          <div className="bg-info landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="mw-584">
                <h3>Want to get involved?</h3>
                <p>Support DiDoesDigital, create lessons, or share your feedback. Every bit helps.</p>
                <Link to='/contribute/' className="link-button dib" style={{lineHeight: 2}}>Contribute</Link>
              </div>
            </div>
          </div>
          <div className="bg-white landing-page-section">
            <div className="p3 mx-auto mw-1024">
              <div className="text-center">
                <h3 id="steno-news">Keep up with news</h3>
                <p>Sign up for{" "}
                  <GoogleAnalytics.OutboundLink
                    eventLabel="DiDoesDigital: Typey Type updates and steno news (external link opens in new tab)"
                    to="https://didoesdigital.com/#newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Typey Type updates and steno news (external link opens in new tab)"
                  >
                    Typey&nbsp;Type updates and steno news
                    <Tooltip
                      animation="shift"
                      arrow="true"
                      className=""
                      duration="200"
                      tabIndex="0"
                      tag="span"
                      theme="didoesdigital"
                      title="(external link opens in new tab)"
                      trigger="mouseenter focus click"
                      onShow={this.props.setAnnouncementMessage}
                    >
                      <IconExternal ariaHidden="true" role="presentation" iconWidth="24" iconHeight="24" className="ml1 svg-icon-wrapper svg-baseline" iconTitle="" />
                    </Tooltip>
                  </GoogleAnalytics.OutboundLink>.
                </p>
                {
                  // eslint-disable-next-line
                }<a href='https://didoesdigital.com/#newsletter' className="link-button dib" style={{lineHeight: 2}} target="_blank" aria-label="Steno news (external link opens in new tab)">Steno news</a>
              </div>
            </div>
          </div>
          <div className="bg-info">
            <div className="p3 mx-auto mw-1024">
              <span aria-hidden="true">&nbsp;</span>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Home;
