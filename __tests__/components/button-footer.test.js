import 'react-native';
import React from 'react';
import ButtonFooter  from '../../src/components/button-footer';
import renderer from 'react-test-renderer';
describe('testing button footer component', () => {
    
    it('renders buttom', () => {
        const view =  <ButtonFooter onPress={() => {}} label={'Testing'}  />
        const tree = renderer.create(view).toJSON();
        expect(tree).toMatchSnapshot();
    });

});