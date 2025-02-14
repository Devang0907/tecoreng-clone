import React, { useRef , useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const FormSection = () => {
    const recaptcha = useRef(null);
    const [selectedCountry,setSelectedCountry] = useState('IN')
    
    const countries = [
        { code: "ZZ", name: "International" },
        { code: "AF", name: "Afghanistan" },
        { code: "AX", name: "Åland Islands" },
        { code: "AL", name: "Albania" },
        { code: "DZ", name: "Algeria" },
        { code: "AS", name: "American Samoa" },
        { code: "AD", name: "Andorra" },
        { code: "AO", name: "Angola" },
        { code: "AI", name: "Anguilla" },
        { code: "IN", name: "India", selected: true },
        { code: "US", name: "United States" },
        { code: "GB", name: "United Kingdom" },
        { code: "CA", name: "Canada" },
        { code: "AU", name: "Australia" },
        { code: "FR", name: "France" },
        { code: "DE", name: "Germany" }
      ];

      const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
      };

    return (
        <section className="flex bg-[#03142e] pt-6 sm:pt-0 sm:px-15 min-h-screen bg-navy-900">

            {/* Left Section */}

            <div className="invisible w-0 sm:visible sm:w-1/2 sm:p-6 sm:ml-[35px] text-white">
                <div className="sm:space-y-6 sm:mt-5">
                    <h2 className="text-[32px] font-semibold">We Are Here To Help You</h2>
                    <h1 className="text-[49px] font-semibold">Let's Transform Your Vision Into Value.</h1>

                    <div className="sm:mt-12">
                        <h3 className="text-[20px] font-semibold sm:mb-4">Contact us</h3>
                        <div className="sm:space-y-2">
                            <div className="flex items-center sm:p-5 sm:space-x-2">
                                <img src="/images/f-s.svg" alt="" />
                                <span>biz.tecoreng</span>
                            </div>
                            <div className="flex items-center p-5 space-x-2">
                            <img src="/images/f-mb.svg" alt="" />
                                <span>+91 8587 45476</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-5">
                        <h3 className="text-[36px] font-bold mb-4">Our Socials</h3>
                        <p className="text-[16px] font-semibold mb-4">Don't Miss To Follow Us On Our Social Networks Accounts.</p>
                        <div className="flex space-x-4">
                             <img src="/images/f-x.svg" alt="" />
                             <img src="/images/f-f.svg" alt="" />
                             <img src="/images/f-li.svg" alt="" />
                             <img src="/images/f-pin.svg" alt="" />
                             <img src="/images/f-be.svg" alt="" />
                             <img src="/images/f-bf.svg" alt="" />
                             <img src="/images/f-md.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="w-full sm:w-1/2 p-[15px] sm:p-12">
                <div className="bg-white rounded-[35px] sm:rounded-[40px] py-8 px-4 sm:p-8 w-[350px] sm:w-[500px]">
                    <h2 className="text-[20px] sm:text-[55px] font-[500] mb-2">Get in <span className="bg-gradient-to-r from-[rgb(255,97,11)] via-[rgb(255,140,60)] to-[rgb(252,183,162)] bg-clip-text text-transparent">touch</span></h2>
                    <p className="text-[10px] sm:text-[16px] font-medium text-black mb-6 leading-[21px]">
                        We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, send an email.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border-b-2 border-[#767676] focus:outline-none"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                                <div className="flex items-center space-x-1 pr-2 border-r border-gray-300">
                                    <img
                                        className="w-5 h-3.5 object-cover"
                                        alt={selectedCountry}
                                        src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountry}.svg`}
                                    />
                                    <select
                                        onChange={handleCountryChange}
                                        value={selectedCountry}
                                        className="appearance-none bg-transparent border-none outline-none text-gray-600 text-sm pr-1"
                                    >
                                        {countries.map((country) => (
                                            <option key={country.code} value={country.code}>
                                                {country.code}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <input
                                type="tel"
                                placeholder="Contact number"
                                className="w-full py-2 pl-16 border-b-2 border-[#767676] focus:outline-none"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full p-3 border-b-2 border-[#767676] focus:outline-none"
                            />
                        </div>

                        <div className='mb-[25px]'>
                            <textarea
                                placeholder="Let's talk about your idea"
                                rows={1}
                                className="w-full p-3 border-b-2 border-[#767676] focus:outline-none"
                            />
                        </div>

                        <div className="border-dashed border-2 border-gray-300 rounded-md p-4 text-center">
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-6 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                                <span className="text-sm text-gray-500">Upload Additional file</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 mt-2">File size of your document should not exceed 2MB</p>
                        </div>
                        <div className="flex items-center">
                            <ReCAPTCHA sitekey={import.meta.env.VITE_SITE_KEY} ref={recaptcha} />
                        </div>

                        <button className="w-full  sm:mt-3 bg-gradient-to-r from-[#F47B55] to-[#FF3D00] text-white text-sm sm:text-3xl py-1 px-0.5 sm:py-3 sm:px-2 border-b-4 border-[#701d04] font-semibold rounded-xl transform transition-all duration-200 hover:-translate-y-1 hover:border-b-[5px] active:translate-y-0 active:border-b-4">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormSection;
