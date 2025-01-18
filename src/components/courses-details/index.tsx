import BreadcrumbCoursesDetails from '@/common/breadcrumb/BreadcrumbCoursesDetails';
import MarqueeOne from '@/common/MarqueeOne';

// import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CoursesDetailsArea from './CoursesDetailsArea';
import RelatedCourses from './RelatedCourses';
import HeaderThree from '@/layouts/headers/HeaderThree';
import FooterThree from '@/layouts/footers/FooterThree';

const CoursesDetails = () => {
  return (
    <>
    <HeaderThree />
    <BreadcrumbCoursesDetails />
    <CoursesDetailsArea />
    {/* <RelatedCourses /> */}
    {/* <MarqueeOne style_2={true} /> */}
    <FooterThree />      
    </>
  );
};

export default CoursesDetails;