import React from 'react';

import Skills from './Skills/Skills';
import Experiences from './Experiences/Experiences';

import './About.scss';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="title">
          <span>About me</span>
          <h1>
            I am MERN stack developer with two years of experience in coding and designing. Currently studying in China, Hangzhou Dianzi University
          </h1>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6">
            <p>
            Live to learn, learn to live. I am the person of growth and prosper. Every day I spent my time to learning and getting new information to sharpen my skills. Inspired by people around me.{' '}
              <strong>
                We insipe others, if we are inspired by what we do.
              </strong>
            </p>
          </div>
          <div className="col-sm-6 col-md-6">
            <p>
            Inspired by what I do, I can offer my services to prospects. After having understood the objective of the project functionally, I allow myself to make my maximum concerning my inspiration, it is there that for me that has the most impact.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Skills />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6">
            <Experiences />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
