'use client';

import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import { Post } from '@/lib/types';

const Note = ({ post }: { post: Post }) => {
  const sanitizedHtml = DOMPurify.sanitize(post.content.rendered);

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
