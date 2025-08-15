import React from 'react';

function HomeHeroSection() {
  return (
    <div className='home-hero-container'>
        <div className='inner'>
            <video
                autoPlay
                muted
                loop
                playsInline
                className="video-bg dekstop-bg"
            >
                <source src="/videos/shape-showreel-2024_looping-v3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video
                autoPlay
                muted
                loop
                playsInline
                className="video-bg mobile-bg"
            >
                <source src="/videos/showreel-2024-portrait_cropped.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content">
                <div className='subject-tag'>
                    <span></span><h3 className='tag-text'>Hiya, we&apos;re Elevate Retail</h3>
                </div>
                <h1 className='text'>A web design, branding and eMarketing agency</h1>
            </div>
        </div>
    </div>
  )
}

export default HomeHeroSection