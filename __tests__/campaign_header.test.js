import React from 'react';
import { shallow } from 'enzyme';
import CampaignHeader from '../client/src/components/campaign_header.jsx';

describe('Campaign Header', () => {
    it('should be defined', () => {
      expect(CampaignHeader).toBeDefined();
    });
   
    it('should render correctly', () => {
      const tree = shallow(
        <CampaignHeader name='yoyo test' />
      );
      expect(tree).toMatchSnapshot();
    });
});