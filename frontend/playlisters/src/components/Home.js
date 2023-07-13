import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homediv">
      <img src="p3_playlists.png" alt="" className="homepic" />
      <h1 className="hometxt">
        Welcome To Playlisters <br /> Register To Start Sharing Your Playlists
      </h1>
      {/* <Link to className="getstrbtn"> Get Started </button> */}
      <Link to="/signup" className="getstrbtn">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
