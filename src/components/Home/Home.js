import * as React from "react";
import { FaDiscord, FaInstagram, FaSlack, FaMedium, FaYoutube} from "react-icons/fa";
import { SiGmail} from "react-icons/si"
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
import "./Home.css";

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

    const switchWorkshop = (direction) => {
        if (direction === "left") {
            if (workshopInd > 0)
                setWorkshopInd(workshopInd - 1);
        } else if (direction === "right") {
            if (workshopInd < workshops.length - 1)
                setWorkshopInd(workshopInd + 1);
        }
    };

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

                    <div className="columnContainer">
                        <h1 className="column">Learn</h1>

                        <h2>{workshop.title}</h2>
                        <p>{workshop.lead}</p>
                        <p>{workshop.description}</p>
                        <p>{workshop.location} {workshop.date} {workshop.time}</p>

                        <div style={{ display: "flex", gap: 5 }}>
                            <BsArrowLeftSquare onClick={() => switchWorkshop("left")} size={30}/>
                            <BsArrowRightSquare onClick={() => switchWorkshop("right")} size={30}/>
                        </div>
                    </div>

                    <div className="columnContainer">
                        <h1 className="column">Inspire</h1>
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

                    <div className="columnContainer">
                        <h1 className="column">Connect</h1>
                        <div style={{fontSize: 1 em}}>
                            <FaDiscord/>
                            <FaInstagram/>
                            <FaSlack/>
                            <FaMedium/>
                            <SiGmail/>
                            <FaYoutube/>
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
