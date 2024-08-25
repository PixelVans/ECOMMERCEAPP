import React from 'react'
import Img1 from '../../assets/topwear/blouse.png'
import Img2 from '../../assets/topwear/hood.png'
import Img3 from '../../assets/topwear/jacket.png'
import Img4 from '../../assets/topwear/skirt.png'
import Img5 from '../../assets/topwear/sweater1.png'
import Img6 from '../../assets/topwear/sweater2.png'


import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: 'Casual Blouse',
        description: `Explore stylish and comfortable 
        clothing designed
       to fit any occasion. Discover versatile pieces
       that blend quality with fashion. Shop now and find your
        perfect outfit!`,
    },
    {
      id: 2,
      img: Img2,
      title: 'top hood',
        description: `Elevate your look with our elegant 
        dress collection.
       Perfect for special occasions or a night out,
       these dresses combine sophistication with comfort.
        Find your new favorite today!`,
    },
    {
      id: 3,
      img: Img3,
      title: 'Trendy Jacket',
        description: `Stay warm and stylish with our trendy jackets.
       Designed to complement any outfit, they offer both fashion and functionality. Discover the perfect jacket for your wardrobe now!`,
    },
    {
      id: 4,
      img: Img4,
      title: 'Chic Skirt',
        description: `Add a touch of elegance to your wardrobe with our 
      chic skirts. Ideal for both casual and formal settings,
       these skirts are crafted for style and comfort. Shop the latest trends today!`,
    },
    {
      id: 5,
      img: Img5,
      title: 'Comfortable sweater',
        description: `Find the perfect fit with our comfortable jeans. 
      Designed for everyday wear, these jeans offer durability
       and style. Upgrade your casual look with our top-quality jeans!`,
    },
    {
      id: 6,
      img: Img6,
      title: 'Stylish Sweater',
        description: `Keep cozy and fashionable with our
         stylish sweaters.
       Perfect for layering and staying warm, these sweaters
       combine comfort with modern design. Explore our collection now!`,
    },
  ];
  



const TopProducts = ({handleOrderPopup } ) => {
  return (
      <div>
          <div className='container'>
          {/* header section */}
          <div className='text-left mb-24'>
              <p data-aos='fade-up'
                  className='text-sm text-primary'>
                  Top rated Products for you
              </p>
              <h1
                  data-aos='fade-up' className='text-3xl font-bold'>
                  Best Products
              </h1>
              <p data-ios='fade-up' className='text-x5 text-gray-400'>
            Discover our curated selection of top-quality products, each designed to elevate your experience.
          
            Explore now and enjoy the ultimate blend of quality, style, and functionality.
              </p>
              </div>
              {/* body section */}
              <div className='grid grid-cols-1 sm:grid-cols-2 
                 md:grid-cols-3 gap-20 md:gap-5 place-items-center '>
                  {ProductsData.map((data) => (
                      <div
                          data-aos='zoom-in'
                          className='
                      rounded-2xl bg-white dark:bg-gray-800
                      hover:bg-black/80 dark:hover:bg-primary hover:text-white
                      relative shadow-xl duration-300 group max-w-[300px] sm:mt-7'>
                          {/* image section */}
                          <div className='h-[85px]'>
                              <img src={data.img} alt=""
                               className='max-w-[140px] block mx-auto 
                              transform -translate-y-20 group-hover:scale-105 duration-300
                              drop-shadow-md sm:mt-14 '/>
                          </div>
                          {/* details section */} 
                          <div className='p-4 text-center'>
                              {/*  star rating */}
                              <div className='w-full flex items-center 
                              justify-center gap-1'>
                              <FaStar className='text-yellow-500'/>
                              <FaStar className='text-yellow-500'/>
                              <FaStar className='text-yellow-500'/>
                              <FaStar className='text-yellow-500' />
                              </div>
                          
                          <h1 className='text-xl font-bold'>{data.title}</h1>
                          <p
                              className='text-gray-500 group-hover:text-white duration-300 
                          text-sm line-clamp-2'
                          >{data.description}</p>
                          <button
                              onClick={handleOrderPopup}
                              className='bg-primary hover:scale-105 duration-300
                           text-white 
                          py-1 px-4 rounded-full mt-4 group-hover:bg-white
                           group-hover:text-primary'>
                              Order Now
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default TopProducts