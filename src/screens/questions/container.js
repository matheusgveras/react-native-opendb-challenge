// Import core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, AsyncStorage } from 'react-native';

// Import components
import { Layout, Header, ButtonFooter, ButtonSelected } from '../../components/'
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modalbox';

// Import Styles
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

class Questions extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            initialDifficulty: 'medium',
            sliderValue: 0.3,
            gameOverResults: [],
            userAnswerForCurrentQuestion: 0,
        }
    }

    async setAnswer(userAnswer) {
        this.setState({ userAnswerForCurrentQuestion: userAnswer });
    }

    async confirmAnswer() {
        //save this progress
        this.props.saveProgressGame(this.props.currentQuestion);

        if (this.props.isGameOver) {
            var resultOfGetItem = await AsyncStorage.getItem('saveProgressGame');
            var listOfsaveProgressGame = JSON.parse(resultOfGetItem);
            this.setState({ gameOverResults: listOfsaveProgressGame })
            this.refs.gameOrverModal.open();
        }
        else {

            //verify answer to show message
            var isCorrect = false;
            if (this.props.currentQuestion.correct_answer === this.state.userAnswerForCurrentQuestion) {
                isCorrect = true;
                this.refs.successModal.open();
            }
            else {
                this.refs.errorModal.open()
            }
            //reset last response 
            this.setState({ userAnswerForCurrentQuestion: 0 });

            //get next question
            var questionForSave = {
                data: this.props.currentQuestion,
                isCorrect: isCorrect,
                categoryId: this.props.navigation.state.params.categoryId,
            };
            await this.props.nextQuestion(questionForSave);
        }

    }
    async defineCurrentQuestion(data) {
        // get default question for category
        await this.props.defineCurrentQuestion(data);
        this.setState({ loading: false });
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const configuratonForGetQuestions = {
            category: this.props.navigation.state.params.categoryId,
            difficulty: this.state.initialDifficulty
        }
        await this.props.getQuestionsForCategory(configuratonForGetQuestions);
        await this.defineCurrentQuestion(this.props.allQuestionsForDifficulty);

    }

    render() {
        const { goBack } = this.props.navigation;
        const { currentQuestion } = this.props;
        if (this.state.loading === false) {
            return (
                <Layout loading={false}>
                    <Header small hideMenu title={'Questions'} goBack={() => goBack()} />
                    {/* SubHeader */}
                    <View style={styles.subheader}>
                        <View style={styles.title}>
                            <Text style={styles.titlecategory}>{currentQuestion.category}</Text>
                            <Text style={{ fontWeight: 'bold' }}>{currentQuestion.question}</Text>
                        </View>
                        <View style={styles.level}>
                            <Icon name='ios-speedometer' color={'#000'} style={{ fontSize: 26 }} />
                            <Text>{currentQuestion.difficulty}</Text>
                        </View>
                    </View>
                    {/* Answer */}
                    <View style={{ flex: 1 }}>
                        {
                            currentQuestion.all_answers.map(item => (
                                <ButtonSelected item={item} onPress={() => this.setAnswer(item)} />
                            ))
                        }
                    </View>
                    {/* Modais */}
                    
                    <Modal swipeToClose={false} coverScreen={true} style={[styles.modal, styles.successModal]} backdrop={false} position={"top"} ref={"successModal"}>
                        <Icon name='ios-checkmark' color={'#fff'} style={{ fontSize: 46 }} />
                        <Text style={[styles.text, styles.titlemodal]}>You're right</Text>
                        <Text style={[styles.text, { color: "white", fontSize: 12 }]}>Tap this message to close</Text>
                    </Modal>
                    <Modal swipeToClose={false} coverScreen={true} style={[styles.modal, styles.errorModal]} backdrop={false} position={"top"} ref={"errorModal"}>
                        <Icon name='ios-close' color={'#fff'} style={{ fontSize: 46 }} />
                        <Text style={[styles.text, , styles.titlemodal]}>You missed</Text>
                        <Text style={[styles.text, { color: "white", fontSize: 12 }]}>Tap this message to close</Text>
                    </Modal>
                    <Modal swipeToClose={false} coverScreen={true} style={[styles.modal, styles.gameOverModal]} backdrop={false} position={"center"} ref={"gameOrverModal"}>
                        <View stlyle={{ padding: 20, height: 200 }}>
                            <Text style={[styles.text, , styles.titlemodal]}>Game Over</Text>
                            <Text style={[styles.text, { color: "white", fontSize: 12 }]}>Your results:</Text>
                        </View>
                        <ScrollView stlyle={{ flex: 1 }}>
                            {
                                this.state.gameOverResults.map(item => (
                                    <View style={{ height: 100, flex: 1, maring: 10 }}>
                                        <Text style={{ color: "white", fontSize: 14 }}>{item.data.question}</Text>
                                        <Text style={{ color: "white", fontSize: 10 }}>{item.data.difficulty}</Text>
                                        <Text style={{ color: "white", fontSize: 12 }}>{item.isCorrect ? 'Correct answer' + item.data.correct_answer : 'Not correct answer'}</Text>
                                    </View>
                                ))
                            }
                        </ScrollView>
                        <View stlyle={{ padding: 20, height: 50, backgroundColor: '#000' }}>
                            <Text style={[styles.text, { color: "white", fontSize: 12 }]}>Tap this message to close</Text>
                        </View>
                    </Modal>
                    {/* Footer bottom */}
                    <View>
                        <ButtonFooter onPress={() => this.confirmAnswer()} label={'Confirm your anwser'} />
                    </View>
                </Layout>
            );
        } else {
            return (
                <Layout loading={false}>
                    <Header small hideMenu title={'Questions'} goBack={() => goBack()} />
                    <Text style={{ margin: 20 }}>Loading question...</Text>
                </Layout>
            );
        }

    }
}

const mapState = state => ({
    isGameOver: state.questions.isGameOver,
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