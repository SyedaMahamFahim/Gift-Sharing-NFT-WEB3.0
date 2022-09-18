import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ name, url }) => {
  return (
   
      <Link
        to={url}
        className="nav-link text-dark"
        style={{
          marginRight: "40px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {name}
      </Link>
    
  );
};

export default MenuItem;
