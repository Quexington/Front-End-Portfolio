import React, {Component} from 'react';

import Back from '../Main/Back/container';

class TechDocs extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="techdocs-container">
        <Back/>
        <main id="techdocs-main-doc">
          <nav id="techdocs-navbar">
            <div id="techdocs-flex-fix">
              <header>
                <h1 id="techdocs-h1">LexOS start-up guide</h1>
              </header>
              <a className="techdocs-nav-link" href="#installation">Installation</a><br/>
              <a className="techdocs-nav-link" href="#configuration">Configuration</a><br/>
              <a className="techdocs-nav-link" href="#capabilities">Capabilities</a><br/>
              <a className="techdocs-nav-link" href="#security">Security</a><br/>
              <a className="techdocs-nav-link" href="#development">Development</a><br/>
            </div>
          </nav>
          <section id="techdocs-installation" className="techdocs-main-section">
            <header>
              <h2>Installation</h2>
            </header>
            <p>Installing LexOS to your device is as simple as running an executable from a download.  Please note that installing LexOS will remove all other data from your device.</p>
            <p>To download the installation file, please go to lexcorp.com/lexos/download and select the download compatible with your device.  Once you run the file LexOS will be up and running!  You can also install it directly from the linux shell by running the line below.</p>
            <code>apt-get install lexos</code>
            <hr/>
          </section>
          <section id="techdocs-configuration" className="techdocs-main-section">
            <header>
              <h2>Configuration</h2>
            </header>
            <p>Congratulations on successfully installing LexOS!  You are now ready to configure the AI-powered operating system to your exact specifications.</p>
            <p>All configuration will be done from the special (and most powerful) LexShell.  You can run anything you want and LuthorBot will interpret what you mean.  However, we recommend that you run <code>setup</code>.  LuthorBot will then comb through all of your personal data history and decide what configuration options are best for you.  You may be surprised by its accuracy!</p>
            <hr/>
          </section>
          <section id="techdocs-capabilities" className="techdocs-main-section">
            <header>
              <h2>Capabilities</h2>
            </header>
            <p>The core of LexOS <s>(besides the totally destructive power it will one day yield)</s> is LuthorBot.  LuthorBot is a next-generation, state of the art, quantum powered artificial intelligence and its right at your fingertips.  LuthorBot will guess your preferences before you even do, meaning that you can:</p>
            <ul>
              <li>Solve math problems</li>
              <li>Post to social media</li>
              <li>Search for information</li>
              <li><s>kill Superman</s></li>
              <li>Create a music or video playlist</li>
            </ul>
            <p>before you even think about it!  Tell LuthorBot what to do, and we guarantee it can figure out how to do it.</p>
            <p>To greet your LuthorBot and learn exactly what he can do type the following snippet into your LexShell</p>
            <code>hello LB what can you do?</code>
            <hr/>
          </section>
          <section id="techdocs-security" className="techdocs-main-section">
            <header>
              <h2>Security</h2>
            </header>
            <p>Lexcorp isn't made of super villians (anymore). We are dedicated to protecting your information which translates into protecting you!</p>
            <p>LuthorBot is constantly monitoring your device: tracking unknown login attempts, malicious software, and Cyborg.  Anything it picks up will be immediately sent to you via LexNotes and held off until you verify it is what you want.  You can also customize LuthorBot to actively hunt out these threats and destroy them with imputence.  Run the following snippet to see how this works:</p>
            <code>LB pls be aggresive</code>
            <hr/>
          </section>
          <section id="techdocs-development" className="techdocs-main-section">
            <header>
              <h2>Development</h2>
            </header>
            <p>Because LuthorBot is so unbelievably intelligent, devloping applications for LexOS has never been easier.  Let's start with a hello world application (all it takes is one line:</p>
            <code>LB build me a hello world app</code><br/>
            <code>LB>"hello world" is complete.  Say "hello world" in the future to run it.</code>
            <p>See how simple that was?!  Code golf just got a whole lot easier thanks to Luthor Bot.</p>
          </section>
        </main>
      </div>
    )
  }
}

export default TechDocs;
