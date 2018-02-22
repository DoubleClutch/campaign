import React, { Component } from 'react';
import {render} from 'react-dom';
import CampaignHeader from './components/campaign_header.jsx';

class App extends Component {
// add state to the components
    constructor(props) {
        super(props)
    }

  render () {
    return (
        <div>
            <CampaignHeader />
        </div>
    );
  }
}

render(<App/>, document.getElementById('project-title'));