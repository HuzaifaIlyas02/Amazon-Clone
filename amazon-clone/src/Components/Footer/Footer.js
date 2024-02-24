// Footer.js
import React from "react";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <div className="footer">
      {/* First section */}
      <div className="footer-section">
        <h4 className="footer-heading">Get to Know Us</h4>
        <p className="footer-link">Careers</p>
        <p className="footer-link">Amazon Newsletter</p>
        <p className="footer-link">About Amazon</p>
        <p className="footer-link">Accessibility</p>
        <p className="footer-link">Sustainability</p>
        <p className="footer-link">Press Center</p>
        <p className="footer-link">Investor Relations</p>
        <p className="footer-link">Amazon Devices</p>
        <p className="footer-link">Amazon Science</p>
      </div>

      {/* Second section */}
      <div className="footer-section">
        <h4 className="footer-heading">Make Money with Us</h4>
        <p className="footer-link">Sell products on Amazon</p>
        <p className="footer-link">Sell on Amazon Business</p>
        <p className="footer-link">Sell apps on Amazon</p>
        <p className="footer-link">Become an Affiliate</p>
        <p className="footer-link">Advertise Your Products</p>
        <p className="footer-link">Self-Publish with Us</p>
        <p className="footer-link">Host an Amazon Hub</p>
      </div>

      {/* Third section */}
      <div className="footer-section">
        <h4 className="footer-heading">Amazon Payment Products</h4>
        <p className="footer-link">Amazon Business Card</p>
        <p className="footer-link">Shop with Points</p>
        <p className="footer-link">Reload Your Balance</p>
        <p className="footer-link">Amazon Currency Converter</p>
      </div>

      {/* Fourth section */}
      <div className="footer-section">
        <h4 className="footer-heading">Let Us Help You</h4>
        <p className="footer-link">Amazon and COVID-19</p>
        <p className="footer-link">Your Account</p>
        <p className="footer-link">Your Orders</p>
        <p className="footer-link">Shipping Rates & Policies</p>
        <p className="footer-link">Returns & Replacements</p>
        <p className="footer-link">Manage Your Content and Devices</p>
        <p className="footer-link">Amazon Assistant</p>
        <p className="footer-link">Help</p>
      </div>

      {/* Bottom footer */}
      <div className="bottom-footer">
        <span>Conditions of Use</span>
        <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
};

export default Footer;
