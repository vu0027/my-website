import styled from "@emotion/styled";

const BackgroundImage = () => {
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

  return (
      <BackgroundImage />
  );
};

export default BackgroundImage;
