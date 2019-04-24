import React, {Component} from 'react';

import Back from '../Main/Back/container';

class ProductLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="product-container">
        <Back/>
        <div id="product-subcontainer">
          <span id="product-how-it-works"></span>
          <header id="product-header">
            <img id="product-header-img" alt="LexCorp logo" src="https://vignette.wikia.nocookie.net/dccu/images/9/96/LexCorp_logo.jpg/revision/latest?cb=20161026202415"/>
            <nav id="product-nav-bar">
              <a className="product-nav-link" href="#product-how-it-works">How it works</a>
              <a className="product-nav-link" href="#product-announcement">Announcement</a>
              <a className="product-nav-link" href="#product-sign-up-free">Sign up free</a>
            </nav>
          </header>
          <div id="product-content">
            <section id="product-section-1" className="product-section">
                <span className="product-about-labels">
                 <img alt="privacy" src="https://cdn1.iconfinder.com/data/icons/objects-10/24/mask_incognito_private_eye_pride-512.png"/>
                 <h1>Private</h1>
                </span>
                <p className="product-about-descriptions">Lexcorp puts its users' privacy first.  We're moving on from the old Lex Luthor practices of using your devices as battleground with Superman.  Your data will remain on your device with uncrackable encryption that only you (and Lexcorp) can decode.</p>
                <span className="product-about-labels">
                  <img alt="security" src="https://cdn1.iconfinder.com/data/icons/security-and-protection-1/154/protection-padlock-512.png"/>
                  <h1>Secure</h1>
                </span>
                <p className="product-about-descriptions">We understand that your biggest concern when choosing to protect your device with software for Lexcorp is the fact that we may be run by supervillians.  We promise, we're not.  LexOS will never let anyone except you access your device. The revolutionary authentication screen requires a fingerprint, biometric eye scan, facial recognition, AND a voice sample.</p>
                <span className="product-about-labels">
                  <img alt="free" src="https://cdn2.iconfinder.com/data/icons/blocked-out/29/lock-512.png"/>
                  <h1>Free</h1>
                </span>
                <p className="product-about-descriptions">Because we <s>want to have a globally distributed and weaponized hostage system</s> love you, LexOS will be completely free and for any device you already own.  Sign up below to receive the free beta when it is released!</p>
            </section><br/>
            <section id="product-announcement" className="product-section">
              <video width="0px" height="0px" id="product-video">
                <source src="https://youtu.be/FwasDsRayVE" type="video/mp4"/>
              </video>
              <iframe id="product-actual-video" width="878" height="494" src="https://www.youtube.com/embed/FwasDsRayVE" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
            </section><br/>
            <hr width="100%"></hr><br/>
            <section id="product-sign-up-free" className="product-section">
              <h2>Sign up for the beta!</h2>
              <form method="POST" action="https://www.freecodecamp.com/email-submit" id="product-form">
                <input id="product-email" type="email" name="email" placeholder="user@domain.com"/>
                <input id="product-submit" type="submit"/>
              </form>
              <br/>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductLanding;
