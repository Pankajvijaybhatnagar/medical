 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import NewsDetails from '@/components/news-details';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Blog Details - Cbs Nursing - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <NewsDetails />
    </Wrapper>
  );
};

export default index;