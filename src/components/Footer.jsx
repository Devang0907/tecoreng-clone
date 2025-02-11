import React from 'react'

const Footer = () => {

    const left = ["Blog", "Services", "Hire Developer", "Career", "Who We Are"];
    const center = ["Web Development", "Mobile App Development", "Game Development",
        "UI/UX Design", "Graphics Design"];
    const right = ["DevOps", "E-Commerce", "Digital Marketing", "Cloud Computing"];

    return (
        <footer className="bg-[#122743] text-white py-10">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Features Menu */}
                <div>
                    <h2 className="text-lg w-[150px] font-semibold border-b border-dashed border-white pb-2 mb-4">Features menu</h2>
                    <ul className="space-y-4">
                        {
                            left.map((content) => {
                                return <li><a href="" className="cursor-pointer">{content}</a></li>
                            })
                        }
                    </ul>
                </div>

                {/* Service Menu */}
                <div>
                    <h2 className="text-lg w-[130px] font-semibold border-b border-dashed border-white pb-2 mb-4">Service Menu</h2>
                    <ul className="space-y-4">
                        {
                            center.map((content) => {
                                return <li><a href="" className="cursor-pointer">{content}</a></li>
                            })
                        }
                    </ul>
                </div>

                <div>
                    <ul className="space-y-4 pt-14">
                        {
                            right.map((content) => {
                                return <li><a href="" className="cursor-pointer">{content}</a></li>
                            })
                        }
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-semibold border-b border-gray-500 pb-2 mb-4">Contact Information</h2>
                    <p className="flex items-center gap-2"><span>&#128205;</span> Skywalk, The Element, 904, Godrej Garden City Rd, Ahmedabad, Gujarat 382481</p>
                    <p className="flex items-center gap-2 mt-2"><span>&#128205;</span> 1148 S Railroad Ave, Bronxville, New York 10708, USA</p>
                    <p className="flex items-center gap-2 mt-2"><span>&#9993;</span> sales@tecoreng.com</p>
                    <p className="flex items-center gap-2 mt-2"><span>&#128222;</span> HR: +91 63527 25452</p>
                    <p className="flex items-center gap-2">Sales: +91 85117 46476</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-10 border-t border-gray-500 pt-4">
                <p>&copy; 2025 by Tecoreng</p>
            </div>
        </footer>
    );
};

export default Footer;
