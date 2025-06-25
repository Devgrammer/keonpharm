import React from 'react'
import Contact from '../../data/getIntouch.json'

const GetInTouch = () => {
  return (
    <div className=" md:flex justify-between gap-24">
      {/* Contact Form */}
      <div className="w-full md:w-[60%]">
        <form
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          aria-label="Contact form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submission simulated. Implement backend accordingly.");
          }}
        >
          <label className="flex flex-col text-gray-500  text-lg font-medium md:col-span-2">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-4 p-3 h-16 rounded-2xl text-gray-600 text-lg outline-2 outline-gray-400 focus:outline-yellow"
              placeholder="Your full name"
              aria-required="true"
            />
          </label>
          <label className="flex flex-col text-gray-500  text-lg font-medium md:col-span-2">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-4 p-3 h-16 rounded-2xl text-gray-600 text-lg  outline-2 outline-gray-400 focus:outline-yellow"
              placeholder="you@example.com"
              aria-required="true"
            />
          </label>
          <label className="flex flex-col text-gray-500  text-lg font-medium md:col-span-2">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-4 p-3 h-32 rounded-2xl text-gray-600 text-lg resize-none outline-2 outline-gray-400 focus:outline-yellow"
              placeholder="Your message here..."
              aria-required="true"
            />
          </label>
          <button
            type="submit"
            className=" h-16 md:col-span-2  bg-yellow text-white hover:bg-amber-500 hover:cursor-pointer transition-colors py-3 rounded-2xl text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow"
          >
            Send Your Message Here
          </button>
        </form>
      </div>

      {/* Contact Content */}
      <div className="hidden md:block w-[40%] space-y-12">
        {Contact.getInTouch.map((cont, index) => {
          return (
            <div key={`Contact-${index}`} className="cont-container space-y-4">
              <div className="heading text-4xl text-teal font-medium">
                {cont.heading}
              </div>
              <div className="heading-content text-lg text-gray-400  ">
                {cont.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GetInTouch