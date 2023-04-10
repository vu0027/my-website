import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Home = () => {

  const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
  `;

  const ProfileContainer = styled.div<{ isSmallerScreen?: boolean} >`
		z-index: 1;
		margin: ${prop => prop.isSmallerScreen ? '25px': '70px'};

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

			&:hover:before {
				visibility: visible;
				transform: scaleX(1);
			}
		}
  `;

	const ProfilePicture = styled.img`
		height: 20%;
		animation: moveUpDown 2s ease-in-out infinite alternate;
		animation: rotate 0.5s ease-in-out infinite alternate;

		@keyframes rotate {
			from {
				transform: rotateZ(-0.5deg);
			}
			to {
				transform: rotateZ(0.5deg);
			}
		}
	`;

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
    <HomeContainer id='home' className="home-container">
			{isSmallScreen? '' : (

      <ProfileContainer isSmallerScreen={isSmallScreen}>
			<ProfilePicture
          src={process.env.PUBLIC_URL + "/images/profile.png"}
          alt="Profile"
        />
      </ProfileContainer>
					)
				}
      <ProfileContainer isSmallerScreen={isSmallScreen}>

        <h1>Welcome to My Portfolio</h1>
        <p>
          Here you can find examples of my work and learn more about me.
        </p>
          <p>
            My name is Anh Vu, and I am a Software Developer based in United
            States. I specialize in Front End Development, and I have 2 years of
            experience in the field.
          </p>
          <p>
            Feel free to browse my portfolio and learn more about the projects
            I have worked on. If you have any questions or would like to discuss
            a potential project, please don't hesitate to{" "}
            <a href="https://www.linkedin.com/in/avu229/">contact me</a>.
          </p>
      </ProfileContainer>
    </HomeContainer>
  );
};

export default Home;
