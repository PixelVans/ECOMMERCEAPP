import React from 'react'
import Slider from 'react-slick'
import { Autoplay } from 'swiper/modules';




const TestimonialData = [
    {
        id: 1,
        name: 'Vans',
        text: "This service is top-notch! The team went above and beyond to ensure everything was perfect. Highly recommend!",
        img: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: 2,
        name: 'Lara',
        text: "A wonderful experience from start to finish. The attention to detail and customer care were outstanding.",
        img: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: 3,
        name: 'Carlos',
        text: "I was impressed by the professionalism and the quality of work. They delivered exactly what they promised.",
        img: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        id: 4,
        name: 'Emily',
        text: "Fantastic service! The team was responsive and attentive to all our needs. We are thrilled with the results.",
        img: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        id: 5,
        name: 'Tom',
        text: "Exceptional quality and service. They truly care about their customers and it shows in their work.",
        img: 'https://randomuser.me/api/portraits/men/5.jpg'
    }
];





const Testimonials = () => {
    var settings = {

        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
       
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }
            }
        ]
    }
        
 


  return (
      <div className='py-10 mb-10'>
          <div className='container'>
              {/* header section */}
              <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p
             data-aos='fade-up'
            className='text-sm text-primary'>
            What our customers are saying
          </p>
          <h1
             data-aos='fade-up'
            className='text-3xl font-bold'>Testimonials</h1>
          <p
              data-aos='fade-up'
            className='text-xs text-gray-400'> 
                      "Our testimonials are 100% real, shared by satisfied customers who have experienced our exceptional service firsthand. We take pride
                      in the genuine feedback that reflects the quality of our work."
          </p>
              </div>
              
              {/* testimonial cards */}
              <div data-aos='zoom-in'>
                  <Slider {...settings}>
                      {TestimonialData.map((data) => (
                          <div className='my-6'>
                          <div
                              key={data.id}
                              className='flex flex-col gap-4 shadow-lg 
                          py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                              
                              <div className='mb-4'>
                                  <img src={data.img}
                                  alt=""
                                  className='rounded-full w-20 h-20'/>
                              </div>
                              <div className='flex flex-col items-center gap-4'>
                                  <div className='space-y-3'>
                                      <p className='text-xs text-gray-500'>
                                          {data.text}
                                      </p>
                                      <h1 className='text-xl font-bold  text-black/80 
                                      dark:text-white'> {data.name} </h1>
                                  </div>
                                  </div>
                                  
                                  <p
                                      className='text-black/20 text-9xl 
                                  font-serif absolute top-0 right-0'><span
                                      className='text-black/80 
                                      dark:text-white/50'>,,</span></p>

                              </div>
                          </div>
                      ))}
                  </Slider>
              </div>
          </div>
    </div>
  )
}

export default Testimonials 