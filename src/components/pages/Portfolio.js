import React from 'react';
import TagAlong from '../../assets/images/tagAlong.gif';
import ReadmeGen from '../../assets/images/readmeGenerator.gif';
import GitGif from '../../assets/images/gitGet.gif';
import smAPI from '../../assets/images/socialmediaapi.gif';
import codeQuiz from '../../assets/images/codeQuiz.gif';
import pwGen from '../../assets/images/pwGen.gif';

import { IoLogoJavascript } from 'react-icons/io';
import { FaBootstrap } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';
import { DiNodejs } from 'react-icons/di';
import { SiInsomnia } from 'react-icons/si';

export default function Portfolio() {
  return (
    <div style={{ padding: 15 }}>
    <div className='container'>
      <h2>Portfolio</h2>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className="card overflow-hidden m-3">
            <div className="card-header text-white bg-primary">Tag Along - A Discord Calendar App</div>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img  src={TagAlong} style={{ paddingTop: '5px' }} height="500px" alt='Tag Along'></img>
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
              <img  src={ReadmeGen} style={{ paddingTop: '5px' }} height="500px" alt='Readme Generator'></img>
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
              <img  src={GitGif} style={{ paddingTop: '5px' }} height="500px" alt='Movie Gif Gif'></img>
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
                <img  src={smAPI} style={{ paddingTop: '5px' }} height="500px" alt='SocialMedia API'></img>
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
              <img  src={codeQuiz} style={{ paddingTop: '5px' }} height="500px" alt='Code Quiz Gif'></img>
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
              <img  src={pwGen} style={{ paddingTop: '5px' }} height="500px" alt='Password Generator Gif'></img>
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
