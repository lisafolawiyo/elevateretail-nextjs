import Link from 'next/link';
import React from 'react';
import Image from "next/image";

function OurWorkSection() {
  return (
    <div className='our-work-section'>
        <div className='inner'>
            <div className='header'>
                <div className='head-wrap'>
                    <div className='subject-tag'>
                        <span></span><h3 className='tag-text'>Our work</h3>
                    </div>
                    <h1 className='text'>Take a look at our most recent projects</h1>
                </div>
            </div>
            <section className="product-section">
                <div className="product-grid">
                    <Link href={'/'} className="product-card">
                        <div className="product-image">
                            <Image
                                src={'/images/projects/lfv2.jpg'}
                                alt="Product name"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="product-details">
                            <div className='subject-tag'>
                                <span></span><h3 className='tag-text'>Lisa Folawiyo</h3>
                            </div>
                            <h2 className='text'>Website redesigned for speed and simplicity</h2>
                        </div>
                    </Link>
                    <Link href={'/'} className="product-card">
                        <div className="product-image">
                            <Image
                                src={'/images/projects/skepta.png'}
                                alt="Product name"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="product-details">
                            <div className='subject-tag'>
                                <span></span><h3 className='tag-text'>Idiiche</h3>
                            </div>
                            <h2 className='text'>An identity design that represents individuality, community and the beauty of African heritage.</h2>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    </div>
  )
}

export default OurWorkSection