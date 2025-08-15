import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web design, branding, and digital marketing agency in Lagos | Our Services | Elevate Retail",
  description: "We help businesses stand out, connect, and grow through creative design, strategic marketing, and powerful digital solutions",
};

function Services() {
  return (
    <div className='service-page'>
        <div className='service-page-inner'>
            <div className='hero'>
                <div className='top'>
                    <div className='left'>
                        <div className='subject-tag'>
                            <span></span><h3 className='tag-text'>services</h3>
                        </div>
                        <h1 className='hero-text1'>We&apos;re a creative and digital marketing agency with expertise.</h1>
                    </div>
                    <div className='right'></div>
                </div>
                <div className='bottom'>
                    <div className='left'></div>
                    <div className='right'>
                        <h2>We bring our passion for good design to brave brands and deliver something you can shout about.</h2>
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>Website</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>
                            Custom, responsive websites on WordPress, WooCommerce, Shopify or hybrid, plus reliable maintenance to keep them running flawlessly.
                            </h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>Hybrid Website</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>Wordpress</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>03</span>
                                    <span className='list-item-name'>Shopify</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>04</span>
                                    <span className='list-item-name'>Maintenance</span>
                                </div>                           
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>Branding</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>We define your brand&apos;s strategy, then design logos, colors, and typography that make it unforgettable.</h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>Strategy</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>Identity Design</span>
                                </div>                         
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>Campaigns</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>Goal-driven campaigns with posters, 3D animation, video editing, and analytics that prove results.</h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>Strategy</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>Poster Design</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>03</span>
                                    <span className='list-item-name'>3D Animation</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>04</span>
                                    <span className='list-item-name'>Video Editing</span>
                                </div> 
                                <div className='list-item'>
                                    <span className='list-count'>05</span>
                                    <span className='list-item-name'>Analytics & Reports</span>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
                <div className='service-item'>
                    <div className='service-item-head'>
                        <h1 className='service-name'>eCommerce</h1>
                    </div>
                    <div className='service-item-body'>
                        <div className='service-item-left'>
                            <h3>Seamless selling with email marketing, product & order management, marketing tools, and analytics.</h3>
                        </div>
                        <div className='service-item-right'>
                            <div className='service-list-container'>
                                <div className='list-item'>
                                    <span className='list-count'>01</span>
                                    <span className='list-item-name'>SEO</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>02</span>
                                    <span className='list-item-name'>Marketing Tools</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>03</span>
                                    <span className='list-item-name'>Newsletters</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>04</span>
                                    <span className='list-item-name'>Payment Gateways</span>
                                </div>
                                <div className='list-item'>
                                    <span className='list-count'>05</span>
                                    <span className='list-item-name'>Analytics & Reports</span>
                                </div>                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services