import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <section className="footer" data-sr-id="8">
        <div className="footer-text">
            <h1 className="logo-footer">D&D Beyond</h1>
            <h3 className="est-footer">Est. 2022</h3>
        </div>
        <div className="github">
            <Link href="https://github.com/dmcarver01611">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </ Link>
            <Link href="https://github.com/sankeatan">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </ Link>
            <Link href="https://github.com/Wngartman">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </ Link>
            <Link href="https://github.com/Hank5050">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
            </ Link>
        </div>
        </section>
    </footer>
  );
};

export default Footer;
