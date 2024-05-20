import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducers/CartReducer"

const CartContext = createContext()

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("pummyCart");
    if (!localCartData || localCartData === "[]") {
        // if (localCartData === []){
      return [];
    } else {
      return JSON.parse(localCartData);
    }
}

const initialState = {
    // cart:[],
    cart: getLocalCartData,
    total_item: "",
    total_amount: "",
    shipping_fee: 50000
}


const CartProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART" , payload:{id, color, amount, product}})
    }

    const removeItem = (id)=>{
        dispatch({type: "REMOVE_ITEM", payload:id})
    }

    const clearCart = ()=>{
        dispatch({type: "CLEAR_CART"})
    }


    useEffect(()=>{
        localStorage.setItem("pummyCart", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value={{...state, addToCart, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
} 

const useCartContext = () =>{
    return useContext(CartContext)
}

export {CartProvider, useCartContext}