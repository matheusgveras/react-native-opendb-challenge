import { init } from '@rematch/core'; 
import categories from './models/categories'; 
import results from './models/results'; 
import questions from './models/questions';
import welcome from './models/welcome';

const store = init({
    models: { 
        categories,
        results,
        questions,
        welcome
    }
});

export default store;
