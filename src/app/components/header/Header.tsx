"use client";
import Image from "next/image";
import "./Header.css";
import { useState } from "react";

const Header = () => {
    const [openPopups, setOpenPopups] = useState({
        login: false,
        register: false,
        destinations: false,
        expensePlanner: false,
        contact: false,
    });

    return (
        <header className="default">
            <Image src="/assets/imgs/1.jpg" alt="s" height={800} width={1600} className="img"/>
            <h1 className="title">SAWAH</h1>
            <div>
                <button id="login" className="btn_type_A">LOGIN</button>
                <button id="register" className="btn_type_B">REGISTER</button>
            </div>
            <nav className="navigation">
                <ul>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Expense Planner</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;