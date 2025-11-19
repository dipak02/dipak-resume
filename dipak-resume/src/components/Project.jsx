
import React from "react"

import blog from '../assets/images/blog.jpeg'
import enotes from '../assets/images/enotes.jpeg'
import school from '../assets/images/school.jpeg'
import ecommerce from '../assets/images/ecommerce.jpeg'

 const projectData=[
      {
        img:blog,
        title:" Blog Website",
        detail:"Blog website built with React JS, Tailwind CSS, and Django to share articles and tutorials on web development.",
        tag: ['React JS','Tailwind CSS','Django'],
      },
      {
        img:enotes,
        title:"E Notes library Website",
        detail:"E-Notes library website made with React JS, Tailwind CSS, and Django where users can create, manage, and share their notes seamlessly.",
        tag: ['React JS','Tailwind CSS','Django'],
      },
      {
        img:school,
        title:"University Management System ",
        detail:"University Management System built with React JS, Tailwind CSS, and Django to manage student data, courses, and grades efficiently.",
        tag: ['React JS','Tailwind CSS','Django'],
      },
      {
        img:ecommerce,
        title:" E-Commerce Website ",
        detail:"E-Commerce website built with React JS, Tailwind CSS, and Django to facilitate online shopping and product management.",
        tag: ['React JS','Tailwind CSS','Django'],
      },
    ];

export default function Project (){
  return(
    <>
    <div id="projects" class="text-left">
        <h1 class="text-blue-600 font-bold mb-1">PROJECTS</h1> 
        <p class="text-3xl font-bold mt-0">My Recent Projects</p> 
    </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectData.map((data,index)=>
              <article key={index} class="overflow-hidden  rounded-lg border border-gray-100 bg-green shadow-xs">
              <img
                alt=""
                src={data.img}class="h-56 w-full object-cover"
              />

              <div class="p-4 sm:p-6">
                <div class="mt-4 flex flex-wrap gap-1">
                <span
                  class="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600"
                >
                  {data.tag.join(",")}
                </span>
               
              </div>
                <a href="#">
                  <h3 class="text-lg font-medium text-gray-900">
                    {data.title}
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {data.detail}
                  
                </p>

                <a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                  Find out more

                  <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
            )}
    
  </div>
<hr class="my-6 border-gray-700 "></hr>
    </>
  )
}


