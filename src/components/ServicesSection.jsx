import React, { useState } from 'react';
import w0 from '../../public/images/w-0.webp';
import w1 from '../../public/images/w-1.svg';
import w2 from '../../public/images/w-2.svg';
import w3 from '../../public/images/w-3.svg';
import w4 from '../../public/images/w-4.svg';
import m0 from '../../public/images/m-0.webp';
import m1 from '../../public/images/m-1.svg';
import m2 from '../../public/images/m-2.svg';
import m3 from '../../public/images/m-3.svg';
import m4 from '../../public/images/m-4.svg';
import g0 from '../../public/images/g-0.webp';
import g1 from '../../public/images/g-1.svg';
import g2 from '../../public/images/g-2.svg';
import g3 from '../../public/images/g-3.svg';
import g4 from '../../public/images/g-4.svg';
import u0 from '../../public/images/u-0.webp';
import u1 from '../../public/images/u-1.svg';
import u2 from '../../public/images/u-2.svg';
import u3 from '../../public/images/u-3.svg';
import u4 from '../../public/images/u-4.svg';
import q0 from '../../public/images/q-0.webp';
import q1 from '../../public/images/q-1.svg';
import q2 from '../../public/images/q-2.webp';
import q3 from '../../public/images/q-3.svg';
import q4 from '../../public/images/q-4.webp';
import d0 from '../../public/images/d-0.webp';
import d1 from '../../public/images/d-1.svg';
import d2 from '../../public/images/d-2.svg';
import d3 from '../../public/images/d-3.svg';
import d4 from '../../public/images/d-4.svg';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`flex flex-col md:flex-row items-center px-3 py-5 md:p-8 cursor-pointer rounded-[25px] relative border border-white/25 transition-all duration-500 hover:p-16 
      ${isHovered ? 'bg-gradient-to-br from-[#26426B] to-[#021634] border-[1px] border-solid rounded-[20px] border-white' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        aria-label={service.title}
        href={service.href}
        className="flex-1"
      >
        <div className="flex flex-row justify-normal md:justify-normal items-center">
          <div className="h-12 w-12 mr-[50px] md:m-0 md:w-14 md:h-14">
            <img src={service.icon} alt={service.title} className="w-full h-full" />
          </div>
          <div className="md:mt-0 md:ml-14">
            <h3 className="text-[18px] md:text-2xl md:font-medium">{service.title}</h3>
            <div className={`invisible md:visible mt-8 text-[16px] max-w-md ${isHovered ? 'flex' : 'hidden'}`}>
              {service.description}
            </div>
          </div>
        </div>
      </a>

      <div className={`invisible md:visible mt-4 md:mt-0 items-center justify-between ${isHovered ? 'flex' : 'hidden'}`}>
        {service.technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center justify-center px-6 text-base text-center">
            <div className="w-12 h-12">
              <img src={tech.icon} alt={tech.name} className="w-full h-full" />
            </div>
            <div className="mt-2">{tech.name}</div>
          </div>
        ))}
        <div className='h-[40px] w-[40px] bg-gradient-to-r border-0 from-[#f47b55] to-[#ff3d00] rounded-full flex justify-center items-center hover:bg-none hover:border'>
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9791 8.55562C21.3696 8.16509 21.3696 7.53193 20.9791 7.1414L14.6152 0.777442C14.2246 0.386917 13.5915 0.386917 13.2009 0.777442C12.8104 1.16797 12.8104 1.80113 13.2009 2.19166L18.8578 7.84851L13.2009 13.5054C12.8104 13.8959 12.8104 14.5291 13.2009 14.9196C13.5915 15.3101 14.2246 15.3101 14.6152 14.9196L20.9791 8.55562ZM0.726563 8.84851L20.272 8.84851L20.272 6.84851L0.726562 6.84851L0.726563 8.84851Z" fill="white"></path>
          </svg>
        </div>

      </div>
    </li>
  );
};

const services = [
  {
    icon: w0,
    title: "Web Development",
    description: "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
    technologies: [
      { name: "React JS", icon: w1 },
      { name: "Angular", icon: w2 },
      { name: "Laravel", icon: w3 },
      { name: "Node JS", icon: w4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: m0,
    title: "Mobile App Development",
    description: "Drive digital evolution by creating scalable, compelling, and feature-rich mobile applications.",
    technologies: [
      { name: "React JS", icon: m1 },
      { name: "Angular", icon: m2 },
      { name: "Laravel", icon: m3 },
      { name: "Node JS", icon: m4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: g0,
    title: "Graphics Design",
    description: "Through our creatively inspired and strategically guided solutions, we assist your brand in establishing emotional connections with consumers.",
    technologies: [
      { name: "React JS", icon: g1 },
      { name: "Angular", icon: g2 },
      { name: "Laravel", icon: g3 },
      { name: "Node JS", icon: g4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: u0,
    title: "UI/UX Design",
    description: "We specialise in crafting professional and creative websites. Our designers create websites that are both search engine and user-friendly.",
    technologies: [
      { name: "React JS", icon: u1 },
      { name: "Angular", icon: u2 },
      { name: "Laravel", icon: u3 },
      { name: "Node JS", icon: u4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: q0,
    title: "Quality Assurance (QA)",
    description: "Explore our user-friendly and seamless website and app development services, designed for easy management.",
    technologies: [
      { name: "React JS", icon: q1 },
      { name: "Angular", icon: q2 },
      { name: "Laravel", icon: q3 },
      { name: "Node JS", icon: q4 }
    ],
    href: "/web-development-company"
  },
  {
    icon: d0,
    title: "Digital Marketing",
    description: "Leverage our digital marketing services to achieve outstanding sales conversions and maximise ROI.",
    technologies: [
      { name: "React JS", icon: d1 },
      { name: "Angular", icon: d2 },
      { name: "Laravel", icon: d3 },
      { name: "Node JS", icon: d4 }
    ],
    href: "/web-development-company"
  }
];

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center px-3 py-5 md:px-30 md:py-16 bg-[#01132e] text-white">
      <div className="container">
        <h2 className="container pb-5 md:p-0 text-2xl md:text-5xl leading-tight md:leading-[84px] text-shadow-custom">
          Services We Offer
        </h2>
        <p className="text-[12px] md:text-[16px] text-left">
          We offer a full range of web app development services that make things better for enterprises and companies we work with. Our team of dedicated mobile app developers fulfils your diverse business requirements through a number of services. We specialise in the following services:
        </p>
        <div className="mt-10 md:mt-20 w-full">
          <ul className="p-0 list-none flex flex-col gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
