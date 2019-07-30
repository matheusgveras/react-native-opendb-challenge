import api from '../../../api';

const Reducer = {
    state: {
        listOfCategories: []
    },
    reducers: {
        fillCategories(state, payload) {
            return { ...state, listOfCategories: { ...state.listOfCategories, payload } };
        }
    },
    effects: {
        async asyncfillCategories(payload) {
            try {
                api.get(`api_category.php`)
                .then(res => {
                    console.log('API RESPONDE:', res);
                    const categories = res.data.trivia_categories;
                    console.log('CATEGORIES: ', categories);
                    this.fillCategories(categories)
                });
            } catch (error) {
                console.log('ERROR: ', error);
                this.fillCategories('Erro ao carregar essa lista.')
            }
            
        }
    },
};

export default Reducer;
