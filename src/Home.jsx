import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import web from  '../src/images/img2.gif';
import {NavLink} from 'react-router-dom';
import Common from './Common';


const Home=()=> {
  return (
    <>
    <Common name='Grow your business with ' imgsrc={web} visit='/service' btname='Get Started'/>
    </>
  );
}

export default Home;
