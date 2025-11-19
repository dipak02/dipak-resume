import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { initAOS } from "./Animation"

import React from "react"

 const testimonialsData=[
   {
     id: 1,
     name: "John Doe",
     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80",
     comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
     date: "31/06/2025",
     topic:" How I built my first website with Nuxt, Tailwind CSS and Vercel",
   },
   {
     id: 2,
     name: "Jane Smith",
     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80",
     comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
     date: "31/06/2025",
    topic:" How I built my first website with Nuxt, Tailwind CSS and Vercel",
   },
   {
     id: 3,
     name: "Alice Johnson",
     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80",
     comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
     date: "31/06/2025",
     topic:" How I built my first website with Nuxt, Tailwind CSS and Vercel",
   },
   {
     id: 4,
     name: "Alice Johnson",
     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80",
     comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
     date: "31/06/2025",
     topic:" How I built my first website with Nuxt, Tailwind CSS and Vercel",
   },
 ];

export default function Testimonials() {

  // useEffect(() => {
  //   initAOS(); // initialize AOS globally
  // }, []);
  
  return (
  <>
  <div className="bg-[var(--primary-color)]">
  <div className="text-center  bg-[var(--primary-color)]">
    <h1 className=" text-white text-4xl font-bold ">TESTIMONIALS</h1>
      <p className="text-black-600 font-bold text-2xl mt-4 ">What my subscribers say!</p></div>
    <section id="testimonials" className="text-left py-5 px-4 lg:px-8 bg-[var(--primary-color)] " >
      {/* Heading */}
      

      {/* Swiper Slider */}
    <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={10}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="mySwiper"
>
{testimonialsData.map((data,index) =>
  <SwiperSlide  key={index}>
     
      <div className="max-w-sm w-full mx-auto bg-[var(--com-color)] p-4 rounded-md shadow">
        <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
          {/* Profile Image */}
          <div className="sm:order-last sm:shrink-0">
            <img
            alt={data.name}
            src={data.image}
            className="size-16 rounded-full object-cover sm:size-[72px]"
          />
        </div>

        {/* Content */}
        <div className="mt-4 sm:mt-0">
          <h3 className="text-lg font-medium text-gray-900">
            {data.topic}
          </h3>
          <p className="mt-1 text-sm text-gray-600">By {data.name}</p>
          <p className="mt-4 line-clamp-2 text-sm text-gray-600">
            {data.comment}
          </p>
        </div>
      </div>

      {/* Meta Info */}
      <dl className="mt-6 flex gap-4 lg:gap-6">
        <div className="flex items-center gap-2">
          <dt className="text-gray-600">📅</dt>
          <dd className="text-xs text-gray-600">{data.date}</dd>
        </div>
        
      </dl>
    </div>
  </SwiperSlide>)}
 
</Swiper>

    </section>
   </div>
  
    </>
  );
}
