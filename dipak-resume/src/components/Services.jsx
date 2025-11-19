  import React from "react"


  import design from '../assets/images/design.png'
  import coding from '../assets/images/coding.png'
  import seo from '../assets/images/seo.png'

  const servicesData=[
      {
        img:coding,
        title:" Web Development",
        detail:"I specialize in designing and developing well-structured, responsive websites tailored to meet the unique needs of diverse sectors.",
      },
      {
        img:design,
        title:"Graphics Design",
        detail:" I craft bold, modern designs that connect and inspire, turning imagination into pixel-perfect reality and making brands truly unforgettable.",
      },
      {
        img:seo,
        title:"SEO Optimization",
        detail:" Boosting your online presence and helping businesses rank higher with expert, proven SEO optimization services.",
      },
    ];

  export default function Services(){

    

    return (
      <>
         <div id="services" className="text-left">
        <h1 className="text-blue-600 font-bold mb-1">SERVICES</h1> 
        <p className="text-3xl font-bold mt-0">Services That I Provide</p> 
    </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {servicesData.map((data,index)=>
          
              <article key={index}
                className="rounded-lg border bg-sage-200 p-4 shadow-xs transition hover:shadow-lg sm:p-6"
              >
                 <span className="inline-block rounded-lg bg-yellow-500 p-2 w-12 h-12 text-white">
                  <img src={data.img} alt=""/>
                </span>

                <a href="#">
                  <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                   {data.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                 {data.detail}
                </p>

              
              </article>)}
             
        </div>
    <hr className="my-6 border-gray-700 "></hr>
      </>
    )
  }
  
  
  
  
 