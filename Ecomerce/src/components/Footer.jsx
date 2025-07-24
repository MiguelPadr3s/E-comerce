import React from "react";
import { contactInfo, footerLists, socialIcons } from "../constant/data";

const Footer = () => {
    return <footer className="pt-14 pb-8 bg-blue-200">
        <div className="container">
            {/* Footer top */}
            <div className="grid gap-10 sm:grid-cols-2">
                {/* Footer brand */}
                <div className="">
                    {/* Footer logo */}
                    <div className="">
                        <img 
                            src="/images/Nexis.png" 
                            alt="footer logo" 
                            width={150} 
                            height={50}
                        />
                    </div>
                    {/* Links */}
                    <div className="">
                        {contactInfo.map(item => (
                            <a href="#" key={item.id}>
                                {<item.icon />}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Footer list */}
                {footerLists.map(item => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <ul className="">
                            {item.links.map((link,index)=>(
                                <li key={index}>
                                    <a href="#">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {/* Social profile */}
                <div className="">
                    <p>Social Profiles</p>
                    <div>
                        {socialIcons.map(icon => (
                            <button className="">
                                <a href="#">{<icon.icon />}</a>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* Footer bottom */}
            <p>&copy; {new Date().getFullYear()}. Nexis Technology. All rights reserved.</p>
        </div>
    </footer>;
};

export default Footer;