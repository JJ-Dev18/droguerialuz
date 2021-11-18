import {createContext, useContext, useReducer} from 'react'
import Cookies from "js-cookie";

export const Store = createContext(null)


const reducer = (state,action)=> {

  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.name === newItem.name
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return {
        ...state,
        cart: { ...state.cart, cartItems },
      };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      // Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
};

export const StoreProvider= ({children})=> {
  
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const value= {state,dispatch}
  return <Store.Provider value={value}>{children}</Store.Provider>
}


export function useAppContext() {
  const context = useContext(Store);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useAppContext;