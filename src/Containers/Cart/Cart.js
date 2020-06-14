import React, { useState } from 'react';
import img from '../../assets/foto_nao_disponivel.gif'
import './Cart.css'
import Button from '../../components/Button/Button'

const Cart = ({ items }) => {
  const groupRepeatedProducts = (cart, product) => {
    const repeated = cart.find(cartItem => {
      return cartItem.selectSized === product.selectSized
    });
    if (!repeated) {
      cart.push({ ...product, quantity: 1 });
      return cart;
    }
  
    repeated.quantity += 1;
    return cart;
  };
  const groupedItems= items ? items.cart.reduce(groupRepeatedProducts,[]) : null 
 
  const totalPrice = groupedItems ? groupedItems.reduce((acc, curr) => {
    const price = parseFloat(curr.actual_price.replace(/\D\$\D/, '').replace(',', '.'))
    return acc += price* curr.quantity
  }, 0) : null
  return (
    <div>
      <div className='cart'>
        {groupedItems ? (
          <>          
           {groupedItems.map((item, index) => (
            <div className="item"  key={index}>
              <div className="item__flex">
                <img className="item__photo" src={item.image ? item.image : img} alt="" />
                <section className="item__section">
                  <span className="item__name">{item.name}</span>
                  <div className="group__price">
                    <span className="item__price">{item.actual_price}</span>
                    <span className="item__price"> em até {item.installments}</span>
                  </div>
                  <div className="item__quantity">
                    <span>Tam: {item.selectSized.match(/(P{1,2}|M{1}|G{1,2}|U{1})$/)[0]}</span>
                    <div className="item__btn-group">
                        <Button className='btn'>
                          -
                        </Button>
                        <input type="text" value={item.quantity} disabled/>
                        <Button className='btn'>
                          +
                        </Button>
                    </div>
                  </div>
                </section>
              </div>
              
              <span className="remove__item">Remover Item</span>

            </div>
           ))}
             

          </>
        ) : (
          <div className="cart__empty">
              <p>Seu carrinho está vazio</p>
              <div>:(</div>
          </div>
        )} 
      </div>
      {groupedItems ? (
      <div className="cart__footer">
        <p>Total: R$ {totalPrice.toFixed(2)}
        </p>
      </div>
      ) : ''}
    </div>
  )
}

export default Cart