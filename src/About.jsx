import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import web from  '../src/images/about.gif';
import {NavLink} from 'react-router-dom';
import Comman from './Common';


const About=()=> {
  return (
    <>
     <Comman name='Welcome to About page' imgsrc={web} visit='/contact' btname='Contact Now'/>
    </>
  );
}

export default About;
