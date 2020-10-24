import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="HeroImage"></div>
      <div className="HeroText">
        <h1>Simple Design | Personal Portfolio</h1>
        <p>This is a mobile friendly layout with
        Bootstrap v3.3.1 framework. Maecenas eu ante at nunc posuere
        fringilla sit amet non dolor. Proin condimentum fermentum nunc.</p>
      </div>
      <div className="Part">
        <p className='BoldText'>LEARN ABOUT ME</p>
        <div className="photo2"></div>
        <p>Volton is free website design from templatemo. You can use this
        template for any purpose. Please tell your friends about it.Thank you.
        Credit goes to
        <span><a href="https://unsplash.com/"> Unsplash</a></span>
        for images used in this design.You can <span className="BoldText">
            change menu icons</span> by checking
        <span><a href="http://fontawesome.info/font-awesome-icon-world-map/"> Font Awesome</a></span>
        (version 4). Example: <i class="fa fa-camera"></i>
        </p>
      </div>
      <hr className="hr"></hr>
      <div className="Part">
        <p><span className="BoldText">PHOTOS OF WHAT I DO</span></p>
        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        Nam nec tellus a odio tincidunt auctor a ornare odio.
        Maecenas et lorem molestie, maximus justo dignissim, cursus nisl.
        Nullam at ante quis ex pharetra pulvinar quis id dolor.
        Integer lorem odio, euismod ut sem sit amet, imperdiet condimentum diam.
          </p>
        <div className="Gallery">
          <div className="GalleryRow">
            <div className="ImageContainer">
              <div className="galleryphoto1"></div>
              <div className='overlay'>
                <div className='overlaytext'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam cursus
                 </div>
              </div>
            </div>
            <div className="ImageContainer">
              <div className="galleryphoto2"></div>
              <div className='overlay'>
                <div className='overlaytext'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam cursus
                 </div>
              </div>
            </div>
            <div className="ImageContainer">
              <div className="galleryphoto3"></div>
              <div className='overlay'>
                <div className='overlaytext'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam cursus
                 </div>
              </div>
            </div>
          </div>
          <div className="GalleryRow">
            <div className="ImageContainer">
              <div className="galleryphoto4"></div>
              <div className='overlay'>
                <div className='overlaytext'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam cursus
                 </div>
              </div>
            </div>
            <div className="ImageContainer">
              <div className="galleryphoto5"></div>
              <div className='overlay'>
                <div className='overlaytext'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam cursus
                 </div>
              </div>
            </div>
            <div className="ImageContainer">
              <div className="galleryphoto6"></div>
              <div className='overlay'>
                <div className='overlaytext'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam cursus
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="Part"><p><span className="BoldText">PLACE TO TALK WITH ME</span></p><p>Vestibulum ac iaculis erat, in semper dolor. Maecenas et lorem molestie, maximus justo dignissim, cursus nisl. Nullam at ante quis ex pharetra pulvinar quis id dolor. Integer lorem odio, euismod ut sem sit amet, imperdiet condimentum diam.</p>
        <form action="http://localhost:3000/">
          <input type="text" placeholder="Your Name..."></input>
          <input type="text"placeholder="Your Email..."></input>
          <input type="text"placeholder="Subject..."></input><br></br>
          <input type="text"placeholder="Leave your message..."></input><br></br>
          <input type="send" value="SEND MESSAGE"></input>
        </form></div>
        <hr></hr>
    </div>
  );
}

export default App;
