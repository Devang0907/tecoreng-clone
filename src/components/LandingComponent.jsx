import React from 'react';
import laptop from '../../public/images/laptop.svg';

function LandingComponent() {
    const StatItem = ({ value, label }) => (
        <div className="text-center flex-1">
            <div className="text-white text-[10px] md:text-2xl md:mb-4">{label}</div>
            <div className="text-[#00ebff] text-[14px] md:text-7xl md:mb-4 font-semibold">{value}</div>
        </div>
    );

    return (
        <div className="bg-[#01132e] min-h-[65vh] md:min-h-screen pb-3 md:p-2 ">
            <div
                className="relative md:mx-15 md:h-185 flex flex-col md:flex-row md:items-center md:justify-start md:pl-20 md:bg-no-repeat md:bg-cover md:bg-center px-4 md:px-0 sm:bg-[url(/public/images/laptop.svg)] sm:flex-row-reverse"
            >
                {/* Text Section */}
                <div className="pt-7 md:pt-0 md:pl-3 z-0 text-left w-full md:w-auto flex flex-col items-start">
                    <h1 className="text-white font-bold text-3xl leading-tight md:text-[60px] md:leading-[1.2]">
                        Web & Mobile App <br />
                        Development <br />
                        Company
                    </h1>

                    {/* Get Started Button */}
                    <div className="flex justify-start mt-6 md:mt-25">
                        <button class="md:w-60 w-30 sm:mt-10 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 px-0.5 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-bold rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4">

                            GET STARTED
                        </button>
                    </div>
                </div>

                {/* Mobile Image */}
                <div className="w-full md:hidden flex justify-end">
                    <img
                        src={laptop}
                        alt="Laptop"
                        className="w-[90%] max-w-[300px] h-auto"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="w-[95%] md:w-[80%] mx-auto bg-[#01132e] rounded-2xl border-[#00ebff] border-[2px] p-3 z-0 md:mt-0">
                <div className="flex flex-wrap justify-between items-center gap-1 md:gap-0">
                    <StatItem value="100+" label="Successful Projects" />
                    <StatItem value="80%" label="Repeated Client" />
                    <StatItem value="9+" label="Years in industry" />
                </div>
            </div>
        </div>
    );
}

export default LandingComponent;
