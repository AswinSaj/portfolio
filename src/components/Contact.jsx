import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jihned9",
        "template_xl6qg6n",
        form.current,
        "pLORtAYEacATpio47"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-[#14061E] pt-20 " id="contact">
      <div className="contact-page">
        <div className="text-center ">
          <h1 className="text-3xl font-medium text-teal-300 pt-5">
            Hit me up!👇
          </h1>
          <h1 className="pt-2 text-white">Fill Out the form to get in touch</h1>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-5 m-5 md:mx-[20vw]">
          <form action="flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                name="your_name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="your_email"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              ></textarea>
            </div>
            <div>
              <button
                className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg text-bold px-2 py-2 hover:opacity-90"
                onSubmit={sendEmail}
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <footer>
          <h1 className="text-white">Designed by Aswin</h1>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
