export default ProjectTile = (props) => {
  return (
    <div className="home-home-projectTile">
      {/* <h3 className="home-home-projectName"> {props.name} </h3> */}
      <a href={props.link} target="_blank">
        <img
          src={props.image}
          style={{ width: "100%" }}
          className="home-home-projectImage"
        />
      </a>
    </div>
  );
};
