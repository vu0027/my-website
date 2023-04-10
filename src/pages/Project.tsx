import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Project = () => {
	const ProjectWrapper = styled.div<{isSmallerScreen?: boolean}>`
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
		<ProjectWrapper isSmallerScreen={isSmallScreen} id="projects">
			<h1>

			Play my Project
			</h1>
		</ProjectWrapper>
	);
};

export default Project;