import api from '../../../api';
import { AsyncStorage } from 'react-native';

// Comentario:
// Padrão 
const Reducer = {
    state: {
        allQuestionsForDifficulty: [],
        isGameOver: false,
        currentQuestion: {
            category: "Default",
            correct_answer: "Default",
            difficulty: "medium",
            incorrect_answers: [],
            question: "...?",
            type: "multiple",
            all_answers: []
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
        setIsGameOver(state, payload) {
            return { ...state, isGameOver: payload };
        },
        setCurrentProgressGameAdd(state, payload) {
            return [...state, { payload }];
        }
    },
    effects: (dispatch) => ({
        async getQuestionsForCategory(payload) {
            try {
                await api.get(`api.php?amount=10&category=` + payload.category + `&difficulty=` + payload.difficulty + `&type=multiple`)
                    .then(res => {
                        AsyncStorage.setItem('currentGameQuestions', JSON.stringify(res.data.results));
                        var newClearListAnswer = [];
                        AsyncStorage.setItem('Answers', JSON.stringify(newClearListAnswer));

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
                    incorrect_answers: newQuestion.incorrect_answers,
                    question: newQuestion.question,
                    type: newQuestion.type,
                    all_answers: newListOfQuestion
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

                this.saveProgressGame(payload);

                // received actual list questions and remove question received of currently level
                var resultOfGetItem = await AsyncStorage.getItem('currentGameQuestions');
                var listOfCurrentQuestions = JSON.parse(resultOfGetItem);
                var oldQuestions = listOfCurrentQuestions.filter(function (obj) {
                    return obj.question !== payload.data.question;
                });

                AsyncStorage.setItem('currentGameQuestions', JSON.stringify(oldQuestions));

                // received actual list anwsers and save new of currently level
                var resultOfQuestionsSaved = await AsyncStorage.getItem('Answers');
                var listOfQuestionSaved = JSON.parse(resultOfQuestionsSaved);
                var questionForSave = {
                    data: payload.data,
                    isCorrect: payload.isCorrect,
                    categoryId: payload.categoryId,
                    dateCreated: Date.now()
                };
                listOfQuestionSaved.push(questionForSave);
                AsyncStorage.setItem('Answers', JSON.stringify(listOfQuestionSaved));

                // if the list has more than one answer, verify need to change categories.
                if (listOfQuestionSaved.length > 1) {
                    var lastObjectQuestionResponse = listOfQuestionSaved[0];
                    console.log('lastObjectQuestionResponse: ', lastObjectQuestionResponse);

                    var matchSameResults = false;
                    for (let index = 1; index < listOfQuestionSaved.length; index++) {
                        const element = listOfQuestionSaved[index];
                        if (element.isCorrect === lastObjectQuestionResponse.isCorrect) {
                            matchSameResults = true;
                            break;
                        } else {
                            lastObjectQuestionResponse = element;
                        }
                    }

                    var setNewDifficulty = lastObjectQuestionResponse.data.difficulty;
                    if (matchSameResults) {
                        switch (lastObjectQuestionResponse.data.difficulty) {
                            case 'easy':
                                if (lastObjectQuestionResponse.isCorrect) {
                                    setNewDifficulty = 'medium'
                                }
                                break;
                            case 'medium':
                                if (lastObjectQuestionResponse.isCorrect) {
                                    setNewDifficulty = 'hard'
                                } else {
                                    setNewDifficulty = 'easy'
                                }
                                break;
                            case 'hard':
                                if (!lastObjectQuestionResponse.isCorrect) {
                                    setNewDifficulty = 'medium'
                                }
                                break;
                            default:
                                break;
                        }

                        const configuratonForGetQuestions = {
                            category: payload.categoryId,
                            difficulty: setNewDifficulty
                        }
                        await this.getQuestionsForCategory(configuratonForGetQuestions);
                        var resultOfGetItem = await AsyncStorage.getItem('currentGameQuestions');
                        var listOfCurrentQuestions = JSON.parse(resultOfGetItem);
                        await this.defineCurrentQuestion(listOfCurrentQuestions);
                        return;
                    }
                }

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
                    incorrect_answers: newQuestion.incorrect_answers,
                    question: newQuestion.question,
                    type: newQuestion.type,
                    all_answers: newListOfQuestion
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
                
                console.log('saveProgressGame', payload);
                var resultOfGetItem = await AsyncStorage.getItem('saveProgressGame');
                
                var listOfsaveProgressGame = JSON.parse(resultOfGetItem);
                listOfsaveProgressGame.push(payload);

                AsyncStorage.setItem('saveProgressGame', JSON.stringify(listOfsaveProgressGame));
                
                if(listOfsaveProgressGame.length > 8){
                    dispatch.questions.setIsGameOver(true);
                }

            } catch (error) {                
                var newListOfAnswers = [];
                newListOfAnswers.push(payload);
                AsyncStorage.setItem('saveProgressGame', JSON.stringify(newListOfAnswers));
            }
            
        }
    }),
};

export default Reducer;
