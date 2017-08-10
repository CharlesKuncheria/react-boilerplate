var initialState = 0;

export function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}