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
              <div>
                <ul>
                  <li><a href="#home">Lara Loicq</a></li>
                  <li><a href="#about">About</a></li>
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
            <h1>Lara Loicq</h1>
            <p>I'm a front-end developer junior and a Bulldog Frenchie Lover</p>
        </section>

        <section id="about">
          <h1>About me</h1>
          <p>I'm a Bulldog Frenchie Lover</p>
        </section>

        <section id="skills">
          <h1>Skills</h1>
          <p>I'm a Bulldog Frenchie Lover</p>
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
