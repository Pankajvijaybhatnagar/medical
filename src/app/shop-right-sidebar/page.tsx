import React from 'react';
import Wrapper from '@/layouts/Wrapper'; 
import ShopRightSidebar from '@/components/shop-right-sidebar';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Shop Right Sidebar - CBS College of Nursing - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <ShopRightSidebar />
    </Wrapper>
  );
};

export default index;