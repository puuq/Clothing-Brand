/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const {latestProducts,setLatestProducts} = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    }, [])
    
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
        </div>
    </div>
  )
}

export default LatestCollection