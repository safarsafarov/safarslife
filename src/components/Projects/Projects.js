import React from 'react';

import Button from '../Button/Button';

import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="title">
              <span>My projects</span>
              <h1>
                Product that I have created.{' '}
                <span role="img" aria-label="like">
                  😎
                </span>
              </h1>
            </div>

            <p>
            After a few months of internship I learned one thing. You have to know how to pick up, write and perform.
            </p>
            <p>
            Projects allow<strong> to learn</strong>,
              <strong> to exchange</strong> and <strong>performer</strong> It is for me a way of evacuating my "ideas" that goes through my head (even if it sucks, I need it), to learn new technologies but also to exchange with a lot of people on my ideas and improve them.
            </p>
            <p>
            Having the idea is simple, developing it, maintaining and releasing the product has a lot less. It takes time, reflection but also support! This is why I make my open-source projects as much as possible now, that I exchange my projects as much as possible on social networks.
            </p>

            <a
              href="https://github.com/safarsafarov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover my GitHub
            </a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-5 col-md-offset-1 col-lg-5">
            <div className="projects row">
              <div className="col-xs-12 col-sm-6 col-md-12">
                <div className="project pull-right">

                  <h3>Premium Digital</h3>

                  <p>
                    A website to drive clients into site and show them services which could be useful for selling their product, digitalization of products.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-12">
                <div className="project">
                  <div className="logo">
                    <svg
                      width="70"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 116 116"
                    >
                      <defs>
                        <linearGradient
                          id="a"
                          x1="21.918%"
                          x2="87.699%"
                          y1="87.933%"
                          y2="12.073%"
                        >
                          <stop offset="0%" stopColor="#F3F3F3" />
                          <stop offset="100%" stopColor="#FFF" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="261"
                        cy="116"
                        r="58"
                        fill="url(#a)"
                        fileRule="evenodd"
                        transform="translate(-203 -58)"
                      />
                    </svg>
                  </div>

                  <h3>A project idea ?</h3>

                  <p>
                    Do you have an idea for a project? You want to have a website that will look beautiful and perform it super fast? In this case you can mail me at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
