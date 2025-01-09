/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { ShopContext } from '../context/ShopContext';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    console.log(products);
    

  return (
    <div>
        
    </div>
  )
}

export default LatestCollection