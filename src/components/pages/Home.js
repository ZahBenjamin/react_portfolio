import React from 'react';
import benZah from '../../assets/images/ben_icon.png';
import '../../styles/Home.css';


export default function Home() {
  const styles = {
    benImage: {
      maxHeight: '15em',
    },
  };

  return (
    <div style={{ padding: 15 }}>
      <div className='container' style={{textAlign: 'center',}}>
        <h2 style={{textAlign: 'center'}}>About</h2>
        <img src={benZah} style={{width: 200, height: 200, borderRadius: 200/ 2}} alt='Ben image' />


        <p>
          Full-Stack developer that is competent in MERN stack and learning ruby-on-rails. Focused on back-end while learning all relevant skills.
        </p>
        <p>
          In my free time I can be found training Brazilian Jiu Jitsu, baking, playing guitar, or hanging out with my cats.
        </p>
        <p>
          Art done by <a href="https://www.instagram.com/MoosewatcherZ/">Moose!</a>
        </p>
      </div>
    </div>
  );
}
