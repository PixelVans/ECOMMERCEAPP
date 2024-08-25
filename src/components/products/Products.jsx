import React from 'react'
import Img1 from '../../assets/clothes/dress.png'
import Img2 from '../../assets/clothes/shirt.png'
import Img3 from '../../assets/clothes/kidress.png'
import Img4 from '../../assets/clothes/shirt2.png'
import Img5 from '../../assets/clothes/hijab.png'

import { FaStar } from 'react-icons/fa6'

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: 'red',
    aosDelay: '0',
  },
  {
    id: 2,
    img: Img2,
    title: "Men Casual Wear",
    rating: 4.5,
    color: 'black',
    aosDelay: '100',
  },
  {
    id: 3,
    img: Img3,
    title: "Kids Playwear",
    rating: 4.8,
    color: 'yellow',
    aosDelay: '400',
  },
  {
    id: 4,
    img: Img4,
    title: "designer T-shirt",
    rating: 4.7,
    color: 'black',
    aosDelay: '600',
  },
  {
    id: 5,
    img: Img5,
    title: "Muslim hijab",
    rating: 4.9,
    color: 'black',
    aosDelay: '800',
  },
];







const Products = () => {



  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p
             data-aos='fade-up'
            className='text-sm text-primary'>
            Top Selling products for you
          </p>
          <h1
             data-aos='fade-up'
            className='text-3xl font-bold'>Products</h1>
          <p
              data-aos='fade-up'
            className='text-xs text-gray-400'> 
            Our premium product combines cutting-edge technology with sleek design to deliver unmatched performance and reliability.
            Whether you're looking to enhance your daily routine or make a statement,
            this product is crafted to meet the highest standards of quality and functionality.
          </p>
        </div>
        {/* body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 
          lg:grid-cols-5 place-items-center gap-5'>
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos='fade-up'
                data-aos-delay={data.aosDelay}
                className='space-y-3'
                key={data.id}>
                <img src={data.img} alt=""
                  className='h-[220px] w-[150px] 
                object-cover rounded-md'/>

                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>
                    {data.color}
                  </p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{ data.rating}</span>
                  </div>
                </div>
              </div>
              
            ))}

          </div>
          {/* view all button */}
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-primary text-white 
    py-1 px-5 rounded-md'> View All</button>
          </div>
        </div>
       </div>
      </div>
  )
}

export default Products