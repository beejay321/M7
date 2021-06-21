import React from "react";
import { Link } from "react-router-dom";

import { Component } from "react";
import { Container, ListGroup, Card } from "react-bootstrap";

class ShowDetail extends Component {
  state = {
    company: [],
  };

  componentDidMount = async () => {
    let companyName = this.props.match.params.companyName;
    console.log(this.props.match.params.companyName);

    this.setState({
      isLoading: true,
    });

    try {
      const response = await fetch(`https://remotive.io/api/remote-jobs?company_name=` + companyName);
      //   console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("why arent you console logging");
        console.log(data.jobs);
        this.setState({
          company: data.jobs,
          isError: false,
          isLoading: false,
        });
      } else {
        console.log("we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    console.log("Not AGAIN");
    console.log(this.props.title);

    console.log(this.state.MovieToShow);
    return (
      <>
        {this.state.company && (
          <Container>
            <h1 className="py-4"> DETAILS </h1>
            <Card
            // style={{ width: "18rem" }}
            >
              {this.state.company.map((job) => (
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              ))}
            </Card>
          </Container>
        )}
      </>
    );
  }
}

export default ShowDetail;
