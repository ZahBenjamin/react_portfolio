import React from 'react';
import { BsDownload } from 'react-icons/bs'
export default function Resume() {
  return (
    <div style={{ padding: 15 }}>
    <div className='container'>
      
      <h2>Resume</h2>
      <p> Front end proficiencies:
       <ul>
         <li>HTML</li>
         <li>CSS</li>
         <li>CSS</li>
         <li>Javascript</li>
         <li>JQuery</li>
         <li>NPM</li>
         <li>React</li>
         <li>Ruby</li>
       </ul>
      </p>
      <p> Back end proficiencies:
       <ul>
         <li>Express</li>
         <li>NodeJS</li>
         <li>MVC Framework</li>
         <li>Ruby on Rails</li>
         <li>MySQL</li>
         <li>MongooseDB</li>
         <li>Insomnia</li>
       </ul>
      </p>
      <a href='../../assets/Resume.BenZah.docx.pdf' style={{textDecoration: 'none'}}><BsDownload /> Download resume pdf</a>
    </div>
    </div>
  );
}
