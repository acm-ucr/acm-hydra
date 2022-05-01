import * as React from "react";
import "../styles/index.css";

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
    margin: "0"
};

// markup
const IndexPage = () => {
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
                        gridTemplateColumns: "300px 300px 300px",
                        gap: "40px",
                        margin: "40px 0",
                    }}>

                    <div style={columnContainer}>
                        <h1 style={column}>Learn</h1>
                        <p>Workshops</p>
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
                        <p>Discord</p>
                        <p>Instagram</p>
                        <p>Instagram</p>
                        <p>Sign up mailing list</p>
                    </div>

                    <footer>
                        <p>footer</p>
                    </footer>

                </div>
            </div>
        </main>
    );
};

export default IndexPage;
