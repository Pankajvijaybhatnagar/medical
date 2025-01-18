

import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
// import FooterOne from "@/layouts/footers/FooterOne";
// import HeaderOne from "@/layouts/headers/HeaderOne";
import CoursesDetailsTwoArea from "./CoursesDetailsTwoArea";
import RelatedCourses from "../courses-details/RelatedCourses";
import BreadcrumbCoursesDetailsTwo from "@/common/breadcrumb/BreadcrumbCoursesDetailsTwo";
import HeaderThree from "@/layouts/headers/HeaderThree";
import FooterThree from "@/layouts/footers/FooterThree";



const CoursesDetailsTwo = () => {
	return (
		<>
			<HeaderThree />
			<BreadcrumbCoursesDetailsTwo />
			<CoursesDetailsTwoArea />
			{/* <RelatedCourses />
			<MarqueeOne style_2={true} /> */}
			<FooterThree />
		</>
	);
};

export default CoursesDetailsTwo;
