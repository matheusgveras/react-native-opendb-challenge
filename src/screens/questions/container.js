// Import core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';

// Import components
import { Layout, Header, ButtonFooter, ButtonSelected} from '../../components/'
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modalbox';

// Import Styles
import styles from './styles';
import { throwStatement } from '@babel/types';

class Questions extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            initialDifficulty: 'medium',
            sliderValue: 0.3,
            userAnswerForCurrentQuestion: 0,
            optionsAnwsers:[]
        }
    }

    async setAnswer(userAnswer) {
        this.setState({ userAnswerForCurrentQuestion: userAnswer });
    }

    async confirmAnswer() {
        //save this progress
        this.props.saveProgressGame(this.props.currentQuestion);
        //verify answer to show message
        if (this.props.currentQuestion.correct_answer === this.state.userAnswerForCurrentQuestion) {
            this.refs.successModal.open();
        }
        else {
            this.refs.errorModal.open()
        }
        //reset last response 
        this.setState({userAnswerForCurrentQuestion: 0});
        //get next question
        await this.props.nextQuestion(this.props.currentQuestion);
        //update list of answsers
        this.setState({optionsAnwsers: this.props.currentQuestion.all_answers})
    }
    async defineCurrentQuestion(data) {
        // get default question for category
        await this.props.defineCurrentQuestion(data);
        this.setState({loading:false});
    }
    
    async componentDidMount() {
        this.setState({loading:true});
        const configuratonForGetQuestions = {
            category: this.props.navigation.state.params.categoryId,
            difficulty: this.state.initialDifficulty
        }
        await this.props.getQuestionsForCategory(configuratonForGetQuestions);
        await this.defineCurrentQuestion(this.props.allQuestionsForDifficulty);
        this.setState({optionsAnwsers: this.props.currentQuestion.all_answers})
    }

    render() {
        const { goBack } = this.props.navigation;
        const { currentQuestion } = this.props;
        if (this.state.loading === false) {
            return (
                <Layout loading={false}>
                    <Header small hideMenu title={'Questions'} goBack={() => goBack()} />
                    <View style={{ width: Dimensions.get('window').width, marginBottom: 10, height: 80, backgroundColor: '#fff', flexDirection: 'row' }}>
                        <View style={{ flex: 5, padding: 10 }}>
                            <Text style={{ fontSize: 10, color: '#333' }}>{currentQuestion.category}</Text>
                            <Text style={{ fontWeight: 'bold' }}>{currentQuestion.question}</Text>
                        </View>
                        <View style={{ flex: 1, padding: 15, alignItems: 'center', alignContent: 'center', backgroundColor: '#EABB32' }}>
                            <Icon name='ios-speedometer' color={'#000'} style={{ fontSize: 26 }} />
                            <Text>{currentQuestion.difficulty}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        {
                            this.state.optionsAnwsers.map(item => (
                                <ButtonSelected item={item} onPress={() => this.setAnswer(item)}/>
                            ))
                        }
                    </View>
                    <Modal swipeToClose={false} coverScreen={true} style={[styles.modal, styles.successModal]} backdrop={false} position={"top"} ref={"successModal"}>
                        <Icon name='ios-checkmark' color={'#fff'} style={{ fontSize: 46 }} />
                        <Text style={[styles.text, { color: "white", fontSize: 22 }]}>You're right</Text>
                        <Text style={[styles.text, { color: "white", fontSize: 12 }]}>Tap this message to close</Text>
                    </Modal>
                    <Modal swipeToClose={false} coverScreen={true} style={[styles.modal, styles.errorModal]} backdrop={false} position={"top"} ref={"errorModal"}>
                        <Icon name='ios-close' color={'#fff'} style={{ fontSize: 46 }} />
                        <Text style={[styles.text, { color: "white", fontSize: 22 }]}>You missed</Text>
                        <Text style={[styles.text, { color: "white", fontSize: 12 }]}>Tap this message to close</Text>
                    </Modal>
                    <View>
                        <ButtonFooter onPress={() => this.confirmAnswer()} label={'Confirm your anwser'} />
                    </View>
                </Layout>
            );
        } else {
            return (
                <Layout loading={false}>
                    <Header small hideMenu title={'Questions'} goBack={() => goBack()} />
                        <Text style={{margin:20}}>Loading question...</Text>
                </Layout>
            );
        }

    }
}

const mapState = state => ({
    currentQuestion: state.questions.currentQuestion,
    currentDifficulty: state.questions.currentDifficulty,
    currentCategory: state.questions.currentCategory,
    allQuestionsForDifficulty: state.questions.allQuestionsForDifficulty,
    currentProgressGame: state.questions.currentProgressGame
});

const mapDispatch = ({ questions }) => ({
    saveProgressGame: (payload) => questions.saveProgressGame(payload),
    nextQuestion: (payload) => questions.nextQuestion(payload),
    defineCurrentQuestion: (payload) => questions.defineCurrentQuestion(payload),
    getQuestionsForCategory: (payload) => questions.getQuestionsForCategory(payload),
});

export default connect(mapState, mapDispatch)(Questions);