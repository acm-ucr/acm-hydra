import * as React from "react";
import { FaDiscord, FaInstagram, FaSlack, FaMedium } from "react-icons/fa";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import "./Home.css";

// styles
const columnContainer = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#00d1ff",
    borderRadius: "20px",
    padding: "30px",
};

const column = {
    textAlign: "center",
    margin: "0",
};

const workshops = [
    {
        title: "All about JavaScript",
        lead: "Divyank",
        description: "I love javascript so much. I would love to help others realize how astounding of a language it is",
        date: "2020-01-01",
        time: "12:00",
        location: "ACM Room",
    },
    {
        title: "All about JavaScript v2",
        lead: "Divyank",
        description: "I love javascript so much. I would love to help others realize how astounding of a language it is",
        date: "2020-01-01",
        time: "12:00",
        location: "ACM Room",
    }
];


// markup
const Home = () => {
    let [workshopInd, setWorkshopInd] = React.useState(0);
    let workshop = workshops[workshopInd];

    return (
        <main>
            <title>ACM@UCR</title>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "40px"
                }}>
                <img src="blocks.svg" width={900}></img>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "400px 400px 400px",
                        gap: "40px",
                        margin: "40px 0",
                    }}>

                    <div style={columnContainer}>
                        <h1 style={column}>Learn</h1>

                        <h2>{workshop.title}</h2>
                        <p>{workshop.lead}</p>
                        <p>{workshop.description}</p>
                        <p>{workshop.location} {workshop.date} {workshop.time}</p>

                        <div style={{ display: "flex", gap: 5 }}>
                            <BsArrowLeftSquare onClick={() => setWorkshopInd(workshopInd - 1)} size={30}/>
                            <BsArrowRightSquare onClick={() => setWorkshopInd(workshopInd + 1)} size={30}/>
                        </div>
                    </div>

                    <div style={columnContainer}>
                        <h1 style={column}>Inspire</h1>
                        <p>
                        The Association for Computing Machinery at the University of California,
                        Irvine is a non-profit organization that is dedicated to the advancement of
                        computing and the development of computing-related technologies.
                        </p>
                        <p>
                            <a href="https://www.acm.org/">ACM@UCR</a> is a non-profit organization that is
                        dedicated to the advancement of computing and the development of computing-related
                        technologies.
                        </p>
                    </div>

                    <div style={columnContainer}>
                        <h1 style={column}>Connect</h1>
                        <div style={{fontSize: 50}}>
                            <FaDiscord/>
                            <FaInstagram/>
                            <FaSlack/>
                            <FaMedium/>
                        </div>
                    </div>

                    <footer style={{ textAlign: "center" }}>
                        <p>Web Dev Workshop 2022</p>

                    </footer>

                </div>
            </div>
        </main>
    );
};

export default Home;
