import { useState } from "react";

export const filters = [
  "All Posts",
  "Engineering",
  "Startups",
  "Career",
  "Opinion",
  "Fiction",
];

export const  GlassFilterMarquee=()=> {
 

  // Duplicate the list so the track can loop seamlessly


  return (
    <>
      {filters.map((item, index) => (
    <button key={index} className="jashu">
      {item}
    </button>
  ))}
    </>
  );
}