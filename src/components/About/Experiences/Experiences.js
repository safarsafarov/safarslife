import React from 'react';

import './Experiences.scss';

const Experiences = () => {
  return (
    <div className="experiences">
      <h3>Experience</h3>

      <div className="experience">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h4>Premium Digital</h4>
            <span className="date">mar 2019 - sep 2019</span>
            <p>Full-stack web developer</p>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h4>Freelancer at upwork</h4>
            <span className="date">feb 2018 — jan 2018</span>
            <p>Front-end developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
