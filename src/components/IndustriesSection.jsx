import React from 'react'

function IndustriesSection() {
    const row1 = [
        {
            title: "Supply chain & Logistics",
            image: "/images/g-1.webp",
            span: "col-span-5 md:col-span-5"
        },
        {
            title: "Healthcare",
            image: "/images/g-2.webp",
            span: "col-span-3 md:col-span-3"
        },
        {
            title: "Education",
            image: "/images/g-3.webp",
            span: "col-span-3 md:col-span-3"
        },

    ];

    const row2 = [
        {
            title: "Banking",
            image: "/images/g-4.webp",
            span: "col-span-3 md:col-span-3"
        },
        {
            title: "E-commerce",
            image: "/images/g-5.webp",
            span: "col-span-3 md:col-span-3"
        },
        {
            title: "Travel",
            image: "/images/g-6.webp",
            span: "col-span-5 md:col-span-5"
        }
    ];



    return (
        <section className="items-center h-auto md:h-[560px] px-4 md:px-30 bg-[#01132e] text-white">
            <div className="w-[1200px]">
                <h2 className="text-3xl md:text-5xl leading-[54px] md:leading-[84px] text-shadow text-shadow-custom text-center md:text-left">Industries We are experts in</h2>

                <div className="grid grid-cols-12 gap-5">
                    {row1.map((industry, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg h-[200px] ${industry.span} `}
                        >
                            <div className="relative group h-[200px] w-full">
                                <div className='overflow-hidden'>
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                    />
                                </div>

                                <div className="absolute flex items-center justify-center h-[200px] inset-0 bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
                                    <div className="flex items-center justify-center">
                                        <h3 className="text-xl font-normal text-white">
                                            {industry.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-12 pt-5 gap-5">
                    {row2.map((industry, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-lg h-[200px] ${industry.span}`}
                        >
                            <div className="relative h-[200px]  group">
                            <div className='overflow-hidden'>
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute flex items-center justify-center h-[200px]  inset-0 bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
                                    <div className="flex items-center justify-center">
                                        <h3 className="text-xl font-normal text-white">
                                            {industry.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default IndustriesSection