import { useState, useEffect } from "react";
import { Song, Album, Artist } from "../types/interface";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";

//method one
interface DetailComponentProp  extends RouteComponentProps {
    title : string
}

//method one
// interface MyProps {
//     title : string
// }
// type  DetailComponentProp =  MyProps & RouteComponentProps
    

const Details = () => {
  const [song, setSong] = useState<any>({});

  const getSongs = async ({ match }: DetailComponentProp) => {
    const query = match.params;
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      console.log(response);
      let result = await response.json();
      console.log(result);
      setSong(result);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Container>
        {/* <h4>{title}</h4> */}
        <br />
        <Row>
          <Col sm={3} className="px-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body></Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
