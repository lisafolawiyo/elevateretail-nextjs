import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Skeleton from '@/components/Skeleton';
import { getPostsByCategories, getSinglePost } from '@/lib/wordpress/post';
import Note from '@/components/Note';
import { stripOuterTags } from '@/lib/utils';
import RelatedNotes from '@/components/RelatedNotes';


export const metadata: Metadata = {
  title: "Elevate Retail",
  description: "art of fashion.",
};

const SingleNote = async ({ params, }: {params: Promise<{slug: string}>;}) => {
    const slug = (await params).slug;
    const post = await getSinglePost(slug);
    const relatedPosts = await getPostsByCategories(post.categories,1,10);
  if (!post) {
    return notFound();
  }
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  // Remove the current post from the relatedPosts array by ID
//   const filteredRelatedPosts = relatedPosts.posts.filter((p: { id: number; }) => p.id !== post.id);

  return (
    <div className='page-single-note'>
        <div className='header'>
            <div 
            className='note-thumbnail'
            style={{
                backgroundImage: `url('${featuredImage || "/post.png"}')`,
            }}></div>
            <div className='subject'>
                <div className='subject-tag'>
                    <span></span><h3 className='tag-text'>5 min read</h3>
                </div>
                <span className='title'><h1>{stripOuterTags(post.title.rendered)}</h1></span>
            </div>
            <div className='tag'>
            </div>
        </div>
        <div className='note-container'>
            <Note post={post}/>
            <Suspense fallback={<Skeleton/>}>
                {/* <RelatedPosts 
                relatedPosts = {filteredRelatedPosts}
            /> */}
            </Suspense>  
        </div>
        <RelatedNotes relatedPosts={relatedPosts.posts}/>
    </div>
  )
}

export default SingleNote