import React, { useContext} from "react";
import SideBar from "./SideBar";
import { UserContext } from "../../contexts/user";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";


const Home = () => {

  const { restaurants } = useContext(UserContext);
 
  return (
    <section className="flex gap-6">
      <SideBar />
      <div className="m-3 text-xl text-gray-900 font-semibold">
        <h1>Popular </h1>
        <div className="flex flex-wrap gap-4">
          {restaurants?.map((restaurant) => (
            // return a card for each restaurant
            <Col key={restaurant.id} md={6} className="mb-4">
              <Link to={`/restaurants/${restaurant.id}`}>
              <Card className="card">
                <Card.Img variant="top" src={restaurant.cover_image} />
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          ))}
          </div>
      </div>
    </section>
  );
};

export default Home;