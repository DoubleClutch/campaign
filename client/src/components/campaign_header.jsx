import React, { Component } from 'react';
import '../css/campaign_header.css';
import userImg from '../assets/userImg.jpg';


//upon getting the data then load the component, component did mount

class CampaignHeader extends Component {
    constructor(props) {
        super(props);

       this.state = {
           id: this.props.idFromURL,
           creator: 'Chas Harring',
           ownerAvatar: userImg,
           pastProjects: '3',
           title: 'This is the default title',
           tagline: 'This is another default, but this time a tagline'
       }
    }

    componentWillMount() {
        fetch(`/campaign-info/api/${this.state.id}`)
        .then(res => res.json())
        .then(body => {
            this.setState({
                creator: body.owner,
                pastProjects: body.previousCampaigns,
                title: body.title,
                tagline: body.tagline,
                ownerAvatar: body.ownerAvatar,
            })
        })  
    }

    render() {
        return (
            <div className="user-and-title-info">
                <div className="creatorInfo">
                    <div className="creator"><img className="avatar" src={this.state.ownerAvatar} alt={"user image"} /></div>
                    <div className="creatorName">By {this.state.creator}</div>
                    <div className="creatorProjects">{this.state.pastProjects} projects</div>
                    <div><button className="followBtn">Follow</button></div>
                    
                </div>
                <div className="title-and-tagline-container">
                    <div className="title-and-tagline">
                        <h1 className="title">{this.state.title}</h1>
                        <h4 className="tagline">{this.state.tagline}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default CampaignHeader;