import api from '../../../api';

const Reducer = {
    state: {
        init: false
    },
    reducers: {
        update(prev, init) {
            return {...prev, ...init}
          }
    }
};

export default Reducer;
