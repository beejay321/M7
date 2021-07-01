import { Component, ChangeEvent, FormEvent } from "react";
import { Button, Form, FormControl, Col, Container, Row } from "react-bootstrap";
import SearchResults from "./SearchResults";
import { useState, useEffect } from "react";
import { Song } from "../types/interface";



function Search() {
  const [query, setQuery] = useState<string>("");
  const [songs, setSongs] = useState<Song[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const getSongs = async (query: string) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      console.log(response);
      let result = await response.json();
      console.log(result);
      setSongs(result.data);
    } catch (error) {
      console.log("error");
    }
  };
  

  return (
    <div>
      <Container>
        <Form className="py-4">
          <Row>
            <Col sm={9}>
              <FormControl type="text" placeholder="Search" value={query} 
              onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())} 
              className="mr-sm-2" />
            </Col>
            <Col>
              <Button onClick={() => getSongs(query)}>Search</Button>
            </Col>
          </Row>
        </Form>
        <br />
        <SearchResults title="My Songs" songs={songs} />
      </Container>
    </div>
  );
}

export default Search;
