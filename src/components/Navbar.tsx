'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavlistRef = useRef<HTMLDivElement>(null);
  const topNavRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='nav-container'>
      <div
      ref={topNavRef} 
      className={`top ${scrolled ? 'top-scrolled' : 'top-no-scroll'} ${isOpen && 'top-scrolled'}`}>
        <div className='left'>
          <Link href={'/'} className="link-wrap">
            <div className="nav-logo-wrap">
              <Image 
              src="/images/logo-white.png" 
              alt="Elevate Retail Logo" 
              fill
              style={{ objectFit: 'contain' }} // 'cover' or 'contain'
              />
            </div>
          </Link>
        </div>
        <div className='center'>
          <ul className='desktop-navlist'>
            <li>
              <Link href={'/'} className='d-navitem-link'>
                <div className='d-nav-item'>
                  <span className='d-navitem-text'>Home</span>
                  <div
                  className={`item-bottom-bar ${
                    pathname === '/' && 'w-full'}`}/>
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/services'} className='d-navitem-link'>
                <div className='d-nav-item'>
                  <span className='d-navitem-text'>Services</span>
                  <div
                  className={`item-bottom-bar ${
                    pathname === '/services' && 'w-full'}`}/>
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/notes'} className='d-navitem-link'>
                <div className='d-nav-item'>
                  <span className='d-navitem-text'>Notes</span>
                  <div
                  className={`item-bottom-bar ${
                    pathname === '/notes' && 'w-full'}`}/>
                </div>
              </Link>
            </li>
           <li>
              <Link href={'/contact'} className='d-navitem-link'>
                <div className='d-nav-item'>
                  <span className='d-navitem-text'>Contact</span>
                  <div
                  className={`item-bottom-bar ${
                    pathname === '/contact' && 'w-full'}`}/>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className='right'>
          <Link
          href={'/contact'}
          className="link-btn1 d-nav-btn">
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
          <div 
            className="nav-menu-bar"
            onClick={toggleMenu}>
                <button 
                    className={`button is-text ${isOpen ? 'is-opened' : ''}`}
                    id="menu-button">
                        <div className="button-inner-wrapper">
                            <span className="icon menu-icon"></span>
                        </div>
                </button>
        </div>
        </div>
      </div>
      <div
      ref={mobileNavlistRef} 
      className={`bottom ${isOpen ? 'translate-y-0' : 'translate-y--700'}`}>
        <div className='nav-subject-tag'>
            <span></span><h3 className='tag-text'>Have a look around...</h3>
        </div>
        <ul className='mobile-navlist'>
          <li>
            <Link href={'/'} className='m-navitem-link' onClick={toggleMenu}>
              <span className='m-navitem-text'>Home</span>
            </Link>
          </li>
          <li>
            <Link href={'/services'} className='m-navitem-link' onClick={toggleMenu}>
              <span className='m-navitem-text'>Services</span>
            </Link>
          </li>
          <li>
            <Link href={'/notes'} className='m-navitem-link' onClick={toggleMenu}>
              <span className='m-navitem-text'>Notes</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'} className='m-navitem-link' onClick={toggleMenu}>
              <span className='m-navitem-text'>Contact</span>
            </Link>
          </li>
        </ul>
        <div className='m-btn-wrap'>
          <Link
            href={'/contact'}
            className="link-btn1 m-nav-btn"
            onClick={toggleMenu}>
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
      </div>
    </div>
  )
}

export default Navbar