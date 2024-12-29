import React from 'react';
import hero from "../../assets/hero.avif";
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center flex items-center justify-center gap-4"
      style={{ backgroundImage: `url(${hero})`, minHeight: '70vh' }}
    >
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text positioned upward */}
      <div className="relative z-10 text-white font-semibold flex items-center justify-center h-full flex-col gap-4">

          <div className='w-96 font-bold line-clamp-19 leading-loose text-xl'>
          Track your daily calorie intake effortlessly. Log meals, monitor nutrition, and stay on top of your health goals. With our easy-to-use Calorimeter, managing your diet has never been simpler. Start your journey towards a healthier lifestyle today
          </div>
          <div>
            <NavLink className={'bg-green-400 p-2 rounded-3xl hover:bg-green-700 px-7 text-yellow'} to={"/my-food"}>Get Started</NavLink>
          </div>
        
      </div>
    </div>
  );
}

export default HeroSection;
