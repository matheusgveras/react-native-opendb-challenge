import api from '../../../api';
import {AsyncStorage} from 'react-native';

const Reducer = {
    state: {
        allQuestionsForDifficulty: [],
        currentProgressGame:[],
        currentQuestion: {
            category: "Default",
            correct_answer: "Default",
            difficulty: "medium",
            incorrect_answers:[],
            question: "...?",
            type: "multiple",
            all_answers:[]
        },
        currentCategory: 0,
        currentDifficulty: 'medium',
    },
    reducers: {
        setAllQuestions(state, payload) {
            return { ...state, allQuestionsForDifficulty: payload };
        },
        setCurrentQuestion(state, payload) {
            return { ...state, currentQuestion: payload };
        },
        setCurrentProgressGameAdd(state, payload) {
            return [...state, {payload}];
        }
    },
    effects:  (dispatch) => ({
        async getQuestionsForCategory(payload) {
            try {
                await api.get(`api.php?amount=10&category=` + payload.category + `&difficulty=` + payload.difficulty +`&type=multiple`)
                .then(res => {
                    AsyncStorage.setItem('currentGameQuestions', JSON.stringify(res.data.results));
                    dispatch.questions.setAllQuestions(res.data.results);
                });
            } catch (error) {
                console.log('ERROR: ', error);
                // Comentário:
                // Aqui precisa ser implementado.
            }
        },
        async defineCurrentQuestion(payload) {
            try {
                
                // get random question 
                var newQuestion = payload[Math.floor(Math.random() * payload.length)]
                // create new random list of answer whith correct answer
                var newListOfQuestion = newQuestion.incorrect_answers;
                newListOfQuestion.push(newQuestion.correct_answer);

                // create new object question to state 
                var question = {
                    category: newQuestion.category,
                    correct_answer: newQuestion.correct_answer,
                    difficulty: newQuestion.difficulty,
                    incorrect_answers:newQuestion.incorrect_answers,
                    question: newQuestion.question,
                    type: newQuestion.type,
                    all_answers:newListOfQuestion
                }

                dispatch.questions.setCurrentQuestion(question);
            } catch (error) {
                console.log('ERROR: ', error);
                // Comentário:
                // Aqui precisa ser implementado.
            }
        },
        async nextQuestion(payload) {
            try {
                // received actual list questions of currently level
                var resultOfGetItem =  await AsyncStorage.getItem('currentGameQuestions');
                var listOfCurrentQuestions = JSON.parse(resultOfGetItem);

                var oldQuestions = listOfCurrentQuestions.filter(function( obj ) {
                    return obj.question !== payload.question;
                });

                // save actual list in storage
                AsyncStorage.setItem('currentGameQuestions', JSON.stringify(oldQuestions));

                // get random question of the list
                var newQuestion = oldQuestions[Math.floor(Math.random() * oldQuestions.length)]

                // create new random list of answer whith correct answer
                var newListOfQuestion = newQuestion.incorrect_answers;
                newListOfQuestion.push(newQuestion.correct_answer);

                // create new object question to state 
                var question = {
                    category: newQuestion.category,
                    correct_answer: newQuestion.correct_answer,
                    difficulty: newQuestion.difficulty,
                    incorrect_answers:newQuestion.incorrect_answers,
                    question: newQuestion.question,
                    type: newQuestion.type,
                    all_answers:newListOfQuestion
                }
                 dispatch.questions.setAllQuestions(oldQuestions);
                 dispatch.questions.setCurrentQuestion(question);

            } catch (error) {
                console.log('ERROR: ', error);
                // Comentário:
                // Aqui precisa ser implementado.
            }
        },
        async saveProgressGame(payload) {
            try {
                dispatch.questions.setCurrentProgressGameAdd(payload);
                
            } catch (error) {
                console.log('ERROR: ', error);
                // Comentário:
                // Aqui precisa ser implementado.
            }
        }
    }),
};

export default Reducer;
