
import HomeFive from '@/components/homes/home-5';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Business Coach - CBS College of Nursing - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <HomeFive />
    </Wrapper>
  );
};

export default index;