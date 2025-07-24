import React from "react";
import { contactInfo, footerLists, socialIcons } from "../constant/data";

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Footer = () => {
    return <footer className="pt-14 pb-8 bg-blue-200">
        <motion.div variants={variants.staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="container">
            {/* Footer top */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
                {/* Footer brand */}
                <motion.div variants={variants.fadeInUp}>
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
                </motion.div>
                {/* Footer list */}
                {footerLists.map(item => (
                    <motion.div variants={variants.fadeInUp} key={item.id} className="space-y-3">
                        <p className="text-lg font-semibold text-blue-800">{item.title}</p>
                        <ul className="space-y-2.5">
                            {item.links.map((link,index)=>(
                                <li key={index}>
                                    <a href="#" className="hover:text-blue-600 transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
                {/* Social profile */}
                <motion.div variants={variants.fadeInUp}>
                    <p className="text-lg font-semibold text-blue-800">Social Profiles</p>
                    <div className="flex mt-5 gap-3">
                        {socialIcons.map(icon => (
                            <button className="secondary-btn p-3.5 bg-white-97 hover:bg-blue-200 hover:shadow-lg transition-all">
                                <a href="#">{<icon.icon />}</a>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
            {/* Footer bottom */}
            <motion.p variants={variants.fadeInUp} className="mt-16 text-center lg:mt-20">
                &copy; {new Date().getFullYear()}. Nexis Technology. All rights reserved.
            </motion.p>
        </motion.div>
    </footer>;
};

export default Footer;