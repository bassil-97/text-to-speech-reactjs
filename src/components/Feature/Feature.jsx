import React from 'react';
import "./Feature.css";

export default function Feature({ title, icon,text }) {
  return (
    <div className='app-feature__conatiner'>
        <div className="feature-icon">
        {icon}
        </div>
        <h5>{title}</h5>
        <p className='text-center text-muted'>{text}</p>
    </div>
  )
}
