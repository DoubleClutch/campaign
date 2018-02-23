import React, { Component } from 'react';
import {render} from 'react-dom';
import CampaignHeader from './components/campaign_header.jsx';
import VideoPlayer from './components/video.jsx';

class App extends Component {
// add state to the components
    constructor(props) {
        super(props)

        this.state = {
            currentCampaign: {
                title: 'Ledr: the tool roll for everyone!', 
                owner: 'Dave & Calvin Laituri', 
                location: 'Saxonville, Framingham, MA', 
                videoURL: 'https://ksr-video.imgix.net/projects/3260803/video-857213-h264_high.mp4', 
                tagline:'From pens & cables to wrenches & screwdrivers, bring order to your every day tools!', 
                about: 'double clutch needs no introduction',
                previousCampaigns: 3,
                category: 'A tool roll is one of the most versatile packing accessories',
            }
        }
    }

  render () {
    return (
        <div>
            <CampaignHeader campaign={this.state.currentCampaign}/>
            <VideoPlayer campaign={this.state.currentCampaign} />
        </div>
    );
  }
}

render(<App/>, document.getElementById('project-title'));