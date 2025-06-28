import React from "react";
import "./styles/home.scss";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Elevate Retail | Elevate Your Brand with High-Performance Web & E-commerce Solutions",
  description: "We design and develop custom websites and e-commerce platforms that help retail and service businesses in Lagos and beyond stand out, sell more, and scale fast.",
};

export default function Home() {
  return (
    <section className="home-hero-section">
      <div className="page-wrap">
        <div className="header">
          <div className="logo-wrap">
            <Image 
            src="/images/logo-white.png" 
            alt="Elevate Retail Logo" 
            fill
            style={{ objectFit: 'contain' }} // 'cover' or 'contain'
            />
          </div>
        </div>
        <div className="page-body">
          <div className="left">
            <h1>We're enhancing your experience</h1>
            <p className="title-desc">
              We're redesigning our website to serve you better.
              For general enquiries, please fill out the form to get in touch.
            </p>
            <div className="socials">
              <h3>Follow us</h3>
              <div className="social-icons">
                <a
                className="icon-link-wrap"
                href="https://www.instagram.com/elevate_retail/"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a
                className="icon-link-wrap"
                href="https://www.linkedin.com/company/elevate-retaiil/"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
                <a
                className="icon-link-wrap"
                href="https://www.youtube.com/channel/UCYYrfW-yHvn3n2nNmb5MhNA"
                target="_blank"
                rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
