import React, { useEffect } from 'react';
import './App.css';

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
      <header className="App-header">
        <nav className="navbar" id="navbar">
          <ul>
            <li><a href="#home">Lara Loicq</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <section id="home">
        <h1>Lara Loicq</h1>
          <p>Home</p>
          {/* <div className="title">
            <h1>Front-end developer junior</h1>
          </div>
          <div className="description">
            <h4>Hi ! I'm Lara and I'm looking for a job or  a fresh new internship.
                I'm a passionate, creative and beer pong professional.
                If you want to know more about me, just scroll !
            </h4>
          </div> */}
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

        

      </header>
      
      </div>

      
    </React.Fragment>
  );
}


export default App;
