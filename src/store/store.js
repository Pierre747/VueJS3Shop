import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            count: 0
        };
    },
    mutations: {
        incrementCount(state) {
            state.count++;
        }
    }
});

export default store;