import React from 'react';
import Button from '../../atoms/button/index';
import "./footer.css"


const Footer = () => {
    return (
        <footer>
            <p>© 2022 Andrei Vlad All Rights Reserved.</p>
            <div className='icons'>
                <Button text="About" link={"https://www.linkedin.com/in/andreivladpaul/"} />
                <Button text="GitHub" link={"https://github.com/andreivladpaul?tab=repositories"} />
            </div>
        </footer>
    )
}

export default Footer;
