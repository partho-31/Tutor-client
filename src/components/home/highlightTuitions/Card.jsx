import React from "react";

const Card = ({ img, title, sub }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto"
    >
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl w-full h-auto" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">{sub}</h2>
        <p>
          A card component has a figure, a body part and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
