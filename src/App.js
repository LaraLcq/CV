import React, { useEffect } from 'react';
import './App.css';
import './burgerMenu.css'

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault(); 
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
    });

    return () => document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click');
    });
  });


  return (
    <React.Fragment>
    <div className="App">
        <nav className="navbar" id="navbar">
          <input type="checkbox" className="toggler" />
          <div className="hamburger"><div></div></div>
          <div className="menu">
            <div>
              <div id="position-menu">
                <ul>
                  <li><a href="#home">Lara Loicq</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
    <header className="showcase">
       <div className="container showcase-inner">
      
       </div>
    </header> 
        </nav>
          <section id="home">

           <div className="texte">
              <h1>Front-End</h1>
              <h1>Developer junior</h1>
              <p>I'm a front-end developer junior and a Bulldog Frenchie Lover.
                I'm a Javascript and ReactJs addict. I'm actually looking for a great 
                internship or hiring opportunity at Liège/Luxembourg/Namur. 
                I learn quickly and I love to learn new programming langage!
              </p>
            </div>

            <div className="pics">
              <img src="./photo.png" width="500px" alt="img"/>
            </div>
        </section>

        <section id="skills">
          <h1>Skills</h1>

        <div className="Skillsliste">
          <div id="dayto">
          <p>Day To Day Confort</p>
            <ul>
              <li><p>Javascript</p></li>
              <li><p>ReactJs</p></li>
              <li><p>Html/CSS</p></li>
              <li><p>Sass</p></li>
              <li><p>Wordpress</p></li>
              <li><p>Adobe Suite</p></li>
              <li><p>Figma/Sketch</p></li>
              <li><p>Git</p></li>
              <li><p>Scrum/Agile</p></li>
            </ul>
          </div>

          <div id="experience">
          <p>Experience with</p>
            <ul>
              <li><p>NodeJs</p></li>
              <li><p>PHP</p></li>
              <li><p>Python</p></li>
              <li><p>Java</p></li>
              <li><p>Responsive Layout/Design</p></li>
            </ul>
          </div>
          </div>
        </section>

        <section id="experience">
          <h1>Experience</h1>
          <p>I'm a Bulldog Frenchie Lover</p>
        </section>

        <section id="contact">
          <h1>Contact</h1>
          <p>I'm a Bulldog Frenchie Lover</p>
        </section>

        
      
      </div>

      
    </React.Fragment>
  );
}


export default App;
