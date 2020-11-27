import React from "react";
import "../../App.css";

// Display 404 Page not Found

export const NoMatch = () => {
  return (
    <div className="error">
        404
        <p className="message">Could not find the page you're looking for</p> 
    </div>
  );
};

export default NoMatch;
