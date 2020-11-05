import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios
function App(props) {
/// const [name, setName] = useState('')
///  const [surname, setSurname] = useState('')
///  const [email, setEmail] = useState('')
///  const [subject, setSubject] = useState('')
///  const [message, setMessage] = useState('')
const reader = () => {
  let a = document.getElementsByClassName('name')[0].value
  let b = document.getElementsByClassName('email')[0].value
  let c = document.getElementsByClassName('subject')[0].value
  let d = document.getElementsByClassName('bigbutton')[0].value
}

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
        (version 4). Example: <i className="fa fa-camera"></i>
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
          <input type="text" placeholder="Your Name..." className='name'></input>
          <input type="text" placeholder="Your Email..." className='email'></input>
          <input type="text" placeholder="Subject..." className='subject'></input><br></br>
          <textarea type="text" placeholder="Leave your message..." className='bigbutton'></textarea><br></br>
          <input type="button" value="SEND MESSAGE" onClick = {reader}></input>
        </form></div>
      <hr></hr>
    </div>
  );
}

export default App;
