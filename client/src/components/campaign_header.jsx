import React, { Component } from 'react';
import '../css/campaign_header.css';
import userImg from '../assets/userImg.jpg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import UserPopUp from './userPopUp.jsx';
var _ = require('lodash');
import throttle from 'lodash.throttle';


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
           tagline: 'This is another default, but this time a tagline',
           userBioVisable: false,
           time: true,
        }
    }

    componentWillMount() {
        if(this.state.id === '') {
            this.getHeader(1);
        } else {
            this.getHeader(this.state.id);
        }
    }

    toggleUserBio() {
        console.log('toggle toggle');

       this.setState({
            userBioVisable: !this.state.userBioVisable,
        })
    }

    getHeader(currentID) {
        fetch(`http://127.0.0.1:3300/campaign-info/api/${currentID}`)
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
                    
                    <div className="followBtn" onClick={this.toggleUserBio.bind(this)}>Follow</div>
                        {/* <button className="followBtn"> Follow </button> */}
                        
                        {/* <ReactCSSTransitionGroup
                            transitionName="showUserBioTransition"
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={200}
                        >
                            {this.state.userBioVisable === true &&
                            <UserPopUp />
                            }
                        </ReactCSSTransitionGroup> */}
    
                </div>

                <div className="title-and-tagline-container">
                    <div className="title-and-tagline">
                
                        <ReactCSSTransitionGroup
                            transitionName="showUserBioTransition"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={1}
                        >
                            {this.state.userBioVisable === true &&
                                <UserPopUp />
                            }
                        </ReactCSSTransitionGroup>

                        <ReactCSSTransitionGroup
                            transitionName="showHeadingTransition"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={1}
                        >
                            {this.state.userBioVisable === false && 
                            <div className="title-and-tagline">
                                <h1 className="title">{this.state.title}</h1>
                                <h4 className="tagline">{this.state.tagline}</h4>
                            </div>  
                            }
                            
                        </ReactCSSTransitionGroup> 

                    </div>
                </div>
            </div>
        )
    }
}

export default CampaignHeader;




{/* <ReactCSSTransitionGroup
                        transitionName="showUserBioTransition"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={200}
                    >
                        {this.state.userBioVisable ? 
                        <UserPopUp /> :
                        this.state.userBioVisable === false &&
                        <div>
                        <h1 className="title">{this.state.title}</h1>
                        <h4 className="tagline">{this.state.tagline}</h4>
                        </div>
                        }
                        {/* {this.state.userBioVisable === true &&
                        <UserPopUp />
                        }
                        {this.state.userBioVisable === false &&
                        <div>
                        <h1 className="title">{this.state.title}</h1>
                        <h4 className="tagline">{this.state.tagline}</h4>
                        </div>
                        } */}
                    {/* </ReactCSSTransitionGroup>  */}

                    {/* <ReactCSSTransitionGroup
                        transitionName="showUserBioTransition"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={200}
                    >
                        {this.state.userBioVisable === false &&
                        <div className="title-and-tagline">
                            <h1 className="title">{this.state.title}</h1>
                            <h4 className="tagline">{this.state.tagline}</h4>
                        </div>
                        }
                    </ReactCSSTransitionGroup>  */}