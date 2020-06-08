import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Product from '../../components/Product/Product';

import './ProductList.css'
export default function ProductList(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchApi(){
      const response = await axios.get('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog');
      setProducts(response.data)
      
    }
    fetchApi()
  }, [])
  
  return (
    <section className="productsList">
      <div className="container">
        <span className="productList__qty"> {products.length} items</span>
        <div className="productsList__grid">
          {products.map( (product, index) => (
            <Product key={index} position={index} product={product} />
          ))}
        </div>
        
      </div>
      
    </section>
  )
}