import React from "react"

import step from '../assets/images/step.jpeg'
import roadmap from '../assets/images/roadmap.png'
import fixingerror from '../assets/images/fixing error.jpeg'
import makingmistake from '../assets/images/making mistake.jpeg'

const blogData=[
  {
    img:step,
    date:"24th Aug 2025",
    title:"Step-by-Step Guide to Building an E-commerce Website (Django + React)",
    details:"E-commerce has become the backbone of modern businesses. As an IT Engineer,building a full-stack e-commerce website not only sharpens your skills but also makes your portfolio stronger. In this guide, I’ll explain how to build an e-commerce site using Django (backend) and React (frontend).",
  },
  {
    img:roadmap,
    date:"25th Aug 2025",
    title:"Roadmap to Become a Full-Stack Web Developer in 2025",
    details:"The demand for full-stack developers is skyrocketing. In 2025, companiesexpect engineers who can handle both backend and frontend. Here’s a clear roadmap for beginners.",
  },
  {
    img:fixingerror,
    date:"25th Aug 2025",
    title:"Fixing Common Errors in Django for Beginners for Error Free Code",
    details:"Django is powerful, but beginners often face errors that can be frustrating. Here are some common Django errors and solutions.",
  },
  {
    img:makingmistake,
    date:"25th Aug 2025",
    title:"Mistakes Beginners Make in Web Development (and How to Avoid Them)",
    details:" Every IT Engineer makes mistakes when starting web development from them early can save time and frustration.",
  },
];

export default function Blog(){
  return (
    <>
        <div id="blog" class="text-left">
        <h1 class="text-blue-600 font-bold mb-1">BLOG</h1> 
        <p class="text-3xl font-bold mt-0">My Blog Posts</p> 
    </div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       
       {blogData.map((data,index)=>

        <article key={index} class="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
          <img
            alt=""
            src={data.img} class="absolute inset-0 h-full w-full object-cover"
          />

          <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2022-10-10" class="block text-xs text-white/90">{data.date}  </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">{data.title}</h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                {data.details}
              </p>
            </div>
          </div>
        </article>
      )}
              
       </div>
<hr class="my-6 border-gray-700 "></hr>
    </>
  )
}


