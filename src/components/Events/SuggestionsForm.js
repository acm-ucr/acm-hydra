import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SuggestionsForm.css"

const SuggestionsForm = () => {
    return (
        <div className="events-suggestionsform-wrapper">
            <form>
                <fieldset>
                    <label id="events-suggestionsform-gridwrapper">
                    <Container className="events-suggestionsform-boostrapwrapper" fluid>
                        <Row>
                            <Col>
                                <div className="events-suggestionsform-name">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="events-suggestionsform-email">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" email="email"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="events-suggestionsform-suggestion">
                                    <label for="suggestion">Suggestion</label>
                                    <textarea id="suggestion" suggestion="suggestion"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="events-suggestionsform-submit">
                                    <button type="button">Submit</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </label>
                </fieldset>
            </form>

        </div>
    )
}
export default SuggestionsForm
