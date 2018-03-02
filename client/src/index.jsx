import React, { Component } from 'react';
import {render} from 'react-dom';
import CampaignHeader from './components/campaign_header.jsx';
import VideoPlayer from './components/video.jsx';
import AboutContainer from './components/aboutContainer.jsx';



const defaultCampaign = {
    currentCampaign: {
        id: 1,
        title: 'Ledr: the tool roll for everyone!', 
        owner: 'Bobby & Calvin', 
        location: 'Burbank, CA', 
        videoURL: 'https://ksr-video.imgix.net/projects/3260803/video-857213-h264_high.mp4', 
        tagline:'From pens & cables to wrenches & screwdrivers, bring order to your every day tools!', 
        previousCampaigns: 5,
        category: 'A tool roll is one of the most versatile packing accessories for organizing a large amount of items in a very small space. It\'s super compact when rolled up for travel, yet perfectly organized when opened for use. Most are designed with the kitchen or workshop in mind, but Ledr tool rolls are designed for everyone, to use anywhere to carry anything!',
        about: [
            {type: 'heading', value: 'this is a sample about heading'}, 
            {type: 'block', value: 'This is a block of text'}, 
            {type: 'img', value: 'http://bit.ly/2Feb7lB'},
            {type: 'img', value: 'http://bit.ly/2F0sR4x'},
            {type: 'block', value: 'This is a block of text'}, 
        ]
    }
}

//need more <App> for each component
//let campaignId = window.location
// console.log(campaignId);

window.CampaignHeader = CampaignHeader;
window.VideoPlayer = VideoPlayer;
window.AboutContainer = AboutContainer;

//render(<CampaignHeader campaign={defaultCampaign.currentCampaign}/>, document.getElementById('campaign-title'));
// render(<VideoPlayer campaign={defaultCampaign.currentCampaign}/>, document.getElementById('campaign-video'));
// render(<VideoPlayer campaign={defaultCampaign.currentCampaign}/>, document.getElementById('campaign-video2'));

//render(<AboutContainer campaign={defaultCampaign.currentCampaign}/>, document.getElementById('campaign-about'));