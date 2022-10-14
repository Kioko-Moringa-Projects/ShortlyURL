import React, { useState } from 'react';
import Header from "./Header";
import { NavLink } from 'react-router-dom';

import Fade from "react-reveal/Fade";
import './Landing.css'


function Landing() {
    return (
        <div>
            <Header />

            <section className="relative shadow">

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none " aria-hidden="true">
            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#EAEAEA" offset="77.402%" />
                    <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
                </defs>
                <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
                </g>
            </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                {/* Section header */}
                <div className=" object3 w-full text-center pb-12 md:pb-16 shadow ">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Generate your own short urls. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"></span></h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">The shortened URL have no limits, so you can create as many as you want. It is fast, it is simple and you can use it anywhere you want


.</p>
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                    <div>
                        <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0"><NavLink to ='/signup'>Start Today</NavLink></a>
                    </div>
                   
                    </div>
                </div>
                </div>

                {/* Hero image */}
                <div>
                <div className="  lg:flex lg:pt-8">
          
                <Fade left cascade>
              <div className="vacation-illustration">
                <img
                  src="https://techtest-ltd.co.uk/wp-content/uploads/2022/02/undraw_Performance_overview_re_mqrq.png"
                  alt="People on vacation"
                />
              </div>
            </Fade>

          <div className="  pr-24 lg:pr-0">

          <Fade right cascade>
            <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
              <h1 className="font-[1000] xl:text-[9.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-cyan-300 xl:leading-[5rem] md:leading-[4rem]">
                View fast with ShortlyURL🔗
              </h1>
              <div className="xl:flex justify-start mt-7">
                
                <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-gray-800 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4">
                The main purpose of this  is to create short URLs. You can use it to create short links for your blog posts, tweets, articles or any other content that you want to share with others.
                Features include:
                      <ul>
                        <li>
                      - Easy to install and use
                      </li>
                      <li>
                      - No limits on the number of shortened URLs
                      </li>
                      <li>
                      - Fast and simple
                      </li>
                      <li>
                      - Can be used anywhere
                      </li>
                      </ul>
                </p>
              </div>
            </div>
          </Fade>



            
            
          </div>
        </div>

                

                </div>

            </div>

            </div>
            </section>
            
        </div>
    );
}

export default Landing;