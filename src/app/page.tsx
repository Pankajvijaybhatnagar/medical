import Homethree from "@/components/homes/home-3"; 
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";
// meta data

export const metadata: Metadata = {
	title: "Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
	return (
		<Wrapper>
			<Homethree />    
		</Wrapper>
	);
};

export default index;
