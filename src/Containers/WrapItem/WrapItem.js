import React, {useEffect, useState} from 'react';
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import './WrapItem.css'
import axios from 'axios'
export default function WrapItem(props) {
  const [product, setProduct] = useState({});
  const id = props.match.params.id
  useEffect(() => {
    async function fetchApi(){
      const response = await axios.get('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog');
      const filterItem = response.data.filter((item, index) => index === Number(id))
      setProduct(filterItem[0])
    }
    fetchApi()
  }, [id])
  return (
    <div className='wrapItem' >
      <div className="container">
        <SingleProduct singleItem={product} />
        
      </div>
    </div>
  )
}