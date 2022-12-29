import React from 'react';
import "./header.css";
import Button from '../../atoms/button/index';
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header>
            <h1>GREEN PLANET</h1>
            <h2>Stop the climate change</h2>
            <Link
                to="charts"
                spy={true}
                smooth={true}
                offset={800}
                duration={500}
                delay={500}
            >
                <Button text={"Learn More"} />
            </Link>
        </header>
    )
}

export default Header
