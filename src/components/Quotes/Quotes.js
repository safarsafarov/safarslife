import React from 'react';

import './Quotes.scss';

export default function Quotes() {
  return (
    <section className="quotes">
      <div className="container">
        <div className="title">
          <span>Some opinions</span>
          <h1>What people say about me</h1>
        </div>

        <p>
          You will only find nice words{' '}
          <span role="img" aria-label="heart">
            🥰
          </span>{' '}
        </p>

        <div className="row">
          <div className="comments">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="comment">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M9.983 0v7.391C9.983 13.095 6.252 16.961 1 18l-.995-2.151C2.437 14.932 4 12.211 4 10H0V0h9.983zM24 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151C16.437 14.932 18 12.211 18 10h-3.983V0H24z"
                  />
                </svg>
                <p>
                Safar knew how to perfectly meet my expectations as a web designer! Beautiful proposals and intelligent suggestions from him, allowed us to refine my product (website) and to engage better visibility on our main objective. Respect for good practices and its availability made it a superb service provider for our project.
                </p>
                <span>— Premium Digital</span>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="comment darked">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18">
                  <path
                    fill="white"
                    fillRule="nonzero"
                    d="M9.983 0v7.391C9.983 13.095 6.252 16.961 1 18l-.995-2.151C2.437 14.932 4 12.211 4 10H0V0h9.983zM24 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151C16.437 14.932 18 12.211 18 10h-3.983V0H24z"
                  />
                </svg>
                <p>
                I was surprised at Safar's skills and his ability to meet the deadlines he had offered us. We gave him a fairly precise and complex task which he was able to accomplish in a few days. Safar accompanied us until the installation of the product, something that was not even agreed in our contract. Safar combines skills, listening and availability which make him an excellent freelancer!
                </p>
                <span>— Rakhima Nugmanova</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
