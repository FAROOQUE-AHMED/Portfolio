import React from "react";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
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
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                Built with passion & sleepless night. 
              </p>
              <p className="text-sm">Powered by coffee ☕ and support 💖</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
