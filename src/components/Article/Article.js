import React from "react";
import {Link} from "react-router-dom";

const Article = () => {
  return(
      <div className="container">
            ARTICLES
          <Link to="/home">Back to home</Link>
      </div>
  );
};

export default Article;