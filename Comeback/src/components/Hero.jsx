import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="pb-6 text-4xl font-bold text-whitesmoke tracking-tight lg:mt-16 lg:text-6xl">
              Nawin Vignesh
            </h1>
            <h1>
              <span className="bg-gradient-to-r from-blue-400 via-slate-500 to-purple-700 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl">
                Full Stack Developer
              </span>
              <p className="my-4 max-w-xl py-4 font-light tracking-tighter">
                {HERO_CONTENT}
              </p>
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <div className="flex justify-center lg:justify-end">
            <img
              src={profilePic}
              alt="Nawin Vignesh"
              className="rounded-2xl"
              style={{ width: '80%', height: 'auto', maxWidth: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
