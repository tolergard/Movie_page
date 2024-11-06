import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { background-color: rgba(255, 119, 142, 0.539); }
  50% { background-color: rgba(237, 216, 110, 0.582); }
`;

const BlinkingImage = styled.div`
  width: 50%;
  display: flex;
  position: relative;

  img {
    width: 100%;
    display: flex;
    border-radius: 32% 48% 33% 34% / 65% 34% 66% 35%;
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    animation: ${blink} 1.2s linear infinite;
    border-radius: 32% 48% 33% 34% / 65% 34% 66% 35%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function HomeContent() {
  return (
    <>
      <TextContainer>
        <h1>Welcome to Movie App</h1>
        <p className="intro-text">
          Stay up-to-date with the <span>hottest movies</span> hitting the
          screens, dive into the buzz around this week
          <span> top TV shows</span>, or embark on a search for your all-time
          <span> favorite movies</span> and TV series. The <span>choice</span>{" "}
          is yours!
        </p>
      </TextContainer>
      <ImageContainer>
        <BlinkingImage>
          <img src="src/assets/bio.jpeg" alt="" />
        </BlinkingImage>
      </ImageContainer>
    </>
  );
}

export default HomeContent;
