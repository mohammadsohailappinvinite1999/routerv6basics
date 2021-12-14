import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Param = () => {
  //we can access state passed into link or by usenavigate in location object given by use location
  const location = useLocation();

  //gives us param object
  const params = useParams();

  console.log(location, params);

  return (
    <div>
      {location.state ? (
        <h2>Location State: {JSON.stringify(location.state)}</h2>
      ) : (
        <h2>Location State: {JSON.stringify(location.state)}</h2>
      )}
      <h2>Params : {JSON.stringify(params)}</h2>
      <Link to="/">back</Link>
    </div>
  );
};

export default Param;
