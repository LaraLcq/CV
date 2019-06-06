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
              <img src="./photo.png" width="50%" alt="img"/>
            </div>
        </section>

        <section id="skills" className="column">
          <div className="TitreSkills">
            <h1>Skills</h1>
          </div>

        <div className="Skillsliste">
          <div id="dayto">
          <p>Day To Day Confort</p>
            <ul>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Html/CSS</li>
              <li>Sass</li>
              <li>Wordpress</li>
              <li>Bootstrap</li>
              <li>Adobe Suite</li>
              <li>Figma/Sketch</li>
              <li>Git</li>
              <li>Scrum/Agile</li>
            </ul>
          </div>

          <div id="XP">
          <p>Experience with</p>
            <ul>
              <li>NodeJs</li>
              <li>PHP</li>
              <li>PostgreSQL</li>
              <li>Python</li>
              <li>Java</li>
              <li>Responsive Layout</li>
            </ul>
          </div>

          <div id="Learn">
          <p>Actually Learning</p>
            <ul>
              <li>React Native</li>
              <li>Python</li>
              <li>Svelte</li>
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
