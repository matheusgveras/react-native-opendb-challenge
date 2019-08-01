import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from '../../screens/welcome';
import ApresentationScreen from '../../screens/apresentation';
import CategoriesView from '../../screens/categories';
import QuestionsView from '../../screens/questions'
import ResultsView from '../../screens/results';

const TabNavigator = createBottomTabNavigator({
    Categories: {
        screen: CategoriesView,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name={'ios-ribbon'} size={25} color={'#00306B'} />;
            },
        }},
        Results: {
            screen: ResultsView,
            navigationOptions: {
                tabBarIcon: ({ focused, tintColor }) => {
                    return <Icon name={'ios-stats'} size={25} color={'#00306B'} />;
                },
            }},
    }, {
        navigationOptions: {
            header: null,
        }
    });

const AppNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Apresentation: {
        screen: ApresentationScreen
    },
    Questions: {
        screen: QuestionsView
    },
    TabView: {
        screen: TabNavigator
    }},
    {
        initialRouteName: 'Welcome'
    });

export default createAppContainer(AppNavigator);