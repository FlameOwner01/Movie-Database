import React from "react";
import { useNavigate } from "react-router-dom";

const OVERLAY_STYLE = {
  width: "60vh",
  height: "90vh",
  position: "fixed",
  display: "flex",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000,
};

const base_url = "http://image.tmdb.org/t/p/";
const poster_size = "w500";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const Modal = ({
  open,
  onClose,
  title,
  overview,
  vote_average,
  backdrop_path,
  poster_path,
  id,
}) => {
  if (!open) return null;

  const navigatio = () => {
    onClose();
  };

  return (
    <>
      <div style={OVERLAY_STYLE} className="modal" />
      <div className="modal-div">
        <img
          className="img-style"
          src={
            poster_path
              ? `${base_url}${poster_size}${poster_path}`
              : unavailable
          }
          alt={id}
        />
        <div className="modal-title">
          {title}
        </div>
        <div className="overview">
          Overview: <br />
          {overview}
        </div>

        <button className="close-modal" onClick={() => navigatio()}>
          Close
        </button>
      </div>
    </>
  );
};

export default Modal;
