import { init } from '@rematch/core'
import categories from './models/categories';
import results from './models/results'

const store = init({
    models: { 
        categories,
        results 
    }
});

export default store;
