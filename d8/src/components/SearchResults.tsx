import { useState } from "react";
import { Song, Album, Artist } from "../types/interface";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SearchResultProps {
  title: string;
  songs: Song[];
}

const SearchResult = ({ title, songs }: SearchResultProps) => {
  return (
    <>
      <h4>{title}</h4>
      <br />
      <Row>
        {songs.map((albumm) => (
          <Col sm={3} key={albumm.id} className="px-3">
            <Link to={`/Detail/${albumm.album.id}`}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={albumm.album.cover} />
                <Card.Body>
                  {/* <Card.Title>{albumm.title.slice(0,20 )}</Card.Title> */}

                  {/* <Button variant="primary">Details</Button> */}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SearchResult;
