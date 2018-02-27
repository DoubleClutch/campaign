import React from 'react';
import { shallow } from 'enzyme';
import Video from '../client/src/components/video.jsx';

describe('Video Section', () => {
    it('should be defined', () => {
      expect(Video).toBeDefined();
    });
   
    it('should render correctly', () => {
      const tree = shallow(
        <Video />
      );
      expect(tree).toMatchSnapshot();
    });
});