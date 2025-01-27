import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData,setProductData] = useState(null);
  const [image,setImage] = useState('');

  const fetchProduct = async () => {
    // Check if product exists in context
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]); // Set first image as the default
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>;  // Show loading message while fetching product data
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img 
                  src={item} 
                  key={index} 
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                  alt={`Product image ${index + 1}`}
                  onClick={() => setImage(item)}  // Allows clicking on images to change the main image
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img 
              src={image} 
              className='w-full h-auto' 
              alt="Main product image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
