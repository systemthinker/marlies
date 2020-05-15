import React from 'react';
import './homecard.css'

export default function HomeCard(props){
    return (
        <div className={`col-2 ${props.className}`}>
            
          <div>
            <p>{props.text}</p>
          </div>
          <div>
          <button class="btn btn-light">Lees Meer</button>
          </div>
        </div>
    )
}