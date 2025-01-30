import React from 'react';

function LandingComponent() {

    const StatItem = ({ value, label }) => (
        <div className="text-center px-8">
            <div className="text-white text-2xl mb-2">{label}</div>
          <div className="text-[#00ebff] text-6xl font-bold ">{value}</div>
        </div>
      );

    return (
        <div className="bg-[#01132e] p-3">
            <div
                className="h-185 flex items-center pl-20 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url(/public/images/laptop.svg)" }}
            >
                {/* Text Section */}
                <div className='pl-14'>
                    <h1 className="text-white font-extrabold text-[56px] leading-[1.2]">
                        Web & Mobile App <br />
                        Development <br />
                        Company
                    </h1>

                    {/* Get Started Button */}
                    <button className="mt-25 px-6 py-3 bg-gradient-to-r from-[#FFA07A] to-[#FF6347] text-white font-semibold text-lg rounded-full 
                    shadow-md transition-all duration-300 ease-in-out hover:from-[#E25F3C] hover:to-[#C84F33]">
                        GET STARTED
                    </button>
                </div>
            </div>
            <div className="w-[80%] m-auto bg-[#01132e] rounded-xl border border-[#00ebff] border-[2px] p-5">
                <div className="flex justify-around items-center">
                    <StatItem value="100+" label="Successful Projects" />
                    <StatItem value="80%" label="Repeated Client" />
                    <StatItem value="9+" label="Years in industry" />
                </div>
            </div>
        </div>
    );
}

export default LandingComponent;
