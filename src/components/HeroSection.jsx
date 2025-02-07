import React from 'react';
import infinity from '../../public/images/infinity.png'

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#112542] text-white px-0 py-1 sm:px-8 sm:py-2 flex items-center">
      <div className="container mx-auto max-w-7xl p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 p-5">
            <h2 className="text-[24px] sm:text-[40px] font-medium leading-tight">
              Transfer your enterprise
              <br />
                with digital innovation
            </h2>

            <p className="text-xs sm:text-lg text-white-300 leading-relaxed max-w-xl pb-0.5">
              Your success as a market innovator reflects our strides as a unified
              partner. Committed to assisting you in attaining excellence through
              our solutions, we boast a team of adept professionals and dynamic
              facilitators. Our steadfast commitment to a collaborative strategy,
              coupled with agile methodologies, propels business expansion. Rely
              on our strategic insights and development processes, and we will
              fuel your concepts to manifest as groundbreaking disruptions.
            </p>

            <button class="sm:w-50 w-30 sm:mt-10 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 px-0.5 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-bold rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4">

              HIRE NOW
            </button>
          </div>

          {/* Right Content - Infinity Symbol */}
          <div className="relative">
            <img src={infinity} alt="" />
          </div>

        </div>

      </div>
    </div>
  );
}

export default HeroSection