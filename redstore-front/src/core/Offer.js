import React from 'react';
import {Link} from 'react-router-dom';

const Offer = ()=>(
    <div className="offer">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img className="offer-img" src="images/exclusive.png" alt="" />
          </div>
          <div className="col-2">
            <p>Exclusively Available at RedStore</p>
            <h1>Smart Band</h1>
            <small
              >AMOLED Color, full-touch display with adjustable brightness
              AMOLED Color, full-touch display with adjustable brightness</small
            ><br />
            <Link to="/product/5f6b808aa9fc7b16fc56f991" className="btn">Buy Now &#8594;</Link>
            
          </div>
        </div>
      </div>
    </div>
);

export default Offer;