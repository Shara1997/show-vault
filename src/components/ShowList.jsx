import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdImageNotSupported } from "react-icons/md";
import Header from "./Header";

const ShowList = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <h2 className="showlist-heading">Available Shows</h2>
      <div className="showlist-container">
        <ul className="col-4 shows">
          {show.map((show) => (
            <li key={show.show.id} className="showList-items">
              <img
                className="show-img"
                src={
                  show.show.image ? (
                    show.show.image.medium
                  ) : (
                    <MdImageNotSupported />
                  )
                }
                alt={show.show.name}
              />
              {show.show.name} -{" "}
              {show.show.network ? show.show.network.name : "Unknown"}
              <br />
              <p>Language: {show.show.language}</p>
              <Link to={`/show/${show.show.id}`}>
                <button className="info-btn">More Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ShowList;
