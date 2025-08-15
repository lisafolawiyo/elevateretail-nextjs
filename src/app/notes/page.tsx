import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { getPostCategories, getPosts } from '@/lib/wordpress/post';
import NoteList from '@/components/NoteList';
import NoteCategories from '@/components/NoteCategories';
import { NoteCategory } from '@/lib/types';
import Skeleton from '@/components/Skeleton';

export const metadata: Metadata = {
  title: "Elevate Retail",
  description: "art of fashion.",
};

export default async function Notes({ searchParams }: {searchParams: Promise<{
  page?: string,
  search?: string,
  category?: string,
  tag?: string
}>}) 
{
    const per_page = 10;
    const { page = "1" } = await searchParams;
    const { search = "" } = await searchParams;
    const { category = ""} = await searchParams;
    const { tag = "" } = await searchParams;

    const categories: NoteCategory[] = await getPostCategories();

    // Find the category whose slug matches the search param
    const matchedCategory = categories.find((cat: NoteCategory) => cat.slug === category);

    // If no match, default to 21
    const categoryId = matchedCategory ? matchedCategory.id : 21;

    const post_data = await getPosts(search, categoryId, tag, parseInt(page,10), per_page,);
    const posts = post_data.posts;
    // const totalPages = post_data.total_pages;



    return (
      <div className='page'>
        {categories.length > 0 && <NoteCategories categories={categories}/>}
        <div className='notes'>
          <Suspense fallback={<Skeleton/>}>
          {posts.length != 0 ? 
            <NoteList posts={posts} categories={categories}/> 
          : <p>No post found</p>}
          </Suspense>
        </div>
      </div>
    );
};