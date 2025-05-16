import React from "react";
import Card from "./Card";
import { Link } from "react-router";

const TuitionFeature = () => {
  const tuitions = [
    {
      img: null,
      title: "First Tuition",
      sub: "Physics",
    },
    {
      img: null,
      title: "Second Tuition",
      sub: "Chemistry",
    },
    {
      img: null,
      title: "Third Tuition",
      sub: "Math",
    },
  ];
  return (
    <div>
    <div className="m-4 p-8 grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {tuitions.map((tuition,index)=> (
            <div key={index}>
                <Card img={tuition.img} title={tuition.title}  sub={tuition.sub} />
            </div>
        ))}
    </div>
        <div className="flex justify-center font-serif mb-7"><Link to="tuitions" className="btn btn-neutral px-7">View All Tuitions</Link></div>
    </div>
  )
};

export default TuitionFeature;
