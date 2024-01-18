import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


// import Images
import image1 from '../../assets/workouts/workout (1).jpg'
import image2 from '../../assets/workouts/workout (2).jpg'
import image3 from '../../assets/workouts/workout (3).jpg'
import image4 from '../../assets/workouts/workout (4).jpg'
import image5 from '../../assets/workouts/workout (5).jpg'



export default function Workouts() {
  return (
    <div className='workouts'>
        <div className='workouts__wrapper'>
            <h1 className='workouts__title'>Choose From These Workouts</h1>
            <GridExample/>
        </div>
    </div>
  )
}


function GridExample() {
  return (
    <Row xs={1} md={3} className="g-4">
        <Col>

          <Card className='workout__card'>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='workout__card'>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>

          <Card className='workout__card'>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='workout__card'>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
        <Col>

          <Card className='workout__card'>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>

        <Card className='workout__card'>
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>

    </Row>
  );
}

