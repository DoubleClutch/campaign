import React from 'react';
import '../css/AboutContainer.css';
import AboutTitle from './aboutTitle.jsx';
import AboutImg from './aboutImg.jsx';
import AboutBody from './aboutBody.jsx';

const AboutContainer = (props) => (
    <div className="about-container">
        {props.campaign.about.map((item) => {  
            if(item.type === 'heading') {
                return <AboutTitle title={item.value}/>
            }
            if(item.type === 'block') {
                return <AboutBody body={item.value}/>
            }
            if(item.type === 'img') {
                return <AboutImg img={item.value}/>
            }
        })}
    </div>
)

export default AboutContainer;