import React, { Component } from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import '../css/video.css';
import kickLogoSm from '../assets/greenLogo.png';
import compass from '../assets/compass.png';
import pin from '../assets/pin.png';

class VideoPlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.idFromURL, 
            videoLink: 'https://www.kickstarter.com/projects/ferrowatches/tradiutm-a-swiss-made-mechanical-hand-wound-watch/widget/video.html',
            //poster: '',
            category: 'Product Design',
            location: 'Burbank, CA'
        }
    }

    componentWillMount() {
        fetch(`/campaign-info/api/${this.state.id}`)
        .then(res => res.json())
        .then(body => {
            console.log(body);
            this.setState({
                videoLink: body.videoURL,
                category: body.category,
                location: body.location,
                // poster: body.videoURL,
            })
        })  
    }

    render() {
        return (
            <div>
                <div className="main-video">
                    <iframe width="640" height="360" src={this.state.videoLink} frameBorder='0' scrolling='no'></iframe>
                    {/* <Player
                        playsInline
                        poster={this.state.videoLink}
                        src={this.state.videoLink}>
                        <BigPlayButton position="center" />
                    </Player> */}
                </div>
                <div className="bottom-tags">
                    <div className="icon-group">
                        <img className="logo" src={kickLogoSm} alt={"logo"}></img>
                        <div className="tags">Project We Love</div>
                    </div>
                    <div className="icon-group">
                        <img className="icon" src={compass} alt={"logo"}></img>
                        <div className="tags">{this.state.category}</div>
                    </div>
                    <div className="icon-group">
                        <img className="pin" src={pin} alt={"logo"}></img>
                        <div className="tags">{this.state.location}</div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default VideoPlayer;