import React, { useState } from 'react';
import Target from '../Target/Target'
import img from '../../assets/foto_nao_disponivel.gif'
import './SingleProduct.css'
import Button from '../Button/Button'
export default function SingleProduct({ singleItem } ) {
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedProduct, setSelectedProduct] = useState({
    cart: [],
  })
  
  const [msg, setMsg] = useState(false)
  if(!singleItem.sizes)
    return null
    
  function handleSelectedSize(itemSize){
    setSelectedSize(itemSize)
  }
  function handleSelectProduct(item, size){
    if(size === ''){
      setMsg(true)
    } else {
      const product = {...item, selectSized: size}
      setSelectedProduct({
        cart: [...selectedProduct.cart, product],
      })
     const storageItem = JSON.parse(localStorage.getItem('cart'))
     if(storageItem){
        localStorage.setItem('cart',JSON.stringify({
          cart: [...storageItem.cart, product]
        }) )
     }else{
      localStorage.setItem('cart', JSON.stringify({
        cart: [...selectedProduct.cart, product],
      }))
    }
      //localStorage.clear()
    }
  }
  return (
    <>
      <div className="singleItem">
        <div className="singleItem__header">
          {!!singleItem.discount_percentage && <Target discount={singleItem.discount_percentage}/> } 
          <img className="singleItem__photo" src={singleItem.image ? singleItem.image : img} alt="" />
        </div>
        <section className="singleItem__section">
          <span className="singleItem__name">{singleItem.name}</span>
          <div className="singleItem__price">
            <span className={`singleItem__price ${!!singleItem.discount_percentage ? 'singleItem__price--discount' : '' }`}>
              {singleItem.regular_price}
            </span>
            {!!singleItem.discount_percentage && <span className="singleItem__price">{singleItem.actual_price}</span>}
            <span className='singleItem__price singleItem__price--color'>em até {singleItem.installments}</span>
          </div>
          <div className="singleItem__size">
            <p>escolha um tamanho</p>
            {msg && <span className="msg">Obrigatório escolher um tamanho</span>}
            <div className="singleItem__btn-group">
                {singleItem.sizes.map(item => (
                  item.available && <Button onClick={() => handleSelectedSize(item.sku)} key={item.sku} className={selectedSize === item.sku ? 'singleItem__btn singleItem__btn--selected' : 'singleItem__btn'}>{item.size}</Button>
                ))}
            </div>
          </div>
          <Button className="add__button" onClick={() => handleSelectProduct(singleItem, selectedSize)}>Adicionar à sacola</Button>


        </section>
    </div>
 
    </>
  )
}