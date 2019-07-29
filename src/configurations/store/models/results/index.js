const Reducer = {
    state: {
        init: 'eu sou um result'
    },
    reducers: {
        setInitValue(state, payload) {
            return state.init = payload
        }
    },
    effects: {
        async asyncSetInitiState(payload) {
            dispatch.results.setInitValue(payload)
        }
    },
};

export default Reducer;
