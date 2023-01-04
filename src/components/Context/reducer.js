export const initialState = {
  basket: [
    {
      id: '12321341',
      title:
        'The Lord of the Rings: The Fellowship of the Ring (The Lord of the Rings 1)',
      price: 15.99,
      rating: 5,
      image: 'https://m.media-amazon.com/images/I/41gHG-a2OEL._AC_SY780_.jpg',
    },
  ],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0); //* Add the price of each item in the basket


const reducer = (state, action) => {
  //   console.log(state);
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      // // Logic for removing item from basket

      // // Copy the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // // Item exists in basket, remove it
      if (index >= 0) {
        newBasket.splice(index, 1); //* Remove the item from the basket
      } else {
        console.warn(
          'Cant remove product (id: ${action.id}) as its not in the basket'
        );
      }
      return { //* Return the new state
        ...state,
        basket: newBasket, 
      };
    default:
      //* If no action is taken, return the state
      return state;
  }
};

export default reducer;
