import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="footer">Copyright {currentYear} Nick Myers.</footer>
    )
}

export default Footer;