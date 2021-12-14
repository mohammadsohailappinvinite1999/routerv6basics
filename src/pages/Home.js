import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link
          to="/123"
          state={{
            hello: "state sended",
          }}
        >
          To Param Page With State
        </Link>
      </div>
      <div>
        <Link to="/123">To Param Page With No State</Link>
      </div>
    </div>
  );
};

export default Home;
