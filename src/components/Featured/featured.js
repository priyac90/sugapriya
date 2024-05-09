import React from "react";
import "./featured.scss";
import { MoreVert } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          {/* Adjust size to fit your layout */}
          <CircularProgress
            variant="determinate"
            value={70}
            size={120}
            thickness={5}
            // Display the value inside the CircularProgress
            text={`${70}%`}
          />
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount">$420</p>
      </div>
    </div>
  );
};

export default Featured;
