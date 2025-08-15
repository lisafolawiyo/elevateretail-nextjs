"use client";
import React from 'react';
import Link from 'next/link';
import { NoteCategory } from '@/lib/types';

const NoteCategories = ({
  categories,
}: {
  categories: NoteCategory[];
}) => {

    const special: { all?: NoteCategory; uncat?: NoteCategory } = {};
    const others: NoteCategory[] = [];

    for (const cat of categories) {
        if (cat.id === 21) {
            special.all = cat;
        } else if (cat.id === 1) {
            special.uncat = cat;
        } else {
            others.push(cat);
        }
    }
  
  return (
    <div className='header'>
        <div className='page-title'>
        <span></span><h3 className='title-text'>Notes</h3>
        </div>
        {   special.all &&
            <Link href={`/notes?category=${special.all.slug}`} className='category-item'>
            <h1>explore all</h1><span className='count'>{special.all.count}</span>
            </Link>
        }
        {others.map((category) => {
        return (
            <Link key={category.id} href={`/notes?category=${category.slug}`} className='category-item'>
            <h1>{category.name}</h1><span className='count'>{category.count}</span>
            </Link>
        );
        })}
    </div>
  );
};

export default NoteCategories