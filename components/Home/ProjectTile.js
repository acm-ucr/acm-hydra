import React from "react";
import "./ProjectTile.css";

const ProjectTile = (props) => {
    return (
        <div className="home-projectTile-wrapper">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img
                    src={props.image}
                    style={{ width: "100%" }}
                    className="home-projectTile-projectImage"
                    alt=""
                />
            </a>
        </div>
    );
};

export default ProjectTile;
