import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = ()=> (
    <div className="row">
    <div className="col-2">
      <h1>
        Give your<br />
        workout a new style
      </h1>
      <p>
        Success is not always about greatness. It's about consistency.<br />
        Consistent hard work gains success. Greatness will come.
      </p>
      <AnchorLink className="btn" href='#featured'>Explore Now &#8594;</AnchorLink>
      {/* <a className="btn" href="#featured">Explore Now &#8594;</a> */}
    </div>
    <div className="col-2">
      <img src="images/image1.png" alt="" />
    </div>
  </div>
)

export default Hero;