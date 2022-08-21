import React from "react";

const Topic = ({ topic, backgroundColor, textColor }) => {
	return (
		<div>
			<div
				style={{
					justifySelf: "center",
					width: "max-content",
					height: "max-content",
					borderRadius: "1.0rem",
					borderWidth: "2px",
					borderColor: "black",
					paddingTop: "0.75rem",
					paddingBottom: "0.75rem",
					// paddingRight: "0.25rem",
					// paddingLeft: "0.25rem",
					backgroundColor: backgroundColor,
					color: textColor,
					boxShadow: "8px -6px black",
				}}
			>
				<div
					style={{
						fontSize: "1.125rem",
						fontWeight: "700",
						fontFamily: "lexend",
						paddingTop: "0.75rem",
						paddingBottom: "0.75rem",
					}}
				>
					{topic}
				</div>
			</div>
		</div>
	);
};

export default Topic;
