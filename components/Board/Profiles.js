import React from "react";
import Profile from "./Profile";

const arr = [
	{
		Id: "a",
		Name: "Alex Hsieh",
		Pronoun: "He/Him",
		Position: "Membership Chair",
		Image: "",
		Email: "ahsie014@ucr.edu",
		LinkedIn: "https://www.linkedin.com/in/alex-c-hsieh",
		Github: "https://github.com/alexchsieh",
		Bio: `Hey, I’m Alex Hsieh, an incoming 3rd year and your Membership Co-Chair
    for the coming 2022-2023 academic year. I hope to build a mentor-mentee program
    that will help students connect with upperclassman and receive the necessary guidance
    and support to thrive in CS@UCR. Thank you for your support and please reach out if
    you need anything!`,
	},
	{
		Id: "b",
		Name: "Joshua Candelaria",
		Pronoun: "He/Him",
		Position: "Membership Chair",
		Image: "./joshua.png",
		Email: "jcand014@ucr.edu",
		LinkedIn: "https://www.linkedin.com/in/jecndlria/",
		Github: "https://github.com/jecndlria",
		Bio: `I'm Josh, one of your Membership Co-Chairs this year! A few of my
    favorite things are basketball, music, and video games. I hope to create
    better connections between you and your peers and give everyone a safe space
    here at ACM@UCR.`,
	},
	{
		Id: "c",
		Name: "Vinz Angelo Madrigal",
		Pronoun: "He/Him",
		Position: "President",
		Image: "./vinz.jpeg",
		Email: "vmadr010@ucr.edu",
		LinkedIn: "https://www.linkedin.com/in/vinzmadrigal/",
		Github: "https://github.com/mvinzangelo",
		Bio: `Heyo I'm Vinz. I was born in the Philippines but swam to SoCal when I
     was a little boy. I like reading books that are way out of my comprehension
     level and singing songs that are way out of my range. Join ACM to help shape
     the future of CS at UCR, thank you :)`,
	},
	{
		Id: "d",
		Name: "Justin Mazon",
		Pronoun: "He/Him",
		Position: "Vice President",
		Image: "",
		Email: "jmazo002@ucr.edu",
		LinkedIn: "https://www.linkedin.com/in/justin-mazon-b312661a9/",
		Github: "https://github.com/JustintheBox",
		Bio: `Hello! My name is Justin Mazon and I am studying Computer Engineering.
    Some of my interests are computer building, keyboard building, playing guitar, and chess.`,
	},
	{
		Id: "e",
		Name: "David Ryan",
		Pronoun: "He/Him",
		Position: "Event Chair",
		Image: "",
		Email: "dryan011@ucr.edu",
		LinkedIn: "https://www.linkedin.com/in/david-michael-ryan/",
		Github: "https://github.com/davidry777",
		Bio: `I'm from San Diego, CA and I am also a Data Science major at BCOE. I
    do swim workouts on alternative days and I enjoy talking about football,
    tech, and college advice.`,
	},
	{
		Id: "f",
		Name: "Cindy Lee",
		Pronoun: "She/Her",
		Position: "Treasurer",
		Image: "",
		Email: "Clee541@ucr.edu",
		LinkedIn: "https://www.linkedin.com/in/cindy-lee-7a0306183",
		Bio: "Make a short bio for me :)",
	},
	{
		Id: "g",
		Name: "Samarth Srinivasa",
		Pronoun: "He/Him",
		Position: "Industry Outreach Chair",
		Image: "./samarth.png",
		Email: "ssrin027@ucr.edu",
		LinkedIn: "www.linkedin.com/in/samarth-srinivasa",
		Github: "https://github.com/SamarthSrinivasa",
		Bio: `I am a third year data science major at UCR! Contact me if you have
    any questions about talking to industry leaders and companies in the field
    of computer science, or any other questions you might have about ACM! Other
    than School and ACM, I enjoy playing music, chess, and cooking.`,
	},
	{
		Id: "h",
		Name: "Ashley Kim",
		Pronoun: "She/Her",
		Position: "Co-Marketing Chair",
		Image: "./ashley.jpg",
		Email: "akim291@ucr.edu",
		LinkedIn: "www.linkedin.com/in/ashley-kim-838893196",
		Bio: `Hi everyone! I'm Ashley and I'm a 3rd year CS major. My hobbies
    outside of class include digital illustration, making fashion pinterest boards,
    and baking cookies for my friends.`,
	},
	{
		Id: "i",
		Name: "Divyank Shah",
		Pronoun: "He/him",
		Position: "Professional Development Chair",
		Image: "./divyank.jpg",
		Email: "dshah048@ucr.edu",
		LinkedIn: "https://www.linkedin.com/in/divyank-shah/",
		Github: "https://github.com/shahdivyank",
		Bio: `Hey! I'm Divyank and I am a 1st year CS major! I am your professional
    development chair this year and am excited to create new opporuntites for
    everyone! Outside of school I love to talk tech, go on hikes, or take a bike ride!`,
	},
];

export default function Profiles() {
	if (!Array.isArray(arr)) return "results are not array " + typeof arr;

	return (
		<div className='profileGrid grid grid-cols-4 grid-rows-3'>
			{arr.map(function (arrP) {
				return <Profile person={arrP} key={arrP.Id} />;
			})}
		</div>
	);
}
