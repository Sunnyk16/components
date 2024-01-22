import React from "react";
import '../components/TeamCard.css'

function TeamCard({ image, title, info, courseStart, price }) {
  return (
    <div>
      <div>
        <div className="card my-4 mx-2  }">
          <div className="card-body p-2 card-h ">
            <img src={image} className=" h-50 w-100 rounded" />
            <h5 className="card-title">{title}</h5>
            <p className="card-text lead">{info}</p>
            <p>{courseStart}</p>
            <p className="text-center fs-5"> Only at ₹ {price}/-</p>
            <hr></hr>
            <center>
              <button className="btn btn-dark ">know more</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
