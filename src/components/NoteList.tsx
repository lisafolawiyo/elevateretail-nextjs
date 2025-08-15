'use client';
import { NoteCategory, Post } from '@/lib/types';
// import { stripOuterTags } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const NoteList = ({posts, categories,}: {posts: Post[], categories: NoteCategory[];}) => {

  const otherPostsWithFormattedDates = posts.map(post => ({
    ...post,
    formattedDate: new Date(post.date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
  }));

  return (
    <div className="notes-wrapper">
      {otherPostsWithFormattedDates.map((post) => {
        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

         // Get first category ID that is not 21
        const firstCategoryId = post.categories.find(catId => catId !== 21);


        // Find category name from categories array
        const categoryName = categories.find(cat => cat.id === firstCategoryId)?.name || '';

        return (
          <Link key={post.id} href={`/note/${post.slug}`} className="note">
            <div
              className="note-thumbnail"
              style={{
                backgroundImage: `url('${featuredImage || "/post.png"}')`,
              }}
            > </div>
            <div className="note-detail">
              <div className='tag'>
                <span></span><h3 className='tag-text'>
                  {categoryName && categoryName}
                </h3>
              </div>
              <h3>{post.title.rendered}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NoteList;
