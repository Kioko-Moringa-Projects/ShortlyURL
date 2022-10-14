import React from 'react';
import Fade from "react-reveal/Fade";
import './Header.css'

function Header() {
    return (
        <div className="object1  bg-gradient-to-b w-full  px-10 lg:px-28 lg:h-screen overflow-hidden shadow">
        
        <div className="lg:flex lg:pt-8">
          <Fade left cascade>
            <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
              <h1 className="font-[1000] xl:text-[9.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-cyan-300 xl:leading-[5rem] md:leading-[4rem]">
              Get there faster with ShortlyURL!🔗
              </h1>
              <div className="xl:flex justify-start mt-7">
              
                <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-gray-800 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4">
                ShortlyURL is a free URL shortening service. With ShortyURL, you can shorten long URLs into short, easy-to-remember aliases. Join the movement
                </p>
              </div>
            </div>
          </Fade>
  
          <div className="pr-24 lg:pr-0">
            <Fade right cascade>
              <div className="vacation-illustration">
                <img
                  src="https://intellitect.com/wp-content/uploads/2022/06/undraw_project_complete_lwss.png"
                  alt="People on vacation"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
}

export default Header;