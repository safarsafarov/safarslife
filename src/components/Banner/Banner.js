import React from 'react';
import { Link } from 'react-router-dom';

import Socials from '../Socials/Socials';
import Button from '../Button/Button';
import Dots from '../Dots/Dots';

import './Banner.scss';

import imageMe from './img/me.jpg';

const Banner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="banner">
          <div className="col-xs-12 col-sm-8 col-md-6">
            <h1>
            I design and develop cool websites for agencies and individuals!
            </h1>

            <p>
            My curiosity and my motivation for the web world make me someone passionate and hardworking.
            </p>
            <Socials darked />
          </div>

          <div className="col-sm-6 col-md-6 img">
            <img src={imageMe} width="100%" alt="Me" />
            <Dots name="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
