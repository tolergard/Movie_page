import styled from "styled-components";
import PropTypes from "prop-types";

const MovieDetailsOverlay = styled.div`
  margin-top: 1rem;
  position: relative;
  display: inline-block;
  width: 100%;
`;

const MovieBackdrop = styled.img`
  width: 100%;
`;

const MovieContent = styled.div`
  position: absolute;
  bottom: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 10px 20px;
  border-radius: 32% 48% 33% 34% / 65% 34% 66% 35%;
`;

const yearAndText = {
  fontSize: "20px",
  fontFamily: "Lilita One",
  paddingRight: "30px",
  paddingLeft: "30px",
  margin: "20px",
};

function SelectedItemView({ item }) {
  return (
    <MovieDetailsOverlay>
      <MovieBackdrop
        src={`http://image.tmdb.org/t/p/original${item.backdrop_path}`}
        alt={`Backdrop for ${item.title}`}
      />
      <MovieContent>
        <h2>{item.title}</h2>
        <p style={yearAndText}>{new Date(item.release_date).getFullYear()}</p>
        <p style={yearAndText}>{item.overview}</p>
      </MovieContent>
    </MovieDetailsOverlay>
  );
}

SelectedItemView.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
  }).isRequired,
};

export default SelectedItemView;
