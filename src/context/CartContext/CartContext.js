import React, {useState, createContext} from 'react';
import { createStore } from 'redux';
import Cart from '../../Containers/Cart/Cart';

export const CartContext = createContext();


const CartProvider = ({children}) => {
  const [msg, setMsg] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({
    cart: [],
  })
  console.log(selectedProduct)
  const addCart = (item, size) => {
    if(size === ''){
      setMsg(true)
    } else {
      console.log(item)
      const product = {...item, selectSized: size}
      setSelectedProduct({
        cart: [...selectedProduct.cart, product],
      })
    }
  }
  return (
    <CartContext.Provider value={{msg, setMsg, addCart, selectedProduct}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider