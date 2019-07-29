import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import WelcomeScreen from '../../screens/welcome';
import ApresentationScreen from '../../screens/apresentation';
import CategoriesView from '../../screens/categories';
import QuestionsView from '../../screens/questions'
import ResultsView from '../../screens/results';

const TabNavigator = createBottomTabNavigator({
    Categories: CategoriesView,
    Results: ResultsView,
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
    }
});

export default createAppContainer(AppNavigator);