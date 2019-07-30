import 'react-native';
import React from 'react';
import Header  from '../../src/components/header';
import {Text} from 'react-native'
import renderer from 'react-test-renderer';

describe('testing header component', () => {

    it('renders header with name and passing props small and title', () => {
        const view = <Header small hideMenu title={'Teste'} goBack={() => {}} />
        const tree = renderer.create(view).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders header with name and passing props title', () => {
        const view = <Header hideMenu small={false} title={'Teste'} goBack={() => {}} />
        const tree = renderer.create(view).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders header with name and passing props title and remove goBack function', () => {
        const view = <Header hideMenu  small={false} title={'Teste'} />
        const tree = renderer.create(view).toJSON();
        expect(tree).toMatchSnapshot();
    });

});