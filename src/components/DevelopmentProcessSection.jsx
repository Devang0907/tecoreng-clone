import React, { useEffect, useState, useRef } from 'react';
import p1 from '../../public/images/p-1.webp'
import p2 from '../../public/images/p-2.webp'
import p3 from '../../public/images/p-3.webp'
import p4 from '../../public/images/p-4.webp'
import p5 from '../../public/images/p-5.webp'
import p6 from '../../public/images/p-6.webp'
import p7 from '../../public/images/p-7.webp'
import opening from '../../public/images/ball-opening.svg'
import exit from '../../public/images/ball-exit.webp'

function DevelopmentProcessSection() {
    // Add state and ref for ball animation
    const [ballTransform, setBallTransform] = useState('translateX(15px) translateY(0px)');
    const componentRef = useRef(null);

    // Define keyframes for ball movement
    const keyframes = [
        // Progress calculated based on TIME percentages not scroll percentages
        { progress: 0.00, transform: 'translateX(0px) translateY(0px)' },    // 0s
        { progress: 0.05, transform: 'translateX(400px) translateY(100px)' }, // 1s
        { progress: 0.15, transform: 'translateX(800px) translateY(200px)' }, // +2s
        { progress: 0.20, transform: 'translateX(800px) translateY(350px)' }, // +1s
        { progress: 0.25, transform: 'translateX(0px) translateY(500px)' },   // +1s
        { progress: 0.30, transform: 'translateX(0px) translateY(580px)' },   // +1s
        { progress: 0.40, transform: 'translateX(800px) translateY(750px)' }, // +2s
        { progress: 0.45, transform: 'translateX(800px) translateY(900px)' }, // +1s
        { progress: 0.50, transform: 'translateX(0px) translateY(1050px)' },  // +1s
        { progress: 0.55, transform: 'translateX(0px) translateY(1140px)' },  // +1s
        { progress: 0.65, transform: 'translateX(800px) translateY(1280px)' },// +2s
        { progress: 0.70, transform: 'translateX(800px) translateY(1450px)' },// +1s
        { progress: 0.75, transform: 'translateX(0px) translateY(1600px)' },  // +1s
        { progress: 0.80, transform: 'translateX(0px) translateY(1690px)' },   // +1s
        { progress: 0.90, transform: 'translateX(750px) translateY(1830px)' }, // +2s
        { progress: 0.95, transform: 'translateX(750px) translateY(1900px)' }, // +1s
        { progress: 1.00, transform: 'translateX(750px) translateY(2050px)' }, // +1s
      ];
    

    // Add scroll animation effect
    useEffect(() => {
        const handleScroll = () => {
            if (!componentRef.current) return;

            const component = componentRef.current;
            const componentTop = component.offsetTop;
            const componentHeight = component.offsetHeight;
            const viewportHeight = window.innerHeight;
            
            const scrollStart = componentTop - viewportHeight * 0.5;
            const scrollEnd = componentTop + componentHeight - viewportHeight * 0.5;
            const scrollPosition = window.scrollY;
            
            let scrollProgress = (scrollPosition - scrollStart) / (scrollEnd - scrollStart);
            scrollProgress = Math.min(1, Math.max(0, scrollProgress));

            let startIdx = 0;
            while (startIdx < keyframes.length - 1 && keyframes[startIdx + 1].progress <= scrollProgress) {
                startIdx++;
            }
            const endIdx = Math.min(startIdx + 1, keyframes.length - 1);
            
            const start = keyframes[startIdx];
            const end = keyframes[endIdx];
            const segmentProgress = (scrollProgress - start.progress) / (end.progress - start.progress);
            const easedProgress = 0.5 * (1 - Math.cos(Math.PI * segmentProgress));

            const parseTransform = (str) => {
                const x = Number(str.match(/translateX\(([-\d.]+)px/)[1]);
                const y = Number(str.match(/translateY\(([-\d.]+)px/)[1]);
                return { x, y };
            };

            const startPos = parseTransform(start.transform);
            const endPos = parseTransform(end.transform);
            
            const currentX = startPos.x + (endPos.x - startPos.x) * easedProgress;
            const currentY = startPos.y + (endPos.y - startPos.y) * easedProgress;

            setBallTransform(`translateX(${currentX}px) translateY(${currentY}px)`);
        };

        const optimizedScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener('scroll', optimizedScroll);
        return () => window.removeEventListener('scroll', optimizedScroll);
    }, []);

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-[#112542] p-10 flex flex-col gap-2 text-white" ref={componentRef}>
            <h2 className="container ml-[15px] p-3 text-3xl md:text-5xl leading-tight md:leading-[84px] text-shadow-custom">
                Our Development Process
            </h2>

            <div className='pt-2 w-[200px] flex justify-center'>
                <img src={opening} className='ml-[15px] w-[50px] h-auto' alt="opening" />
                {/* Add animated ball */}
                <div 
                    className='absolute w-[70px] h-[70px] transition-transform duration-500 ease-in-out'
                    style={{ transform: ballTransform }}
                >
                    <img
                        className='w-full h-full'
                        src='/images/ball-3d.svg'
                        alt="rolling ball"
                    />
                </div>
            </div>

            {/* Rest of your existing JSX remains exactly the same */}
            {/* First Card */}
            <div
                className="relative w-[750px] h-[275px] flex items-center ml-[15px] p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center gap-8">
                    <div className="bg-[#112542] h-[150px] w-[150px] rounded-full p-6 shadow-lg hover:scale-110 transition-transform duration-300"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p1} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[22px] font-semibold mb-3">Research and Analysis</h3>
                        <p className="text-gray-300 text-[15px]">Idea, Consultation, Research, Goal Definition, & Requirements Gathering</p>
                    </div>
                </div>
            </div>

           {/* Second Card  */}
            <div className="self-end mr-[15px]">
                <div
                    className="relative max-w-full h-[275px] flex items-center p-8 shadow-lg"
                    style={{
                        background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                        borderRadius: '20px',
                        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)',
                        transform: 'scale(-1, 1)'
                    }}
                >
                    <div className="flex items-center gap-8" style={{ transform: 'scale(-1, 1)' }}>
                        <div className="text-white text-right">
                            <h2 className="text-2xl font-semibold mb-3">Design</h2>
                            <p className="text-gray-300">System Architecture Design, Wireframing, UI/UX Designing, & Prototyping</p>
                        </div>
                        <div className="bg-[#112542] h-[150px] w-[150px] rounded-full p-6 shadow-lg"
                            style={{
                                backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                                boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                                borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                            }}
                        >
                            <img src={p2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Card */}
            <div
                className="relative w-[750px] h-[275px] ml-[15px] flex items-center p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center gap-8">
                    <div className="bg-[#112542] h-[150px] w-[150px] rounded-full p-6 shadow-lg"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p3} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[22px] font-semibold mb-3">Development</h3>
                        <p className="text-gray-300 text-[15px]">Functional Implementation, Software Coding & Optimization</p>
                    </div>
                </div>
            </div>

            {/* Four Card */}
            <div className="self-end mr-[15px]">
                <div
                    className="relative w-[750px] h-[275px] flex items-center p-8 shadow-lg"
                    style={{
                        background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                        borderRadius: '20px',
                        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)',
                        transform: 'scale(-1, 1)'
                    }}
                >
                    <div className="flex items-center gap-8" style={{ transform: 'scale(-1, 1)' }}>
                        <div className="text-white text-right">
                            <h2 className="text-2xl font-semibold mb-3">Testing</h2>
                            <p className="text-gray-300">Quality Assurance, Troubleshooting, & Testing</p>
                        </div>
                        <div className="bg-[#112542] h-[150px] w-[150px] rounded-full p-6 shadow-lg"
                            style={{
                                backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                                boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                                borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                            }}
                        >
                            <img src={p4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Card */}
            <div
                className="relative w-[750px] ml-[15px] h-[275px] flex items-center p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center gap-8">
                    <div className="bg-[#112542] h-[150px] w-[150px] rounded-full p-6 shadow-lg"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p5} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[22px] font-semibold mb-3">Deployment</h3>
                        <p className="text-gray-300 text-[15px]">Launch, Beta Live, & Live</p>
                    </div>
                </div>
            </div>

            {/* Six Card */}
            <div className="self-end mr-[15px]">
                <div
                    className="relative w-[750px] h-[275px] flex items-center p-8 shadow-lg"
                    style={{
                        background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                        clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                        borderRadius: '20px',
                        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)',
                        transform: 'scale(-1, 1)'
                    }}
                >
                    <div className="flex items-center gap-8" style={{ transform: 'scale(-1, 1)' }}>
                        <div className="text-white text-right">
                            <h2 className="text-2xl font-semibold mb-3">Evaluation</h2>
                            <p className="text-gray-300">Performance Evaluation, & Analytics Implementation</p>
                        </div>
                        <div className="bg-[#112542] h-[150px] w-[150px] rounded-full p-6 shadow-lg"
                            style={{
                                backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                                boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                                borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                            }}
                        >
                            <img src={p6} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Seventh Card */}
            <div
                className="relative ml-[15px] w-[750px] h-[275px] flex items-center p-8 shadow-lg"
                style={{
                    background: 'linear-gradient(93.98deg, rgb(38, 66, 107) 3.93%, rgba(0, 23, 56, 0.42) 97.99%)',
                    clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 50%, 0% -1%)',
                    borderRadius: '20px',
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.25)'
                }}
            >
                <div className="flex items-center gap-8">
                    <div className="bg-[#112542] h-[150px] w-[150px] rounded-full p-6 shadow-lg"
                        style={{
                            backgroundImage: 'linear-gradient(140deg, rgb(38, 66, 107) 3.04%, rgb(2, 22, 52) 70%), linear-gradient(rgb(255, 255, 255), transparent 60%) !important',
                            boxShadow: 'rgb(1, 19, 46) 0px 12px 17px',
                            borderImageSource: 'linear-gradient(rgb(255, 255, 255), rgba(0, 0, 0, 0.55))'
                        }}
                    >
                        <img src={p7} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="text-[22px] font-semibold mb-3">Maintenance</h3>
                        <p className="text-gray-300 text-[15px]">Monitoring, Feedback, Analysis, & Complete Support</p>
                    </div>
                </div>

            </div>
            <img src={exit} className='ml-[750px] h-[50px] w-[170px]' alt="" />


        </div>
    );
}

export default DevelopmentProcessSection