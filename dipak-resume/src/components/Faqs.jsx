import React from "react"

export default function Faqs(){
  return (
    <>
    <div id="faqs" class="text-left">
        <h1 class="text-blue-600 font-bold mb-1">FAQ</h1> 
        <p class="text-3xl font-bold mt-0">Frequently Asked Questions</p> 
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="space-y-4">
   <div class="space-y-4">
      {/* <!-- FAQ Item --> */}
      <div class="border border-gray-200 bg-gray-50 rounded-xl shadow-sm">
        <button 
          class="faq-btn w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
          onclick="toggleFAQ(this)">
          <span>What services do you provide?</span>
          <span class="icon text-red-500 text-xl font-bold">+</span>
        </button>
        <div class="faq-content p-4 pt-0 hidden text-gray-600">
          We provide full-stack web development services using Django (backend) and React (frontend), 
          along with UI/UX design and deployment support.
        </div>
      </div>

      {/* <!-- FAQ Item --> */}
      <div class="border border-gray-200 bg-gray-50 rounded-xl shadow-sm">
        <button 
          class="faq-btn w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
          onclick="toggleFAQ(this)">
          <span>How can I contact you?</span>
          <span class="icon text-red-500 text-xl font-bold">+</span>
        </button>
        <div class="faq-content p-4 pt-0 hidden text-gray-600">
          You can reach us via our contact page, or email directly at <b>shahdipak5654@gmail.com</b>.
        </div>
      </div>

      {/* <!-- FAQ Item --> */}
      <div class="border border-gray-200 bg-gray-50 rounded-xl shadow-sm">
        <button 
          class="faq-btn w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-100"
          onclick="toggleFAQ(this)">
          <span>Do you offer project customization?</span>
          <span class="icon text-red-500 text-xl font-bold">+</span>
        </button>
        <div class="faq-content p-4 pt-0 hidden text-gray-600">
          Yes, we tailor every project based on client requirements, whether it’s e-commerce, a blog, or a custom web app.
        </div>
      </div>

      {/* <!-- FAQ Item --> */}
      <div class="border border-gray-200 bg-gray-50 rounded-xl shadow-sm">
        <button 
          class="faq-btn w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-white"
          onclick="toggleFAQ(this)">
          <span>Do you provide ongoing support?</span>
          <span class="icon text-red-500 text-xl font-bold">+</span>
        </button>
        <div class="faq-content p-4 pt-0 hidden bg-gray-50 text-gray-600">
          Absolutely! We provide maintenance, updates, and bug fixes after project delivery.
        </div>
      </div>
    </div>

  
</div>
<form class="bg-sage-200 p-6  rounded-2xl shadow-md space-y-4">
       

        <div>
          <label class="block text-2xl px-8 text-center font-medium mb-4">If you have any question or enquiry about anything feel free to ask.</label>
          <textarea rows="2" placeholder="Your Questions Here....."
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-400 outline-none" required></textarea>
        </div>

        <button type="submit"
                class="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
</div>
<hr class="my-6 border-gray-700 "></hr>
    </>
  )
}



