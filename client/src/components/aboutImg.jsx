import React from 'react';
import '../css/aboutImg.css'

const AboutImg = (props) => (
    <div className="about-image">
        <img src={props.img} alt="campaign" height="325" width="585" />
    </div>
)

export default AboutImg;