import React, { Component } from 'react';
import { Player, BigPlayButton, PosterImage } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import '../css/video.css';

class VideoPlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 1,
            videoLink: 'https://ksr-ugc.imgix.net/assets/018/258/330/203e0e65214f740f7e8ba8ec15720c02_original.jpg?crop=faces&w=1024&h=576&fit=crop&v=1516029722&auto=format&q=92&s=29874380124a7722b19816b78779e199',
            poster: 'https://ksr-ugc.imgix.net/assets/018/258/330/203e0e65214f740f7e8ba8ec15720c02_original.jpg?crop=faces&w=1024&h=576&fit=crop&v=1516029722&auto=format&q=92&s=29874380124a7722b19816b78779e199',
        }
    }

    componentWillMount() {
        fetch(`/campaign-info/api/${this.state.id}`)
        .then(res => res.json())
        .then(body => {
            this.setState({
                id: body.id,
                videoLink: body.videoLink,
                poster: body.poster,
            })
        })  
    }

    render() {
        return (
            <div>
                <div className="main-video">
                    <Player
                        playsInline
                        
                        poster={this.state.poster}
                        src={this.state.videoLink}>
                        <BigPlayButton position="center" />
                    </Player>
                </div>
                <div className="bottom-tags">
                    <div className="tags">element 1</div>
                    <div className="tags">element 2</div>
                    <div className="tags">element 3</div>
                </div>
            </div>
            
        )
    }
};

export default VideoPlayer;