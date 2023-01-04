export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
//   console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      //* Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      //* Logic for removing item from basket
      return { state };
    default:
      //* If no action is taken, return the state
      return state;
  }
};

export default reducer;
