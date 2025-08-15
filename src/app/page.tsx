import React, { Suspense } from "react";
import { Metadata } from "next";
import { getPostCategories, getPosts } from '@/lib/wordpress/post';
import HomeHeroSection from "@/components/HomeHeroSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import OurWorkSection from "@/components/OurWorkSection";
import OurExpertise from "@/components/OurExpertise";
import TextMarquee from "@/components/TextMarquee";
import BlogReview from "@/components/BlogReview";
import { NoteCategory } from "@/lib/types";
import Skeleton from "@/components/Skeleton";

export const metadata: Metadata = {
  title: "Web design, branding, and digital marketing agency in Lagos | Elevate Retail",
  description: "We help businesses stand out, connect, and grow through creative design, strategic marketing, and powerful digital solutions",
};

export default async function Home() {
  const categories: NoteCategory[] = await getPostCategories();
  
  const post_data = await getPosts("", 21, "", parseInt("1",10), 4,);
  const posts = post_data.posts;
  return (
    <div className="home-page">
      <HomeHeroSection />
      <WhoWeAreSection />
      <OurWorkSection />
      <OurExpertise />
      <TextMarquee />
      <Suspense fallback={<Skeleton/>}>
        <BlogReview posts={posts} categories={categories}/>
      </Suspense>
    </div>
  );
}
