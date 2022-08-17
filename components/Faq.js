import { withRouter } from "next/router";
import React from "react";

let colorCount = 0;

const bodyColors = [
	{
		backgroundColor: '#82aaff',
	},
	{
		backgroundColor: '#c792ea',
	},
	{
		backgroundColor: '#ffd700',
	},
	{
		backgroundColor: '#c3e88d',
	},
	{
		backgroundColor: '#ff5370',
	},
	{
		backgroundColor: '#f07178',
	},
	{
		backgroundColor: '#89ddff',
	},
	{
		backgroundColor: '#f78c6c',
	},
	{
		backgroundColor: '#80cbc4',
	},
	{
		backgroundColor: '#da70d6',
	},
]

const infoArray = [
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`
	},
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`
	},
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`
	},
	{
		question: `quam quisque id diam vel quam elementum 
		pulvinar etiam non quam lacus suspendisse faucibus interdum`,
		answer: `Lorem ipsum dolor sit amet, consectetur 
		adipiscing elit, sed do eiusmod tempor incididunt 
		ut labore et dolore magna aliqua. Ullamcorper sit 
		amet risus nullam eget felis eget nunc lobortis. 
		Ultrices dui sapien eget mi. Etiam tempor orci eu lobortis 
		elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper.`
	},
];

const FaqItem = (props) => {

  if(colorCount == bodyColors.length)
  {
	colorCount = 0;
	console.log("Color reset to 0!");
  }

  return (
	<>
		<div className="accordion-item">
			<h2 className="accordion-header" id={`heading${props.index}`}>
				<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.index}`} aria-expanded="true" aria-controls={`collapse${props.index}`}>
					{props.element.question}
				</button>
			</h2>
			<div id={`collapse${props.index}`} className="accordion-collapse collapse" aria-labelledby={`heading${props.index}`}>
				<div className="accordion-body" style={bodyColors[colorCount++]}>
					{props.element.answer}
				</div>
			</div>
		</div>
	</>
	
  )
}

const Faq = () => {
	return (
		<>
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>

			<div className="accordion accordion-flush" id="accordionExample">
				{infoArray.map((element, index) => (
					<FaqItem element={element} key={index} index={index}/>
				))}				
			</div>
		</>
	)
};

export default Faq;
