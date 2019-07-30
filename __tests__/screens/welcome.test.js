import 'react-native';
import React from 'react';
import Welcome from '../../src/screens/welcome';
import renderer from 'react-test-renderer';
describe('testing screen welcome', () => {
  it('renders welcome correctly', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});