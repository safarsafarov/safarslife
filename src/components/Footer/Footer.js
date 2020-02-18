import React from 'react';

import Socials from '../Socials/Socials';

import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="title">
                <span>Let's work together !</span>
                <h1>
                Need a new website or web app? Or just talk and get advice?
                </h1>
              </div>
            </div>

            <div className="col-md-6 end-md right">
              <a className="mail" href="mailto:safarov.safar@hotmail.com">
                safarov.safar@hotmail.com
              </a>

              <p>
                Click, it's free !{' '}
                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <p className="hello">
                Have a nice day !{' '}
                <span role="img" aria-label="hello">
                  👋🏻
                </span>
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
