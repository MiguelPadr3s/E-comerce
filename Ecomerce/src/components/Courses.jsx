import React from 'react'
import Title from './Title';
import { coursesSecItems } from '../constant/data';

//motion
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Courses = () => {
    return (
        <section className="section">
            <motion.div variants={variants.staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="container">
                {/* Title */}
                <Title 
                    title="Our Courses" 
                    text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in." 
                    link="View All" 
                />

                {/* card wrapper */}
                <div className="grid gap-5 lg:grid-cols-2 mt-8 lg:mt-16">
                    {coursesSecItems.map((item) => (
                        //card
                        <motion.div variants={variants.fadeInUp} className="bg-blue-200 p-7 lg:p-10 rounded-[10px]" key={item.id}>
                            {/* img */}
                            <div className="">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    width={560} 
                                    height={266} 
                                    className="w-full h-full object-cover rounded-[10px]"
                                    />
                            </div>
                            {/* Content */}
                            <div className="mt-6">
                                {/* tags */}
                                <div className="flex items-center flex-wrap gap-2.5">
                                    {item.tags.map((tag,index) => (
                                        <span className="border border-blue-800 p-2 rounded-md bg-blue-100 mr-2" key={index}>
                                            {tag.tag}
                                        </span>
                                    ))}
                                    <p className="ml-auto font-medium">{item.instructor}</p>
                                </div>
                                {/* meta data */}
                                <div className="my-6 space-y-1.5">
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                            {/* btn */}
                            <button className="bg-white-97 w-full p-3.5 rounded-md hover:text-blue-500 border border-white-97 hover:border-blue-500 transition">
                                Get it Now!
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Courses;