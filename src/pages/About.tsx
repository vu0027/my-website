import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const About = () => {
	const AboutWrapper = styled.div<{isSmallerScreen?: boolean}>`
		height: 100vh;
		padding-top: 140px;
		padding-left: 75px;
		padding-right: 75px;


			h1 {
			font-size: ${prop => prop.isSmallerScreen ? '25px' : '35px'};
			font-weight: 800;
			margin-bottom: 30px;
			text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		}

		p {
			font-size: ${prop => prop.isSmallerScreen ? '15px' : '20px'};
			margin-bottom: 20px;
			line-height: 1.6;
			color: #555;
		}

		a {
			font-weight: 700;
			color: #7b9ce0;
			text-decoration: none;
			position: relative;

			&:hover {
				color: #2c3e50;
				transition: all 0.2s ease-in-out;
			}

			&:before {
				content: "";
				position: absolute;
				width: 100%;
				height: 2px;
				bottom: -5px;
				left: 0;
				background-color: #7b9ce0;
				visibility: hidden;
				transform: scaleX(0);
				transition: all 0.2s ease-in-out;
			}
	`

	const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 700);
    };
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	return (
		<AboutWrapper isSmallerScreen={isSmallScreen} id="about">
			<h1>
			ABOUT ME
			</h1>
			<p>
			I am a skilled software developer with experience in multiple programming languages including Python, C++, Java, JavaScript, Typescript, HTML, CSS, and C#.
			<br/><br/>
			I have worked with various libraries and frameworks including React, Node.js, .NET, and Bootstrap, as well as databases such as MySQL, MongoDB, and Object Relational Database.
			<br/><br/>
			 My professional experience includes working as a Software Development Engineer II at Paycom, where I implemented front-end technical solutions using PHP and jQuery, optimized website usability and accessibility, and generated unit tests for React components using Jest and React Testing Library.
			</p>
		</AboutWrapper>
	);
};

export default About;