import React from 'react';
import TagAlong from '../../assets/images/tagAlong.gif';
import ReadmeGen from '../../assets/images/readmeGenerator.gif';
import GitGif from '../../assets/images/gitGet.gif';
import smAPI from '../../assets/images/socialmediaapi.gif';
import codeQuiz from '../../assets/images/codeQuiz.gif';
import pwGen from '../../assets/images/pwGen.gif';
import gigSpot from '../../assets/images/gigSpot.gif';
import mangoCat from '../../assets/images/mangoCat.gif';

import { IoLogoJavascript } from 'react-icons/io';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { BsDiscord, BsTelegram } from 'react-icons/bs';
import { DiMongodb, DiRuby, DiNodejs } from 'react-icons/di';
import { SiInsomnia, SiGraphql } from 'react-icons/si';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div style={{ padding: 15 }}>
      <div className='container'>
        <h2>Portfolio</h2>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Gig Spot</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={gigSpot} style={{ paddingTop: '5px' }} height="500px" alt='Gig Spot'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <FaReact /> &ensp; <DiNodejs /> &ensp; <SiGraphql />
                </p>
                <a href="https://gig-spot-20220508.herokuapp.com/" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/ekerseyc/gigspot" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Mango Meow Bot</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={mangoCat} style={{ paddingTop: '5px' }} height="500px" alt='Cat Photo Bot'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <DiRuby /> &ensp; <BsTelegram />
                </p>
                <a href="https://github.com/ZahBenjamin/telegram_cat_bot" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Tag Along - A Discord Calendar App</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={TagAlong} style={{ paddingTop: '5px' }} height="500px" alt='Tag Along'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <IoLogoJavascript /> &ensp; <FaBootstrap /> &ensp; <BsDiscord />
                </p>
                <a href="https://limitless-cove-90207.herokuapp.com/login" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/kevinlam11/tag_along" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Readme Generator</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={ReadmeGen} style={{ paddingTop: '5px' }} height="500px" alt='Readme Generator'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <IoLogoJavascript />
                </p>
                <a href="https://github.com/ZahBenjamin/readme_generator" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Git Get Gifs</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={GitGif} style={{ paddingTop: '5px' }} height="500px" alt='Movie Gif Gif'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <IoLogoJavascript /> &ensp; <FaBootstrap />
                </p>
                <a href="https://choyle-01.github.io/Movie-database-project/" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/choyle-01/Movie-database-project" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Social Media API</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={smAPI} style={{ paddingTop: '5px' }} height="500px" alt='SocialMedia API'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <DiMongodb /> &ensp; <DiNodejs /> &ensp; <SiInsomnia /> &ensp; <IoLogoJavascript />
                </p>
                <a href="https://www.youtube.com/watch?v=iw6dPg6rW2A" target="_blank" rel='noreferrer' className='card-link'>Video Link</a>
                <a href="https://github.com/ZahBenjamin/API_social_media" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">JavaScript Code Quiz</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={codeQuiz} style={{ paddingTop: '5px' }} height="500px" alt='Code Quiz Gif'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <IoLogoJavascript />
                </p>
                <a href="https://zahbenjamin.github.io/simple_code_quiz/" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/ZahBenjamin/simple_code_quiz" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className="card overflow-hidden m-3">
              <div className="card-header text-white bg-primary">Password Generator</div>
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={pwGen} style={{ paddingTop: '5px' }} height="500px" alt='Password Generator Gif'></img>
              </div>
              <div className="card-body">
                <p className='card-text'>
                  tools used: &ensp; <IoLogoJavascript />
                </p>
                <a href="https://zahbenjamin.github.io/password_generator/" target="_blank" rel='noreferrer' className='card-link'>Deployed App</a>&nbsp;
                <a href="https://github.com/ZahBenjamin/password_generator" target="_blank" rel='noreferrer' className='card-link'>Github Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
