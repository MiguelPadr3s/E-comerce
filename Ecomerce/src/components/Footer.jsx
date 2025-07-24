import React from "react";
import { contactInfo, footerLists, socialIcons } from "../constant/data";

const Footer = () => {
    return <footer className="pt-14 pb-8 bg-blue-200">
        <div className="container">
            {/* Footer top */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
                {/* Footer brand */}
                <div>
                    {/* Footer logo */}
                    <div>
                        <img 
                            src="/images/Nexis.png" 
                            alt="footer logo" 
                            width={150} 
                            height={50}
                        />
                    </div>
                    {/* Links */}
                    <div className="mt-8 space-y-4">
                        {contactInfo.map(item => (
                            <a href="#" key={item.id} className="flex items-center gap-1.5 hover:text-blue-600 hover:underline transition-colors">
                                {<item.icon />}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Footer list */}
                {footerLists.map(item => (
                    <div key={item.id} className="space-y-3">
                        <p className="text-lg font-semibold text-blue-800">{item.title}</p>
                        <ul className="space-y-2.5">
                            {item.links.map((link,index)=>(
                                <li key={index}>
                                    <a href="#" className="hover:text-blue-600 transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {/* Social profile */}
                <div className="">
                    <p className="text-lg font-semibold text-blue-800">Social Profiles</p>
                    <div className="flex mt-5 gap-3">
                        {socialIcons.map(icon => (
                            <button className="secondary-btn p-3.5 bg-white-97 hover:bg-blue-200 hover:shadow-lg transition-all">
                                <a href="#">{<icon.icon />}</a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* Footer bottom */}
            <p className="mt-16 text-center lg:mt-20">
                &copy; {new Date().getFullYear()}. Nexis Technology. All rights reserved.
            </p>
        </div>
    </footer>;
};

export default Footer;