import Link from 'next/link';
import React from 'react';
import Image from "next/image";

function OurExpertise() {
  return (
    <div className='expertise-container'>
         <div className='expertise'>
             <div className='top'>
                 <div className='left'>
                    <div className='subject-tag'>
                        <span></span><h3 className='tag-text'>Our expertise</h3>
                    </div>
                    <h1 className='text'>
                        How we take your business to the next level
                    </h1>
                 </div>
                  <div className='right'>
                    <p className='right-text'>We help businesses stand out, connect, and grow through creative design, strategic marketing, and powerful digital solutions.</p>
                  </div>
             </div>
              <div className='bottom'>
                <div className='bottom-wrap'>
                     <Link href={'/'} className="link-item">
                        <div className='item'>
                            <div 
                            className='image-div'
                            style={{
                                backgroundImage: `url('/images/projects/identity.jpg')`
                            }}></div>
                            <span className='service-name'>Brand Identity</span>
                        </div>
                     </Link>
                     <Link href={'/'} className="link-item">
                        <div className='item'>
                            <div 
                            className='image-div'
                            style={{
                                backgroundImage: `url('/images/projects/website.jpg')`
                            }}></div>
                            <span className='service-name'>Websites</span>
                        </div>
                     </Link>
                     <Link href={'/'} className="link-item">
                        <div className='item'>
                            <div 
                            className='image-div'
                            style={{
                                backgroundImage: `url('/images/projects/campaign.jpg')`
                            }}></div>
                            <span className='service-name'>Campaigns</span>
                        </div>
                     </Link>
                     <Link href={'/'} className="link-item">
                        <div className='item'>
                            <div 
                            className='image-div'
                            style={{
                                backgroundImage: `url('/images/projects/ecomm.jpg')`
                            }}></div>
                            <span className='service-name'>eSolutions</span>
                        </div>
                     </Link>
                </div>
              </div>
         </div>
         <div 
        className='testimonial'
        style={{backgroundImage: `url('/images/testimonial.jpg')`}}>
            <div className='inner'>
                <div className='top'>
                    <h1>
                        Elevate retail created something better than I ever
                        could have imagined
                    </h1>
                </div>
                <div className='bottom'>
                    <div className='image-wrap'>
                        <Image 
                        src="/images/ts-square.jpg"
                        className='image'
                        alt="" 
                        fill
                        style={{ objectFit: 'contain' }} // 'cover' or 'contain'
                        />
                    </div>
                    <div className='details'>
                        <h2>Chika Yadiv</h2>
                        <h3>Co-Founder, MildWaters</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurExpertise