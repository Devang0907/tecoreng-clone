import React, { useState, useEffect } from 'react';

function SpecializationSection() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isShaking, setIsShaking] = useState(false);
    const [direction, setDirection] = useState(null);

    const services = [
        {
            icon: "/images/ui.png",
            title: "UI/UX Graphics & Design",
            description: "Tecoreng is the best UI/UX graphics design agency. We have the capacity to build a smooth and high-quality design with our UI/UX team."
        },
        {
            icon: "/images/mk.png",
            title: "Digital Marketing",
            description: "Technical Core Engineers is a Digital organization that incorporates administrations from making your Brand character through carefully characterizing your thoughts and zeroing in on getting your items and administrations to the consistently developing computerized market subsequently expanding your image's mindfulness, deals, and wants."
        },
        {
            icon: "/images/iot.png",
            title: "Internet Of Things",
            description: "Web of Things(IoT) application advancement interfaces each and every actual device with the Internet to engage an exchange of data. It will in general be energized through different connection points and devices to make life favorable."
        },
        {
            icon: "/images/mb.png",
            title: "Mobile App Development",
            description: "Tecoreng is the top mobile application development company in India. Our expert team of mobile application developers is capable of creating high-quality mobile apps for multiple platforms like IOS & Android."
        },
        {
            icon: "/images/iot.png",
            title: "Web Development",
            description: "Our web team creates high-quality websites as per custom requirements and helps to make your business digital. Tecoreng web experts to continue growing themself to the latest fair with technology such as Laravel, Angular, Node.Js, and so on."
        }
    ];

    useEffect(() => {
        if (isShaking) {
            const timer = setTimeout(() => setIsShaking(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isShaking]);

    const extendedServices = [...services, ...services, ...services];

    const handleCardClick = (index) => {
        const newIndex = (index + services.length) % services.length;
        if(newIndex!=activeIndex){
            setDirection(newIndex > activeIndex ? 'right' : 'left');
            setIsShaking(true);
            setActiveIndex(newIndex);
        }
    };

    const getShakeAnimation = (index) => {
        if (!isShaking) return '';
        
        if (index === 1) {
            return 'animate-shake-center';
        } else if (direction === 'right' && index === 0) {
            return 'animate-shake-left';
        } else if (direction === 'left' && index === 2) {
            return 'animate-shake-right';
        }
        return '';
    };

    const getVisibleCards = () => {
        const prevIndex = (activeIndex - 1 + services.length) % services.length;
        const nextIndex = (activeIndex + 1) % services.length;
        return [services[prevIndex], services[activeIndex], services[nextIndex]];
    };

    return (
        <section className="items-center px-30 py-12 bg-[#01132e] text-white">
            <div className="container">
                <h2 className="container p-0 text-5xl leading-[84px] text-shadow" style={{
                    textShadow: `
                        rgb(239, 237, 227) -1px -1px 1px, 
                        rgb(1, 19, 46) 0px 1px 0px, 
                        rgb(1, 19, 46) 0px 2px 0px, 
                        rgb(1, 19, 46) 0px 3px 0px, 
                        rgb(1, 19, 46) 0px 4px 0px, 
                        rgb(1, 19, 46) 0px 5px 0px, 
                        rgb(77, 89, 108) 0px 6px 0px, 
                        rgba(0, 0, 0, 0.9) 0px 0px 0px, 
                        rgba(0, 0, 0, 0.3) 0px 0px 0px, 
                        rgba(0, 0, 0, 0.5) 0px 0px 0px, 
                        rgba(0, 0, 0, 0.9) 0px 0px 0px
                    `
                }}>
                    Our Specialization
                </h2>
                <p className="text-md pt-10">
                    We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfils your diverse business requirements through a number of services. We specialise in the following services:
                </p>
            </div>
             
             {/* carousel */}
            <div className="flex items-center justify-center relative w-full max-w-5xl pl-15 pt-25">
                <style jsx>{`
                    @keyframes shakeCenter {
                        0%, 100% { transform: scale(1) translateX(0); }
                        25% { transform: scale(1) translateX(-5px); }
                        75% { transform: scale(1) translateX(5px); }
                    }
                    @keyframes shakeLeft {
                        0%, 100% { transform: scale(0.9) translateX(0); }
                        25% { transform: scale(0.9) translateX(-3px); }
                        75% { transform: scale(0.9) translateX(3px); }
                    }
                    @keyframes shakeRight {
                        0%, 100% { transform: scale(0.9) translateX(0); }
                        25% { transform: scale(0.9) translateX(3px); }
                        75% { transform: scale(0.9) translateX(-3px); }
                    }
                    .animate-shake-center {
                        animation: shakeCenter 0.5s ease-in-out;
                    }
                    .animate-shake-left {
                        animation: shakeLeft 0.5s ease-in-out;
                    }
                    .animate-shake-right {
                        animation: shakeRight 0.5s ease-in-out;
                    }
                `}</style>
                <div className="flex items-center justify-center -space-x-8">
                    {getVisibleCards().map((service, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(activeIndex + (index - 1))}
                            className={`
                                cursor-pointer
                                transition-all
                                duration-500
                                rounded-lg
                                
                                ${index === 1 
                                    ? 'bg-white p-8 z-20 transform scale-100 h-[400px] w-[600px]' 
                                    : 'bg-[#414e62] h-[200px] w-[300px] p-6 transform scale-90 hover:scale-95'
                                }
                                ${index === 0 ? 'z-10' : ''}
                                ${index === 2 ? 'z-10' : ''}
                                ${getShakeAnimation(index)}
                            `}
                            style={{
                                backdropFilter: index !== 1 ? 'blur(2px)' : 'none',
                            }}
                        >
                            <div className="flex flex-col items-center text-center space-y-4 p-10">
                                <img 
                                    src={service.icon}
                                    alt={service.title}
                                    className={`
                                        ${index === 1 ? 'w-20 h-20 transition-all duration-500' : 'w-10 h-10 transition-all duration-500'}
                                        transition-colors duration-500
                                    `}
                                />
                                
                                <h3 className={`
                                    ${index === 1 ? 'text-black text-[22px] font-bold' : 'text-black font-semibold text-[10px]'}
                                    transition-colors duration-500
                                `}>
                                    {service.title}
                                </h3>
                                
                                <p 
                                   className={`text-black transition-colors duration-500
                                    ${index === 1 ? 'text-[14px] line-clamp-4' : 'text-[8px] text-black line-clamp-2'}
                                    transition-colors duration-500
                                   `}
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SpecializationSection;