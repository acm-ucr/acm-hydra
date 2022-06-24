import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ButtonGroup, Container } from 'react-bootstrap'

const CalendarPage2 = () => {
  return (
    <div>
        <h4>Calendar Page 2</h4>
        <Container>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="" /> */}
                <Card.Body>
                    <Card.Title>Event Name</Card.Title>
                    
                    <Card.Text>
                        Event Date: {} <br/>
                        Event Time: {} <br/>
                        Event Location: {}
                    </Card.Text>

                    <ButtonGroup vertical size='sm'>
                        <Button variant="primary">Add to Gcal</Button>
                        <Button variant="primary">Download iCal</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default CalendarPage2