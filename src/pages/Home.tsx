import styled from "@emotion/styled";

const Home = () => {
	const BackgroundImage = styled.div`
		background-image: url(${process.env.PUBLIC_URL}/images/background.jpg);
		background-position: center;
		background-size: cover;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		opacity: 0.6;
	`;

  const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    height: 100%;
  `;

  const ProfileContainer = styled.div`
		margin-left: 50px;
		margin-right: 50px;
		width: 50%;

		h1 {
			font-size: 48px;
			font-weight: 800;
			margin-bottom: 30px;
			text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
		}

		p {
			font-size: 24px;
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

  const ProfileText = styled.div`
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.5;
  `;

	const ProfilePicture = styled.img`
		height: "10%";
		border-radius: 50%;
		animation: moveUpDown 2s ease-in-out infinite alternate;
		animation: rotate 0.5s ease-in-out infinite alternate;

		@keyframes rotate {
			from {
				transform: rotateZ(-1deg);
			}
			to {
				transform: rotateZ(1deg);
			}
		}
	`;

  return (
    <HomeContainer id='home' className="home-container">
      <BackgroundImage />
      <ProfileContainer>
			<ProfilePicture
          src={process.env.PUBLIC_URL + "/images/profile-photo.png"}
          alt="Profile"
        />
      </ProfileContainer>
      <ProfileContainer>
        <h1>Welcome to My Portfolio</h1>
        <p style={{ fontSize: "24px" }}>
          Here you can find examples of my work and learn more about me.
        </p>
        <ProfileText>
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
        </ProfileText>
      </ProfileContainer>
    </HomeContainer>
  );
};

export default Home;
