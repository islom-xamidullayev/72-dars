const initialState = {
    cart: [],
  };
  
  // Reducer
  function cartReducer(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.productId
              ? {
                  ...item,
                  quantity:
                    action.payload.actionType === 'increase'
                      ? item.quantity + 1
                      : item.quantity > 1
                      ? item.quantity - 1
                      : 1,
                }
              : item
          ),
        };
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  }
  
  // Action creators
  export const updateQuantity = (payload) => ({
    type: 'UPDATE_QUANTITY',
    payload,
  });
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  