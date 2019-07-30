import 'react-native';
import React from 'react';
import Button  from '../../src/components/button';
import {Text} from 'react-native'
import renderer from 'react-test-renderer';
describe('testing button component', () => {
    
    it('renders buttom', () => {
        const view = <Button><Text>My button</Text></Button>
        const tree = renderer.create(view).toJSON();
        expect(tree).toMatchSnapshot();
    });

});