import React from "react";
import Filter from "./Filter";
import { Row, Col } from "react-bootstrap"

const Calendar = () => {
    return <div>
        <Row className="w-3/6">
            <Col>
                <Filter topic={"General Meeting"} />
            </Col>
            <Col>
                <Filter topic={"Professional Development"} />
            </Col>
            <Col>
                <Filter topic={"Socials"} />
            </Col>
            <Col>
                <Filter topic={"Workshops"} />
            </Col>
        </Row>
    </div>;
};

export default Calendar;
