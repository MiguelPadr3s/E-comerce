import React from 'react'
import Title from './Title';
import { coursesSecItems } from '../constant/data';
const Courses = () => {
    return (
        <section className="section">
            <div className="container">
                {/* Title */}
                <Title title="Our Courses" text="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in." link="View All" />
                {/* card wrapper */}
                <div className="">
                    {coursesSecItems.map((item) => (
                        //card
                        <div className="">
                            {/* img */}
                            <div className="">
                                <img src={item.img} alt={item.title} width={560} height={266} />
                            </div>
                            {/* Content */}
                            <div className=""></div>
                            {/* btn */}
                            <button className=""></button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;