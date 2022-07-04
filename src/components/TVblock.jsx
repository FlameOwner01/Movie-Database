import { useState } from "react";
import { Container } from "semantic-ui-react";
import Modal from "./Pages/Modal.jsx";

const base_url = "http://image.tmdb.org/t/p/";
const poster_size = "w300";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const TVblock = ({
  title,
  overview,
  vote_average,
  backdrop_path,
  poster_path,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container className="container-2">
        <Modal
          className="modal"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title={title}
          overview={overview}
          vote_average={vote_average}
          backdrop_path={backdrop_path}
          poster_path={poster_path}
          id={id}
        ></Modal>
      </Container>
      <div className="tvblock1">
        <img
          onClick={() => setIsOpen(true)}
          className="poster-img"
          src={
            poster_path
              ? `${base_url}${poster_size}${poster_path}`
              : unavailable
          }
          alt={id}
        />
        <h3 className="block-title">{title}</h3>
        <div className="bottom">
          <h4 style={{ paddingBottom: "15%" }}>Rating: </h4>
          <button className="rating">{vote_average}</button>
        </div>
      </div>
    </>
  );
};

export default TVblock;
