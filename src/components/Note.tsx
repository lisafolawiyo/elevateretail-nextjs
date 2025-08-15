'use client';

import React from 'react';
import parse from 'html-react-parser';
// use the isomorphic version of DOMPurify
import DOMPurify from 'isomorphic-dompurify';
import { stripOuterTags } from '@/lib/utils';
import { Post } from '@/lib/types';
import Link from 'next/link';

const Note = ({ post }: { post: Post }) => {
  const sanitizedHtml = DOMPurify.sanitize(post.content.rendered);

  // const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
  //   day: '2-digit',
  //   month: 'short',
  //   year: 'numeric',
  // });

  return (
    <section className="single-post-section">
      <div className='note-body'>
          <div className="left">
          </div>
          <div className="right">
            {parse(sanitizedHtml)}
            <div className="end-of-note"></div>
          </div>
      </div>
    </section>
  );
};

export default Note;
