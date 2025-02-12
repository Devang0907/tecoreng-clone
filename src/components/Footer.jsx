import React from 'react'

const Footer = () => {

    const left = ["Blog", "Services", "Hire Developer", "Career", "Who We Are"];
    const center = ["Web Development", "Mobile App Development", "Game Development",
        "UI/UX Design", "Graphics Design"];
    const right = ["DevOps", "E-Commerce", "Digital Marketing", "Cloud Computing"];

    return (
        <footer className="bg-[#122743] h-[580px] text-white py-10 px-30">
            <div className="container h-[67%] mx-auto px-6 md:px-3 md:mr-[60px] grid grid-cols-1 md:grid-cols-4">
                {/* Features Menu */}
                <div>
                    <h2 className="text-[24px] w-[185px]  border-b border-dashed border-white mb-4">Features menu</h2>
                    <ul className="space-y-4">
                        {
                            left.map((content) => {
                                return <li><a href="" className="cursor-pointer">{content}</a></li>
                            })
                        }
                    </ul>
                </div>

                {/* Service Menu */}
                <div >
                    <h2 className="text-[24px] w-[165px]  border-b border-dashed border-white mb-4">Service Menu</h2>
                    <ul className="space-y-4">
                        {
                            center.map((content) => {
                                return <li><a href="" className="cursor-pointer">{content}</a></li>
                            })
                        }
                    </ul>
                </div>

                <div className='w-[145px]'>
                    <ul className="space-y-4 pt-14">
                        {
                            right.map((content) => {
                                return <li><a href="" className="cursor-pointer">{content}</a></li>
                            })
                        }
                    </ul>
                </div>

                {/* Contact Information */}
                <div className='ml-[-63px] w-[367px] pr-[20px]'>
                    <h2 className="text-[24px] w-[250px]  border-b border-dashed border-white mb-4">Contact Information</h2>
                    <p className="flex items-center gap-3"><img src="images\location.svg" className='pb-[68px]' alt="" /> Skywalk, The Element, 904, Godrej Garden City Rd, off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Ranip, Gujarat 382481</p>
                    <p className="flex items-center gap-3 mt-5"><img src="images\location.svg" className='pb-[22px]' alt="" /> 1148 S Railroad Ave, Bronxville, New York 10708, USA</p>
                    <p className="flex items-center gap-3 mt-5"><img src="images\mail.svg" alt="" /> sales@tecoreng.com</p>
                    <p className="flex items-center gap-3 mt-5"><img src="images\call.webp" alt="" />Call Us:</p>
                    <p className="flex items-center gap-3 pb-3 ml-[32px]">HR -  +91 63527 25452</p>
                    <p className="flex items-center gap-3 ml-[32px]">Sales -  +91 85117 46476</p>
                </div>
            </div>


            {/* Footer Bottom */}
            <div className="flex justify-between  mt-10 border-t border-white pt-4">
                <div><img className='h-[100px] pt-3 w-auto' src="/images/logo-footer.svg" alt="" /></div>
                <div className='pt-10'> <p>Copyright &copy; 2025 by Tecoreng</p></div>
                <div className='w-[320px] pt-10'>
                    <ul className='flex justify-evenly'>
                        <li><img src="/images/x.svg" alt="" /></li>
                        <li><img src="/images/fb.svg" alt="" /></li>
                        <li><img src="/images/li.svg" alt="" /></li>
                        <li><img src="/images/pin.svg" alt="" /></li>
                        <li><img src="/images/be.svg" alt="" /></li>
                        <li><img src="/images/bf.svg" alt="" /></li>
                        <li><img src="/images/md.svg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
