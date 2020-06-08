import React, { useState } from 'react';
import Target from '../Target/Target'
import img from '../../assets/foto_nao_disponivel.gif'
import './SingleProduct.css'
import Button from '../Button/Button'
export default function SingleProduct({ singleItem } ) {
  const [size, setSize] = useState('')
  console.log(singleItem.sizes)
  if(!singleItem.sizes)
    return null
    
  function selectSize(itemSize){
    console.log(itemSize)
    setSize(itemSize)
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
            <span>escolha um tamanho</span>
            <div className="singleItem__btn-group">
                {singleItem.sizes.map(item => (
                  item.available && <Button onClick={() => selectSize(item.size)} key={item.sku} className={size === item.size ? 'singleItem__btn singleItem__btn--selected' : 'singleItem__btn'}>{item.size}</Button>
                ))}
            </div>
          </div>
          <Button className="add__button">Adicionar à sacola</Button>


        </section>
    </div>
 
    </>
  )
}