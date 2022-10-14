import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import {ImTwitter} from "react-icons/im";
import Fade from "react-reveal/Fade";
import { useState } from 'react'
import './Footer.css'
function Footer() {
  const [ question, setQuestion ] = useState('')

  function handleSubmit(e){
    e.preventDefault()
      fetch("/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: question
        })
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        setQuestion('')
      })
      .catch(err => err.message)
      document.querySelector('form').reset() }

  return (
    <div className=" footer1 footer   lg:px-28 pt-14 px-10 pb-10 shadow">
      <Fade bottom cascade>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="text-black font-semibold lg:text-2xl">ShortlyURL🔗</h1>
            <p className="text-[#7A7893] xl:w-[559px] pt-4">
            This URL shortener was created to make it easy to share links to websites. It works by taking a long URL and reducing it to a shorter, easier to remember URL. If you have any questions or feedback, please contact us.
            </p>
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-1 md:grid-cols-1 pt-9">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white bg-[#7A7893] rounded-full leading-4 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-[#7A7893] text-sm">Have a question?</p>
                  <h3 className="text-black">0700000000</h3>
                </div>
              </div>

              <div className="flex gap-2 text-black md:pt-4 pt-4 xl:pt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white bg-[#7A7893] rounded-full leading-4 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <div>
                  <p className="text-[#7A7893] text-sm">Contact us at</p>
                  <h3>shortlyurl@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-black font-semibold lg:text-xl md:pt-4 pt-4">
                Newsletter
              </h2>
              <p className="text-[#7A7893] xl:w-[555px] pt-4 pb-5">
                Be the first one to know about discounts, offers and events.
                Unsubscribe whenever you like.
              </p>
              <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  placeholder="Enter your email"
                  value={ question }
                  onChange={(e) => setQuestion(e.target.value)}
                  className=" object1 rounded-full px-4 py-3 bg-[#342F49] w-full input-p "
                ></input>
                <button className="text-black md:px-7 md:py-3 px-3 py-3 text-xs md:text-base rounded-full bg-[#6366F1] absolute right-2 submit-btn hover:text-white c-btn tracking-wider overflow-hidden">
                  <span className="absolute inset-0 bg-[#5558ff]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Submit
                  </span>
                  Submit
                </button>
              </div>
              </form>
            </div>

            <div className="flex justify-end pt-5 gap-4 socials">
              <div className="relative overflow-hidden block footer-div cursor-pointer">
            
                <span>
                  <GrFacebookOption className="text-black bg-[#6366F1] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                
                <span>
                  <FiYoutube className="text-black bg-[#c63232] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                
                <span>
                  <AiOutlineSkype className="text-black bg-[#5189f1] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span>
                  <ImTwitter className="text-black bg-[#5b337e] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span>
                  <FaWhatsapp className="text-black bg-[#307f63] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-16 md:grid-cols-1">
          <div className="md:flex justify-between text-[#7A7893] text-xs md:text-base flex-col lg:flex-row">
            <p>About Us</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
            <p>Terms of Use</p>
          </div>
          <div className="text-[#7A7893] lg:justify-end justify-start pt-4 flex md:justify-start md:pt-4 text-xs md:text-base lg:pt-0">
            © 2022, All Rights Reserved
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Footer