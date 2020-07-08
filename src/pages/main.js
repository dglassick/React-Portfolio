import React, { Fragment } from 'react';

import pdf from './assets/images/DerekBryanGlassickResume2020.pdf';
import profilepic from './assets/images/IMG_6262.jpg';

import PortfolioCards from '../components/PortfolioCards/PortfolioCards';

function Main() {
  return (
    <Fragment>
      <div class='backImg slider-item overlay'>
        <div class='container'>
          <div class='row slider-text align-items-center justify-content-center'>
            <div class='col-lg-12 text-center col-sm-12'>
              <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <br />
              <br />
              <hr />
              <div class='row justify-content-center links'>
                <p class='col-sm-3 mb-0  move'>
                  <span>
                    <i class='icon-github-alt'></i>
                  </span>
                  <a
                    href='https://github.com/dglassick'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='btn btn-outline-white link-buttons px-5 py-3'
                  >
                    GitHub <br /> <i class='fab fa-github fa-3x py-2'></i>
                  </a>
                </p>
                <p class=' col-sm-3 mb-0  move'>
                  <a
                    href={pdf}
                    target='_blank'
                    rel='noopener noreferrer'
                    class='btn btn-outline-white link-buttons px-5 py-3'
                  >
                    Resume <br /> <i class='fas fa-file fa-3x py-2'></i>
                  </a>
                </p>
                <p class='col-sm-3 mb-0  move'>
                  <a
                    href='https://www.linkedin.com/in/derek-glassick-489ba590/'
                    target='_blank'
                    rel='noopener noreferrer'
                    class='btn btn-outline-white link-buttons px-5 py-3'
                  >
                    LinkedIn <br /> <i class='fab fa-linkedin fa-3x py-2'></i>
                  </a>
                </p>
              </div>
              <h1 class='mb-4 links'>
                Hi, my name is Derek Glassick.
                <br />
                This is my portfolio.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class='section bg-dark' id='about-me'>
        <div class='container description'>
          <hr />
          <br />
          <br />
          <div class='row align-items-center'>
            <div class='col-md-6'>
              <img
                src={profilepic}
                width='350'
                alt='profile'
                class='img-fluid align-left slide-in'
              />
            </div>
            <div class='col-md-5 mr-auto'>
              <h1 class='mb-4 section-title ' style={{ color: '#fff' }}>
                About Me
              </h1>
              <p className='lead' style={{ color: '#fff' }}>
                Since I was a child I've enjoyed solving puzzles, problems, and
                figuring out how things work. After discover my passion for
                coding I've been scratching the itch to problem solve every day.
                I enjoy figuring out bugs, creating detailed webpages, and
                crafting usefull applications. While I definitely do not know
                everything the knowledge I've gained has made me resourceful and
                capable of any task I appreciate you taking your time to look at
                the things that I've created.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <div class='section bg-light block-11'>
        <div class='container links'>
          <div class='row justify-content-center mb-5'>
            <div class='col-md-8 text-center'>
              <h2 class='mb-4 section-title'>Program Knowledge</h2>
            </div>
          </div>
        </div>
      </div>
      <div class='section'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-4 text-center'>
              <div class='service'>
                <span
                  class='fas fa-bone fa-5x mb-4 d-block'
                  style={{ color: '#dddddd' }}
                ></span>
                <h3 className='display-4'>Front-End</h3>
                <div>
                  <h6>HTML</h6>
                  <h6>CSS</h6>
                  <h6>Bootstrap</h6>
                </div>
              </div>
            </div>
            <div class='col-lg-4 text-center'>
              <div class='service'>
                <span
                  class='fas fa-tools fa-5x mb-4 d-block'
                  sstyle={{ color: '#dddddd' }}
                ></span>
                <h3>JavaScript</h3>
                <div>
                  <h6>React.js</h6>
                  <h6>JS/ES6</h6>
                  <h6>JQuery</h6>
                  <h6>JSON</h6>
                  <h6>AJAX</h6>
                  <h6>APIs</h6>
                </div>
              </div>
            </div>
            <div class='col-lg-4 text-center'>
              <div class='service'>
                <span
                  class='fas fa-archive fa-5x mb-4 d-block'
                  style={{ color: '#dddddd' }}
                ></span>
                <h3>Back-End</h3>
                <div>
                  <h6>Node.js</h6>
                  <h6>Express</h6>
                  <h6>MySQL</h6>
                  <h6>MongoDB</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div class='section portfolio-section bg-dark'>
        <br />
        <div class='container links'>
          <div class='row mb-5 justify-content-center'>
            <div class='col-md-8 text-center' id='about-me'>
              <h2 class='mb-4 section-title'>Completed Projects</h2>
              <p>Here are some projects that display some Full Stack skills</p>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='row mb-5 no-gutters'>
            <PortfolioCards
              image={
                'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              }
              title={'Dev Connector'}
              code={'React/MongoDB/Node.js/CSS'}
              link1={'https://rocky-taiga-74923.herokuapp.com/'}
              link2={'https://github.com/dglassick/dev-connector.github.io'}
              description={
                'MERN Full stack that allows user to create a profile, make posts, and commenton or like other posts.'
              }
            />

            <PortfolioCards
              image={
                'https://images.pexels.com/photos/3936358/pexels-photo-3936358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              }
              title={'Covid Tracker'}
              code={'HTML/Bootstrap/Javascript/API/Mapping'}
              link1={
                'https://dglassick.github.io/covid-group-project.github.io/'
              }
              link2={
                'https://github.com/dglassick/covid-group-project.github.io'
              }
              description={
                'App to help track and spread informatin about COVID-19.'
              }
            />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </Fragment>
  );
}

export default Main;
