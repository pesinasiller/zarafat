"use client";
import { createStore } from "redux";

// Reducer
const initialState = {
  productsOnCart: [],
  count: 0,
};
/*
{
    product: product,
    quantity: 2,

},
{
    productId: 2,
    quantity: 1,

}
*/

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        productsOnCart: [...state.productsOnCart, action.payload],
      };
    }
    case "INC": {
      return { count: state.count + 1 };
    }
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

export { store };
