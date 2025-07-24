import React,{useState} from "react";
import { RiCloseLine,RiMenuLine } from "@remixicon/react";
import { navItems } from "../constant/data";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return ( 
        <header className="w-full py-5">
            <div className="container flex items-center justify-between border-b border-b-white-95 pb-5">
                {/* Logo */}
                <a href="#">
                    <img src="/images/Nexis.png" alt="" width={170} height={50} />
                </a>

                {/* Mobile Menu */}
                <nav className={`navbar ${isOpen ? "active" : ""}`}>
                    {/* close menu */}
                    <button className="absolute top-8 right-8" onClick={handleClick}>
                        <RiCloseLine size={30}/>
                    </button>

                    {/* List */}
                    <ul className="space-y-5 text-center">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href="#" className="text-lg font-medium hover:text-blue-800 transition-colors">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Login btn */}
                    <button className="primary-btn mt-12 max-w-40 w-full">Login</button>

                </nav>

                {/* menu btn */}
                <button className="lg:hidden" onClick={handleClick}>
                    <RiMenuLine />
                </button>

                {/* Lg Menu */}
                <div className="max-lg:hidden flex items-center gap-10">
                    {/* List */}
                    <ul className="flex gap-10">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a href="#" className="hover:text-blue-300 transition-colors font-medium text-lg">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Lg login btn */}
                    <button className="max-lg:hidden primary-btn">Login</button>
                </div>

            </div>
        </header>
    );
};

export default Header