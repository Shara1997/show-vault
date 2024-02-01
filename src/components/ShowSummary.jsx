import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdImageNotSupported } from "react-icons/md";

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="showSummary">
        {show ? (
          <div className="summary-container">
            <img
              className="summary-img"
              src={show.image ? show.image.original : <MdImageNotSupported />}
              alt={show.name}
            />
            <h1 className="show-name">{show.name}</h1>
            <p className="show-summary">
              {show.summary
                ? show.summary.replace(/<[^>]*>?/gm, "")
                : "No summary available"}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ShowSummary;
