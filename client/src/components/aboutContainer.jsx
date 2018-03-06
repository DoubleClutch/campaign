import React, {Component} from 'react';
import '../css/AboutContainer.css';
import AboutTitle from './aboutTitle.jsx';
import AboutImg from './aboutImg.jsx';
import AboutBody from './aboutBody.jsx';


class AboutContainer extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.idFromURL,
            about: [],
            aboutSectionTitle: 'im a title',
            aboutSectionBody: 'im the body of an about section',
            aboutImg: 'https://ksr-ugc.imgix.net/assets/020/147/821/d329440141f354fc38d3fe698b3471de_original.jpg?w=680&fit=max&v=1517963343&auto=format&q=92&s=2f25b9881e1de2c488a18102e72a2efd',
        }
    }

    componentWillMount() {
        if(this.state.id === '') {
            this.getAboutContainer(1);
        } else {
            this.getAboutContainer(this.state.id);
        }
    }

    getAboutContainer(currentID) {
        fetch(`http://127.0.0.1:3300/campaign-info/api/${currentID}`)
        .then(res => res.json())
        .then(body => {
            this.setState({
                id: body.id,
                about: body.about,
            })
        })  
    }
    
    render() {
        return(
            <div className="about-container">
                {this.state.about.map((item, i) => {  
                    if(item.type === 'heading') {
                        return <AboutTitle title={item.value} key={i+1}/>
                    }
                    if(item.type === 'block') {
                        return <AboutBody body={item.value} key={i+1}/>
                    }
                    if(item.type === 'img') {
                        return <AboutImg img={item.value} key={i+1}/>
                    }
                })}
            </div>
        )
    }
}

export default AboutContainer;