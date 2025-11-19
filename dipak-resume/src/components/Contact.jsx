
import React from "react"

export default function Contact(){
  return(
    <>
        <div id="contact" class="text-center">
        <h1 class="text-blue-600 font-bold mb-1">CONTACT</h1> 
        <p class="text-3xl font-bold mt-0">Interested in working together?</p> 
        <p class="text-3xl font-bold mt-0">Let's Talk.</p> 
    </div>
<section class="max-w-4xl mx-auto p-6">
    

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* <!-- Contact Info --> */}
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold text-blue-500">Get in Touch</h3>
          <p class="text-gray-600 mt-2">
            Have a question or want to work together? Feel free to send us a message. 
            We’ll get back to you as soon as possible.
          </p>
        </div>
        <div class="space-y-4">
          <p><span class="font-semibold">📍 Address:</span> Kathmandu, Nepal</p>
          <p><span class="font-semibold">📧 Email:</span> shahdipak5654@gmail.com</p>
          <p><span class="font-semibold">📞 Phone:</span> +977-9761653893</p>
        </div>
      </div>

      {/* <!-- Contact Form --> */}
      <form class="bg-sage-200 p-6 rounded-2xl shadow-md space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Full Name</label>
          <input type="text" placeholder="Your name"
                 class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none" required/>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" placeholder="you@example.com"
                 class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none" required/>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Message</label>
          <textarea rows="4" placeholder="Write your message..."
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none" required></textarea>
        </div>

        <button type="submit"
                class="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
<hr class="my-6 border-gray-700 "></hr>
    </>
  )
}

