import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {

  const { user, restaurants } = useContext(UserContext)

  console.log(restaurants)
 
  return (
    <div>
      <h1 className="text-center">Welcome @{user && user.username}</h1>
      <Container className="mt-5" fluid>
        <Row>
          {restaurants && restaurants.map(restaurant => (
            <Col key={restaurant.id} md={3} className="mb-4">
              <Link to={`/restaurants/${restaurant.id}`}>
              <Card className="card">
                <Card.Img variant="top" src={restaurant.cover_image} />
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                  <Card.Text>
                    {restaurant.description.substring(0, 50)}...
                  </Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    
  )
}

export default Home