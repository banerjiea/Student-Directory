import React from "react";
import { Link } from "react-router-dom";

const Denied = () => {
  return (
    <div className="denied">
      <div className="container py-4">
        <Link className="btn btn-primary mr-2" to="/">
          Back to Home
        </Link>
        <div className="text-center">
          <h1 className="display-1">Sorry! Access denied.</h1>
        </div>
      </div>
    </div>
  );
};

export default Denied;
