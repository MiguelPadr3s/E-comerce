import React,{useState} from "react";
import Title from "./Title";
import { faqItems } from "../constant/data";
import { RiAddLine } from "@remixicon/react";

const FaqSec = () => {
    const [openId, setOpenId] = useState(faqItems[0].id ?? null);
    const handleClick = (id) => {
        setOpenId(openId === id ? null : id);
    };
    return (
    
    <section className="section pb-[90px] lg:mb-[160px]">
        <div className="container">
            <div className="grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-blue-100 rounded-lg md:p-10">
                {/* Title */}
                <Title 
                    title='Frequently Asked Questions' 
                    text='Still you have any questions? Contact our Team via support@Nexis.com' 
                    link='See All FAQ’s' 
                />

                {/* Question Wrapper */}
                <div className="border border-blue-300 grid p-6">
                    {faqItems.map(item => (
                        // Question
                        <div className="space-y-3.5" key={item.id}>
                            {/* title */}
                            <div className="flex items-center justify-between gap-12 border-b border-b-blue-400 pb-3 md:px-5">
                                <h4 className="text-lg sm:text-xl">{item.title}</h4>
                                <button className="w-10 h-10 bg-blue-300 flex items-center justify-center aspect-square rounded-lg hover:bg-blue-200 transition-colors" onClick={() => handleClick(item.id)}>
                                    <RiAddLine 
                                        className={`transition ${
                                        openId === item.id ? "rotate-45" : ""
                                        }`} 
                                        size={30}
                                    />
                                </button>
                            </div>
                            {/* text */}
                            <div className={`max-h-0 overflow-y-hidden ${
                                openId === item.id ? "max-h-[200px]" : ""
                                }`}
                            >
                                <p className="px-5 pb-3">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};

export default FaqSec;