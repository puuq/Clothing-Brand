import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller); 
    setBestSeller(bestProduct.slice(0, 5)); 
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Fan Favorites: Our Most Loved Styles
        </p>
      </div>

        {/* Rendering Best Sellers */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
            {
                bestSeller.map((item, index) => (
                < ProductItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
                ))
            }
        </div>


    </div>
  );
};

export default BestSeller;
