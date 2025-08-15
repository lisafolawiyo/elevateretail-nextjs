'use clent';
import React from 'react';
import Link from 'next/link';

const TextMarquee: React.FC = () => {
  return (
    <div className="center-content">
      <div className="wrapper">
        <div className="marquee-text rotate-left fadeout-horizontal">
          <div className="marquee-text-track">
            <Link href={'/contact'} className="link-item"><p>Let's work together.</p></Link>
            <Link href={'/contact'} className="link-item"><p>Let's work together.</p></Link>
            {/* <p>CSS</p>
            <p>TailwindCSS</p>
            <p>Accessibility</p>
            <p>React</p>
            <p>Angular</p> */}
            <Link href={'/contact'} className="link-item"><p aria-hidden="true">Let's work together.</p></Link>
            <Link href={'/contact'} className="link-item"><p aria-hidden="true">Let's work together.</p></Link>
            {/* <p aria-hidden="true">CSS</p>
            <p aria-hidden="true">TailwindCSS</p>
            <p aria-hidden="true">Accessibility</p>
            <p aria-hidden="true">React</p>
            <p aria-hidden="true">Angular</p> */}
          </div>
        </div>
        <div className="marquee-text rotate-right fadeout-horizontal">
          <div
            style={
              {
                "--direction": "reverse",
                "--speed": "20s",
              } as React.CSSProperties
            }
            className="marquee-text-track">
            <Link href={'/contact'} className="link-item"><p>Let's work together.</p></Link>
            <Link href={'/contact'} className="link-item"><p>Let's work together.</p></Link>
            {/* <p>CSS</p>
            <p>TailwindCSS</p>
            <p>Accessibility</p>
            <p>React</p>
            <p>Angular</p> */}
            <Link href={'/contact'} className="link-item"><p aria-hidden="true">Let's work together.</p></Link>
            <Link href={'/contact'} className="link-item"><p aria-hidden="true">Let's work together.</p></Link>
            {/* <p aria-hidden="true">CSS</p>
            <p aria-hidden="true">TailwindCSS</p>
            <p aria-hidden="true">Accessibility</p>
            <p aria-hidden="true">React</p>
            <p aria-hidden="true">Angular</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextMarquee;
