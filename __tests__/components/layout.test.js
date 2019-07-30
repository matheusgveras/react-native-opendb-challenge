import 'react-native';
import React from 'react';
import Layout  from '../../src/components/layout';
import {Text} from 'react-native'
import renderer from 'react-test-renderer';
describe('testing layout', () => {
    
    it('renders layout loading: false', () => {
        const view = <Layout loading={false}><Text>teste</Text></Layout>
        const tree = renderer.create(view).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders layout loading: true', () => {
        const view = <Layout loading={true} />
        const tree = renderer.create(view).toJSON();
        expect(tree).toMatchSnapshot();
    });
});