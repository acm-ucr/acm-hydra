import React from "react";

const Link = ({ name, img, link }) => {
  return (
    <div className="home-link-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {img}
      </a>
    </div>
  );
};

Link.defaultProps = {
  offset: "50% 50%",
};
export default Link;
