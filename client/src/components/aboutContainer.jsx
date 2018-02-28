import React from 'react';
import '../css/AboutContainer.css';
import AboutTitle from './aboutTitle.jsx';
import AboutImg from './aboutImg.jsx';
import AboutBody from './aboutBody.jsx';

const AboutContainer = (props) => (
    <div className="about-container">
        <div>
            this will be the about campaign section
        </div>
        <AboutTitle />
        <AboutImg />
        <AboutBody />
    </div>
)

export default AboutContainer;