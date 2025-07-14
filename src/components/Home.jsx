import React from "react";

import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

import { SiKotlin, SiFirebase } from "react-icons/si";
import { TbBrandAndroid } from "react-icons/tb";
import { FaGithub, FaFigma } from "react-icons/fa";
import { SiJetpackcompose } from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Turning Ideas Into Digital Experiences</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Farooque","an App Developer", "a Web Developer", "a Programmer","a Coder","an AI Trainer"]}
                typeSpeed={30}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
              <p className="text-sm md:text-md text-justify">
  I'm a passionate full-stack developer with a strong foundation in both web and mobile app development, backed by hands-on experience in real-time social platforms, monetized apps, and AI-powered tools. I love turning complex ideas into smooth, scalable solutions that people enjoy using. Whether it’s building a sleek UI or writing powerful backend logic, I bring a product-first mindset, attention to detail, and a hunger to innovate. I don’t just code — I craft, debug, and deliver.
</p>

            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/share/15sXt8zw7w/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/farooque-ahmed-7b0042307?" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/farooque.ahmed.siddique" target="_blank">
                      <FaSquareInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=farooqueahmedsiddique@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >

                      <SiGmail className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
               <div className="flex space-x-5">
                <SiKotlin className="text-2xl md:text-3xl hover:scale-110 duration-200 border-[2px] cursor-pointer" />
                <TbBrandAndroid className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <SiFirebase className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <FaGithub className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <FaFigma className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <SiJetpackcompose className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />

              </div>

              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
