// footer/page.jsx
import React from "react";
import "./footer.css";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import usa from "../../public/assets/United States of America (US).png";
import Amex from "../../public/assets/Amex.png";
import Mastercard from "../../public/assets/Mastercard.png";
import ApplePay from "../../public/assets/ApplePay.png";
import GooglePay from "../../public/assets/Gpay.png";
import Paypal from "../../public/assets/Paypal.png";
import ShopPay from "../../public/assets/ShopPay.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="contact-section">
          <hr />
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p className="email">customercare@mettamuse.com</p>
          <hr />
          <div className="currency-section">
            <h4>CURRENCY</h4>
            <p className="currency">
              <Image src={usa} alt="United States of America (US)" /> {""} &diams;
              USD
            </p>
          </div>

          <hr />
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <div className="footer-link-left">
            <h4 style={{ fontSize: "1.5rem", lineHeight: "1.8rem" }}>
              mettà muse
            </h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div className="footer-link-right">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="social-and-payment">
          <div className="social-links">
            <h4>FOLLOW US</h4>
            <div>
              <span>
                <FaInstagram
                  style={{
                    height: "32px",
                    width: "32px",
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    padding: "5px",
                  }}
                />
              </span>
              <span>
                <FaLinkedinIn
                  style={{
                    height: "32px",
                    width: "32px",
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    padding: "5px",
                  }}
                />
              </span>
            </div>
          </div>
          <div className="payment-methods">
            <h4>mettà muse ACCEPTS</h4>
            <div className="payment-icons">
              <Link href="https://pay.google.com">
                <Image src={GooglePay} alt="Google Pay" />
              </Link>
              <Link href="https://www.mastercard.com">
                <Image src={Mastercard} alt="Mastercard" />
              </Link>
              <Link href="https://www.paypal.com/">
                <Image src={Paypal} alt="PayPal" />
              </Link>
              <Link href="https://www.americanexpress.com/en-in/">
                <Image src={Amex} alt="Amex" />
              </Link>
              <Link href="https://www.apple.com/apple-pay/">
                <Image src={ApplePay} alt="Apple Pay" />
              </Link>
              <Link href="https://shop.app/shop-pay">
                <Image src={ShopPay} alt="ShopPay" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
