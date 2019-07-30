import api from '../../../api';

const Reducer = {
    state: {
        currentQuestion: undefined,
        currentCategory: 0,
        currentDifficulty: 'medium',
    },
    reducers: {
        fillCurrentQuestion(state, payload) {
            return { ...state, currentQuestion: { ...state.currentQuestion, payload } };
        },
        //changecategory: (currentCategory, payload) => state.currentCategory + payload,
        fillCurrentCategory(state, payload) {
            set: (state, filter) => filte
            return { ...state, payload };
        },
        fillCurrentDifficulty(state, payload) {
            return { ...state, currentDifficulty: { ...state.currentDifficulty, payload } };
        }
    },
    effects: {
        async setCurrentCategory(playload) {
            console.log('setCurrentCategory');
            this.fillCurrentCategory(playload);
        },
        async nextQuestion() {
            try {
                api.get(`api.php?amount=8&category=` + state.currentCategory + `&difficulty=` + state.currentDifficulty)
                .then(res => {
                    console.log('API RESPONDE:', res);
                    const questions = res.data.results;
                    console.log('questions: ', questions);
                    this.fillCurrentQuestion(categories);
                });
            } catch (error) {
                console.log('ERROR: ', error);

                // Comentário:
                // Aqui poderia ser melhorado.
                this.fillCurrentQuestion(undefined)
            }
            
        }
    },
};

export default Reducer;
