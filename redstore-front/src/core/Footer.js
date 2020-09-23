import React from 'react';

const Footer = ()=>{
    return (
        <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download our App</h3>
              <p>Download App for Android and iOS mobile phone </p>
              <div className="app-logo">
                <img src="images/play-store.png" alt="" />
                <img src="images/app-store.png" alt="" />
              </div>
            </div>
            <div className="footer-col-2">
              <img src="images/logo-white.png" alt="" />
              <p>
                Our purpose is to sustainably make the pleasure and benefits of
                sports accessible to the many
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Posts</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow Us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p>Improved and Converted to React/Node Application by : <a href="https://vitaliybulyma.com">Vitaliy Bulyma. Click to visit my portfolio</a></p>
          <p>Styling reference: <a href="https://www.youtube.com/channel/UCkjoHfkLEy7ZT4bA2myJ8xA">Click Here</a></p>
          <p> &copy; 2020. For Educational purposes only!</p>

        </div>
      </div>
    )
};

export default Footer;