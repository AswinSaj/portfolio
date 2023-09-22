import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact-page">
        <div className="text-center p-10">
          <h1 className="text-3xl font-medium">Contact</h1>
          <h1 className="pt-2">Fill Out the form to get in touch</h1>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5  ">
          <form action="flex flex-col">
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mb-5">
              <textarea
                name="message"
                placeholder="your message"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              ></textarea>
            </div>
            <div>
              <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg text-bold px-2 py-2 hover:opacity-90">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
