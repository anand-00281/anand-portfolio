import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="px-6 max-w-[1200px] mx-auto glass grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <div className="my-auto pr-6 text-center md:text-left">
        <h2 className="text-5xl font-bold text-white mt-10 mb-10">Contact</h2>
        <h3 className="text-4xl font-bold text-white">LET'S WORK ON SOMETHING GREAT !!!</h3>
        <p className="text-gray-400 mt-2">I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.</p>
        <p className="text-gray-400 mt-4">anand.sanodiya031@gmail.com</p>
        <div className="flex justify-center mt-10 mb-10 md:justify-start">
          <a href="https://www.linkedin.com/in/anand-sanodiya-b60b232a5/" className="mx-2">
            <AiFillLinkedin className="w-[40px] h-auto text-gray-300" />
          </a>
          <a href="https://github.com/anand-00281" className="mx-2">
            <AiFillGithub className="w-[40px] h-auto text-gray-300" />
          </a>
          <a href="https://x.com/anand00281" className="mx-2">
            <AiOutlineTwitter className="w-[40px] h-auto text-gray-300" />
          </a>
        </div>
      </div>

      <form action="https://getform.io/f/akkknmma" method="POST" className="max-w-6xl p-5 md:p-12" id="form">
        <input
          type="text"
          id="name"
          placeholder="Your name ..."
          name="name"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email ..."
          name="email"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <textarea
          name="textarea"
          id="textarea"
          cols={30}
          rows={4}
          placeholder="Your Message ..."
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <button type="submit" className="w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6c34] ">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
