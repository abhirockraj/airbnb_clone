import React from "react";
import start_img from '../Star_1.jpg'
export default function Card(props) {
    return(
    <div>
        <div>
            <img className='image' src= {props.img}/>
        </div>
        <div>
                <img src= {start_img}/>
               <span>{props.rating}</span> 
                <span>({props.reviewCount})</span>
                <span>{props.country}</span>
             <p>
                 {props.title}
             </p>
        </div>
    </div>  )
};
