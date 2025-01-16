 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Contact from '@/components/contact';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Contact - Cbs Nursing - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;