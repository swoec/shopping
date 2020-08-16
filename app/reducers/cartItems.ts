const cartItems = (state: any = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return converter(state, action);

    case "REMOVE_FROM_CART":
      return state.filter((cartItem) => cartItem.id !== action.payload.id);
  }

  return state;
};

function converter(state, action) {
  const productExists = state.find((item) => item.id === action.payload.id);
  if (productExists) {
    state.map((item) => {
      item.id === action.payload.id ? (item.quantity += 1) : item;
    });
  } else {
    action.payload.quantity = 1;
    state = [...state, action.payload];
  }

  return state;
}

export default cartItems;
