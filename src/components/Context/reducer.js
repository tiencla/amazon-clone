export const initialState = { 
    basket: [],
}

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //* Logic for adding item to basket
            break;
        case 'REMOVE_FROM_BASKET':
            //* Logic for removing item from basket
            break;
        default:
            //* If no action is taken, return the state
            return state; 
    }
}

export default reducer