import React from 'react';
import { DiGithubAlt } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';

const styles = {
  footer: {
    backgroundColor: "white",
  }
}

export default function Footer() {
  return (
    <>
      <footer className="text-center col-12" style={styles.footer}>
        <div className="row text-center text-secondary py-4">
          <div className='text-center'>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-primary" href="https://github.com/ZahBenjamin">
              <DiGithubAlt />
              </a>
            </span>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-primary" href="https://www.linkedin.com/in/benjamin-zah-786760141">
                <FaLinkedin />
              </a>
            </span>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-primary" href="https://instagram.com/ben_zah">
                <ImInstagram />
              </a>
            </span>

          </div>

        </div>
      </footer>



    </>
  );

}