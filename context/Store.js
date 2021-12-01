import {createContext, useContext, useReducer} from 'react'
import Cookies from "js-cookie";
import { types } from '../types/types';

export const Store = createContext(null)


const reducer = (state,action)=> {

  switch (action.type) {
    case types.addCart: {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.nombre === newItem.nombre
      );
      const precio = newItem.quantiti * newItem.price
      
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.nombre === existItem.nombre ? {...newItem,quantiti: item.quantiti + 1} : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      Cookies.set("total", JSON.stringify(state.cart.total + precio));
      return {
        ...state,
        cart: { ...state.cart , total : state.cart.total + precio , cartItems },
      };
    }
    case types.removeCart: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      const item =  state.cart.cartItems.find( (item) => item.id === action.payload.id)
      const precio = item.quantiti * item.price
      Cookies.set("cartItems", JSON.stringify(cartItems));
      Cookies.set("total",JSON.stringify(state.cart.total - precio))
      return { ...state, cart: { ...state.cart,total: state.cart.total - precio, cartItems } };
    }
    case types.incrementProduct: {
      const product = state.cart.cartItems.find( item => item.id == action.payload)
      const precio =  Number(product.price)
      const cartItems = state.cart.cartItems.map((item) => 
         item.id == action.payload ? {...product,quantiti: product.quantiti +1 } : item
        )
         Cookies.set("cartItems", JSON.stringify(cartItems));
         Cookies.set("total", JSON.stringify(state.cart.total + precio));
      return {
        ...state,
        cart: { ...state.cart, total: state.cart.total + precio, cartItems},
      };
    }
    case types.decrementProduct :{
      const product = state.cart.cartItems.find(
        (item) => item.id == action.payload
      );
      const precio = Number(product.price);
      const cartItems = state.cart.cartItems.map((item) =>
        item.id == action.payload
          ? { ...product, quantiti: product.quantiti - 1 }
          : item
      );
        Cookies.set("cartItems", JSON.stringify(cartItems));
        Cookies.set("total", JSON.stringify(state.cart.total - precio));
      return {
        ...state,
        cart: { ...state.cart, total: state.cart.total - precio, cartItems },
      };
    }
    case types.login: {
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    }
    case types.loggout: {
      return {
        ...state,
        logged: false,
        user: {
        },
      };
    }
    default:
      return state;
  }
}

const initialState = {
  cart: {
    total : Cookies.get("total")
       ? JSON.parse(Cookies.get("total"))
       : 0,
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
  },
  logged: false,
  user:{
   
  }
};

export const StoreProvider= ({children})=> {
  
  
  const [state, dispatch] = useReducer(reducer, initialState)
  const value= {state,dispatch}
  return <Store.Provider value={{value}}>{children}</Store.Provider>
}


export function useAppContext() {
  const context = useContext(Store);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useAppContext;