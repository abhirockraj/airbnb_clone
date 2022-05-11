import React from 'react';
import Hero from './Hero';
import Navbar from './NavBar';
import Card from './Props';
import swimmer from '../image_12.jpg';
import wedding from '../wedding-photography_1.jpg';
import bike from '../mountain-bike_1.jpg';
export default function HeaderContent() {
    return(
    <div className="headContent" >
        <Navbar/>
        <Hero/>
        <div className='group_card'>
        <Card  img={swimmer} rating='5'reviewCount='10' country='India' title='Life lessons with Katie Zaferes'/>
        <Card img={wedding} rating='4'reviewCount='20' country='India' title='Life lessons with Katie Zaferes'/>
        <Card img={bike} rating='7'reviewCount='40' country='India' title='Life lessons with Katie Zaferes'/>
        </div>
        
        
        
        
    </div>)  
};