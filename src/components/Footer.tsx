'use client';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

function Footer() {
      //WhatsApp
    const WhatsAppNumber = 2348051351800;
    let whatsAppMsg = "";
    whatsAppMsg = 'Hi%2C+I%27m+interested+in+your+services';


  return (
    <div className='footer'>
      <div className='footer-inner'>
        <div className='top'>
          <div className='left'>
            <h1>Let's start your next big win</h1>
            <Link
            href={'/contact'}
            className="link-btn1 f-link-btn">
              <div className='btn-wrap'>
                  <div className='btn-left'>
                      <span>Start a project</span>
                  </div>
                  <div className='btn-right'>
                      <div className='btn-right-inner'>
                          <FontAwesomeIcon icon={faArrowRight} className="btn-icon btn-icon1" />
                          <FontAwesomeIcon icon={faArrowRight} className="btn-icon btn-icon2" />
                      </div>
                  </div>
              </div>
          </Link>
          </div>
          <div className='right'>
            <div className='f-top-right-item'>
              <h3 className='f-top-right-item-header'>Explore</h3>
              <ul>
                <li>
                  <Link href={'/'} className='f-navitem-link'>
                    <div className='f-nav-item'>
                      <span className='d-navitem-text'>Home</span>
                      <div className='item-bottom-bar'/>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={'/services'} className='f-navitem-link'>
                    <div className='f-nav-item'>
                      <span className='d-navitem-text'>Services</span>
                      <div className='item-bottom-bar'/>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={'/notes'} className='f-navitem-link'>
                    <div className='f-nav-item'>
                      <span className='d-navitem-text'>Notes</span>
                      <div className='item-bottom-bar'/>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={'/contact'} className='f-navitem-link'>
                    <div className='f-nav-item'>
                      <span className='d-navitem-text'>Contact</span>
                      <div className='item-bottom-bar'/>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='f-top-right-item last-item'>
              <h3 className='f-top-right-item-header'>Get in touch</h3>
              <ul>
                <li>
                  <a href="tel:+2348062181323" className='f-navitem-link'>
                    <div className='f-nav-itemB'>
                      <div className='f-nav-itemB-left'>
                        <FontAwesomeIcon icon={faPhone} className="f-nav-itemB-left-icon" />
                      </div>
                      <div className='f-nav-itemB-right'>
                        <span className='d-navitem-text'>08062181323</span>
                        <div className='item-bottom-bar'/>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@elevateretailagency.com" className='f-navitem-link'>
                    <div className='f-nav-itemB'>
                      <div className='f-nav-itemB-left'>
                        <FontAwesomeIcon icon={faEnvelope} className="f-nav-itemB-left-icon" />
                      </div>
                      <div className='f-nav-itemB-right'>
                        <span className='d-navitem-text'>hello@elevateretailagency.com</span>
                        <div className='item-bottom-bar'/>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${WhatsAppNumber}?text=${whatsAppMsg}`}
                      target="_blank" className='f-navitem-link'>
                    <div className='f-nav-itemB'>
                      <div className='f-nav-itemB-left'>
                        <FontAwesomeIcon icon={faWhatsapp} className="f-nav-itemB-left-icon" />
                      </div>
                      <div className='f-nav-itemB-right'>
                        <span className='d-navitem-text'>Chat us on WhatsApp</span>
                        <div className='item-bottom-bar'/>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className='middle'>
          <div className='middle-img'>
            <Image 
            src="/images/crafting.png" 
            alt="Crafting since 2019" 
            fill
            style={{ objectFit: 'contain' }} // 'cover' or 'contain'
            />
          </div>
        </div>
        <div className='bottom'>
          <div className='left'>
            <Image 
            src="/images/logo-white.png" 
            alt="Elevate Retail Logo" 
            fill
            style={{ objectFit: 'contain' }} // 'cover' or 'contain'
            />
          </div>
          <div className='right'>
            <span className='footer-bottom-item'>Elevate Retail 2025</span>
            <span className='divider'></span>
            <span className='footer-bottom-item'>All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer