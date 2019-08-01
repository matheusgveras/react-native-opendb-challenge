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
                    const categories = res.data.trivia_categories;
                    this.fillCategories(categories)
                });
            } catch (error) {
                this.fillCategories('Erro ao carregar essa lista.')
            }
            
        }
    },
};

export default Reducer;
