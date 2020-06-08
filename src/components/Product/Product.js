import React from 'react';
import { Link } from 'react-router-dom';
import Target from '../Target/Target'
import img from '../../assets/foto_nao_disponivel.gif'
import './Product.css'

export default function Product({ position, product } ) {
  return (
    <div className="product">
      <Link to={`/item/${position}`}>
        <div className="product__header">
          {!!product.discount_percentage && <Target discount={product.discount_percentage}/> }
          <img className="product__photo" src={product.image ? product.image : img} alt="" />
        </div>
        <div className="product__footer">
          <span className="product__name">{product.name}</span>
          <div className="product__price">
            <span className={`product__price ${!!product.discount_percentage ? 'product__price--discount' : '' }`}>
              {product.regular_price}
            </span>
            {!!product.discount_percentage && <span className="product__price">{product.actual_price}</span>}
          </div>
        </div>
      </Link>
    </div>
  )
}