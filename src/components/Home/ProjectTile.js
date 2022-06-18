import React from "react";
import "./ProjectTile.css"

const ProjectTile = (props) => {
    return (
      <div className="home-projectTile-wrapper">
        {/* <h3 className="home-home-projectName"> {props.name} </h3> */}
        <a href={props.link} target="_blank">
          <img
            src={props.image}
            style={{ width: "100%" }}
            className="home-projectTile-projectImage"
          />
        </a>
      </div>
    );
  };

  export default ProjectTile