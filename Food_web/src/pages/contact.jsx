import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col mb-20">
      <div className="absolute z-0 ">
        <img src="https://www.bhmpics.com/downloads/indian-food-images-Wallpapers/8.thumb-1920-862639.jpg" alt="" />
      </div>
      <div className="bg-cover bg-center h-64 flex items-center justify-center  z-20">
        <h1 className="text-white text-4xl font-semibold text-center shadow-xl">Contact Us</h1>
      </div>
      {/* Contact Form */}
      <div className="flex-grow container mx-auto -mt-16  z-20">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg shadow-xl overflow-hidden">
          <div className="p-6">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-lg outline-none focus:border-blue-500"/>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" rows="4" className="w-full px-3 py-2 border rounded-lg resize-none outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
