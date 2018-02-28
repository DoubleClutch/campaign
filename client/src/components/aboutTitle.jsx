import React from 'react';
import '../css/aboutTitle.css';

const AboutTitle = (props) => (
    <div className="about-title">
       <h2 className="title">{props.title}</h2>
    </div>
)

export default AboutTitle;