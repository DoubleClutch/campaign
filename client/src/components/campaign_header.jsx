import React from 'react';
import '../css/campaign_header.css';
import userImg from '../assets/userImg.jpg';

//upon getting the data then load the component, component did mount

const CampaignHeader = (props) => (
    <div className="user-and-title-info">
        <div className="creatorInfo">
            <div className="creator"><img src={userImg} alt={"user image"} /></div>
            <div className="creator">by: Chas Harring</div>
            <div className="creator">5 projects</div>
            <div><button>Follow</button></div>
        </div>
        <div className="title-and-tagline-container">
            <div className="title-and-tagline">
                <h1>This is a big ol bag</h1>
                <h4>this is the best biggest ol bag</h4>
            </div>
        </div>
    </div>
)

export default CampaignHeader;