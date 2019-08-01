const Reducer = {
    state: {
        init: ''
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
