import React from 'react';
import { shallow } from 'enzyme';
import Projects from './projects';

describe('Projects component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Projects />);
    const projectDiv = wrapper.find('.project');
    expect(projectDiv.length).toBe(1);
  });

  it('should render the correct number of projects', () => {
    const wrapper = shallow(<Projects />);
    const flipCards = wrapper.find('.flip-card');
    expect(flipCards.length).toBe(2); // assuming there are 2 projects in dataProjects
  });
});