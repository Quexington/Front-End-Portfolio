import React, {Component} from 'react';

import Back from '../Main/Back/container';

class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="registration-container">
        <Back/>
        <div id="registration-subcontainer">
          <header id="registration-header">
            <h1 id="registration-title">Register for superpowers!</h1>
            <p id="registration-description" className="registration-description">Lexcorp is dedicated to making everyone feel super in this world of gods.</p>
            <p className="registration-description"><i>Making the world safer, one meta mutation at a time.</i></p>
          </header>
          <main id="registration-main">
            <form id="registration-survey-form">
              <div id="registration-fields">
                <label id="registration-name-label" className="registration-question-labels" htmlFor="name">Name</label><br/>
                <input id="registration-name" type="text" required placeholder="name here"/><br/><br/>
                <label id="registration-email-label" className="registration-question-labels" htmlFor="email">Email</label><br/>
                <input id="registration-email" type="email" required placeholder="email here"/><br/><br/>
                <label id="registration-number-label" className="registration-question-labels" htmlFor="number">Intensity of super powers (0 to 10)</label><br/>
                <input id="registration-number" type="number" min="1" max="10" placeholder="#"/><br/><br/>
              </div>
              <label className="registration-question-labels" htmlFor="dropdown">Desired powers</label>
              <select id="registration-dropdown">
                <option value="defense">Defense Suite</option>
                <option value="ranged">Ranged Suite</option>
                <option value="utility">Utility Package</option>
                <option value="superman">Superman Complete</option>
              </select>
              <br/>
              <label className="registration-question-labels" htmlFor="radios">Sex</label><br/>
              <fieldset id="registration-radios" className="registration-fieldset">
                <input id="registration-radio-one" name="radios" type="radio" value="radio-two"/>
                <label htmlFor="radio-one">Male</label><br/>
                <input id="registration-radio-two" name="radios" type="radio" value="radio-one"/>
                <label htmlFor="radio-two">Female</label><br/>
                <input id="registration-radio-three" name="radios" type="radio" value="radio-three"/>
                <label htmlFor="radio-three">Alien</label>
              </fieldset>
              <br/>
              <label className="registration-question-labels" htmlFor="addons">Add-Ons</label><br/>
              <fieldset id="registration-addons" className="registration-fieldset">
                <input id="registration-flying" name="checks" type="checkbox" value="flying"/>
                <label htmlFor="flying">Flying</label><br/>
                <input id="registration-invulerability" name="checks" type="checkbox" value="invulnerability"/>
                <label htmlFor="invulnerability">Invulnerability</label><br/>
                <input id="registration-speed" name="checks" type="checkbox" value="speed"/>
                <label htmlFor="speed">Speed</label><br/>
                <input id="registration-strength" name="checks" type="checkbox" value="strength"/>
                <label htmlFor="strength">Strength</label><br/>
              </fieldset>
              <br/>
              <label className="registration-question-labels" htmlFor="comments">Additional info about your desired superpowers:</label>
              <textarea id="registration-comments"></textarea>
              <br/>
              <input id="registration-submit" type="submit"/>
            </form>
          </main>
        </div>
      </div>
    )
  }
}

export default Registration;
