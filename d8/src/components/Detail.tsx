import { useState, useEffect } from "react";
import { Song, Album, Artist } from "../types/interface";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";

//method one
interface DetailComponentProp extends RouteComponentProps<Params> {
  title: string;
}
interface Params {
  album: string;
}

//method one
// interface MyProps {
//     title : string
// }
// type  DetailComponentProp =  MyProps & RouteComponentProps

const Details = ({ match }: DetailComponentProp) => {
  const [song, setSong] = useState<any>("");

  useEffect(() => {
    const getSongs = async () => {
      const id = match.params;
      try {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${match.params.album}`);
        console.log(response);
        let result = await response.json();
        console.log(result);
        setSong(result);
      } catch (error) {
        console.log("error");
      }
    };
    getSongs();
  }, []);

  return (
    <>
      <Container>
        {/* <h4>{title}</h4> */}
        <br />
        <Row>
          <Col className="px-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={song.cover} />
              <Card.Body>
                <Card.Title>{song.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Details;
