import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            Sawah is a travel platform dedicated to helping you discover and explore the world's most beautiful destinations. 
            Whether you're looking for local gems or planning an international adventure, we make the process seamless and enjoyable. 
            Our mission is to provide travelers with the tools they need to plan the perfect trip, ensuring every journey is a memorable one. 
            From insightful travel guides to personalized recommendations, Sawah is here to guide you every step of the way.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
