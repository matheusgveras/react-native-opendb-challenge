import api from '../../../api';

const Reducer = {
    state: {
        init: true
    },
    reducers: {
        setInit (state, init) { return {...state, init }}
    }
};

export default Reducer;
