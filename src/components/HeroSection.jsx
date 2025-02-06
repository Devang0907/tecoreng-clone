import React from 'react';
import infinity from '../../public/images/infinity.png'

function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#0B1B35] text-white px-8 py-16 flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 p-5">
            <h1 className="text-xl md:text-5xl font-medium leading-tight">
              Transfer your enterprise
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                with digital innovation
              </span>
            </h1>

            <p className="text-lg text-white-300 leading-relaxed max-w-xl pb-0.5">
              Your success as a market innovator reflects our strides as a unified
              partner. Committed to assisting you in attaining excellence through
              our solutions, we boast a team of adept professionals and dynamic
              facilitators. Our steadfast commitment to a collaborative strategy,
              coupled with agile methodologies, propels business expansion. Rely
              on our strategic insights and development processes, and we will
              fuel your concepts to manifest as groundbreaking disruptions.
            </p>

            <button class="w-50 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-3xl  py-3 px-2 border-b-4 border-[#701d04] font-bold rounded-xl transform transition-all duration-200 hover:-translate-y-[2px] hover:border-b-[5px] active:translate-y-0 active:border-b-4">

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