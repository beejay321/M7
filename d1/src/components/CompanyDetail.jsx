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
      const response = await fetch(`https://remotive.io/api/remote-jobs?company_name=${this.props.match.params.companyName}`);
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
    return (
      <>
        {/* {this.state.company && ( */}
        <Container>
          <h1 className="py-4"> DETAILS </h1>
          {this.state.company.map((job) => (
            <div className="py-2">
              <Card style={{ width: "50rem" }}>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">{job.company_Name}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{job.job_type}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                  {/* <Card.Text>{job.description.slice(0, 500) + "...."}</Card.Text> */}
                  <Card.Text>
                    <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
                  </Card.Text>
                  <Card.Text>{job.url}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Container>
        {/* )} */}
      </>
    );
  }
}

export default ShowDetail;
