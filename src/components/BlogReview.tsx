"use client";
import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from "react";
import { NoteCategory, Post } from '@/lib/types';

const BlogReview = ({posts, categories,}: {posts: Post[], categories: NoteCategory[];}) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null);

    const otherPostsWithFormattedDates = posts.map(post => ({
        ...post,
        formattedDate: new Date(post.date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        }),
    }));

  return (
    <div className='blog-review'>
        <div className='head'>
            <div className='left'>
                <div className='subject-tag'>
                    <span></span><h3 className='tag-text'>Our notes</h3>
                </div>
                <h1 className='text'>Latest from our design studio</h1>
               <Link
                href={'/notes'}
                className="link-btn1 blog-review-btn">
                    <div className='btn-wrap'>
                        <div className='btn-left'>
                            <span>View all notes</span>
                        </div>
                        <div className='btn-right'>
                            <div className='btn-right-inner'>
                                <FontAwesomeIcon icon={faArrowRight} className="btn-icon btn-icon1" />
                                <FontAwesomeIcon icon={faArrowRight} className="btn-icon btn-icon2" />
                            </div>
                        </div>
                    </div>
                </Link>          
            </div>
            <div className='right'>
                <div className='slide-control'>
                    <div ref={prevRef} className='control-item control-item-left'>
                        <FontAwesomeIcon icon={faArrowLeft} className="control-item-icon" />
                    </div>
                    <div ref={nextRef} className='control-item control-item-right'>
                        <FontAwesomeIcon icon={faArrowRight} className="control-item-icon" />
                    </div>
                </div>
            </div>
        </div>
        <div className='notes-container'>
                {/* <div className='note'></div>
                <div className='note'></div>
                <div className='note'></div>
                <div className='note'></div> */}
                <div className='container-wrap'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        autoplay={{ delay: 3000 }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // Swiper needs the refs to be attached BEFORE init
                            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                        }}
                        loop={true}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            // when window width is >= 1440px
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className='container-inner'
                    >
                        {otherPostsWithFormattedDates.map((post) => {
                            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                            // Get first category ID that is not 21
                            const firstCategoryId = post.categories.find(catId => catId !== 21);


                            // Find category name from categories array
                            const categoryName = categories.find(cat => cat.id === firstCategoryId)?.name || '';
                            return (
                                <SwiperSlide key={post.id} className='note-wrap'>
                                    <Link href={`/note/${post.slug}`} className="note-card">
                                        <div className='note'>
                                            <div 
                                            className='image-wrap'
                                            style={{
                                                backgroundImage: `url('${featuredImage || "/post.png"}')`,
                                            }} />
                                            <div className='note-detail'>
                                                <div className='subject-tag'>
                                                    <span></span><h3 className='tag-text'>{categoryName && categoryName}</h3>
                                                </div>
                                                <h1 className='text'>{post.title.rendered}</h1>
                                                {/* <p className='except'>
                                                    {post.excerpt.rendered}
                                                </p> */}
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
        </div>
    </div>
  );
};

export default BlogReview