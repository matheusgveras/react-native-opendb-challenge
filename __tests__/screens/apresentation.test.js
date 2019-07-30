import 'react-native';
import React from 'react';
import Apresentation from '../../src/screens/apresentation';
import renderer from 'react-test-renderer';
describe('testing screen apresentation', () => {
  it('renders scren apresentation correctly', () => {
    const tree = renderer.create(<Apresentation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});