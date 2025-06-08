import React from 'react'
import './Footer.css';
import facebook_icon from '../../assets/facebook.png';
import youtube_icon from '../../assets/youtube.png';
import twitter_icon from '../../assets/twitter.png';
import instagram_icon from '../../assets/instagram.png';
import netflex_logo from '../../assets/netflex2.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
      <img src={netflex_logo} alt='netflexlogo' className='footer-logo'/>
      <p style={{marginLeft: '30px'}}>Netflex is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more. Watch as much as you want, whenever you want, without a single commercial – all for one low monthly price. There's something for everyone on Netflex.</p>
      </div>
      <div className='footer-middle'>
      <div className="footer-text">
      <ul className='footer-links'>
        <p><b>HELP</b></p><br></br>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Customer Support</a></li>
        <li><a href="#">Live Chat</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <ul className='footer-links'>
        <p><b>COMPANY</b></p><br></br>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing Plans</a></li>
        <li><a href="#">What's New</a></li>
        <li><a href="#">Our License</a></li>
      </ul>
      <ul className='footer-links'>
        <p><b>LEGAL</b></p><br></br>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Cookie Policy</a></li>
        <li><a href="#">DMCA Notice</a></li>
      </ul>
      </div><br></br>
      <div className="footer-icons">
        <img src={facebook_icon} alt='facebooklogo'/>
        <img src={youtube_icon} alt='youtubelogo'/>
        <img src={twitter_icon} alt='twitterlogo'/>
        <img src={instagram_icon} alt='instagramlogo'/>
      </div><br></br>
      </div>
      &nbsp;
      <hr></hr>
      <div className="footer-bottom">&nbsp;
        <p>Netflex is a registered trademark of Netflex Inc. All other trademarks are the property of their respective owners.</p>
        <p>© 2025 Netflex. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer