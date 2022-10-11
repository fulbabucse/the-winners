import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="bg-emerald-100">
          <img src={logo} alt={name} />
        </figure>
        <div className="card-body text-emerald-400 w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl font-semibold ">{name}</h1>
            <h4>Total Quiz: {total}</h4>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/topics/${id}`}>
              <button className="btn btn-sm btn-info rounded-md font-semibold bg-emerald-400 text-white ">
                Start Test
                <FontAwesomeIcon
                  className="mx-1"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
