import React from 'react';
import Menu from './Menu';
import Hero from './Hero';
import {API} from '../config';

const Home = ()=> <div className="header">

<div className="container"> 
<Menu />
<Hero />
</div>

</div>;

export default Home;