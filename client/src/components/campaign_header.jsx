import React from 'react';
import '../css/campaign_header.css';
import userImg from '../assets/userImg.jpg';

const CampaignHeader = (props) => (
    <div className="user-and-title-info">
        <div className="creatorInfo">
            <div className="creator"><img src={userImg} alt={"user image"} /></div>
            <div className="creator">by: {props.campaign.owner}</div>
            <div className="creator">{props.campaign.previousCampaigns} projects</div>
            <div><button>Follow</button></div>
        </div>
        <div className="title-and-tagline-container">
            <div className="title-and-tagline">
                <h1>{props.campaign.title}</h1>
                <h4>{props.campaign.tagline}</h4>
            </div>
        </div>
    </div>
)

export default CampaignHeader;