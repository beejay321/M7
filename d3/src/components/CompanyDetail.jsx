import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";


class ShowDetail extends Component {
  state = {
    company: {},
    jobs: [],
  };

  componentDidMount = async () => {
    console.log(this.props.match.params.companyName);

    try {
      const response = await fetch(`https://remotive.io/api/remote-jobs?company_name=${this.props.match.params.companyName}`);
      if (response.ok) {
        let data = await response.json();
        console.log("why arent you console logging");
        console.log(data);
        console.log(data.jobs);
        this.setState({
          companyy: data,
          jobs: data.jobs,
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
        <Container>
          <h3 className="my-4"> {this.props.match.params.companyName} </h3>

          {this.state.jobs.map((job) => (
            <div className="py-3">
              <Card style={{ width: "40rem" }}>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.job_type}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                  {/* <Card.Text><div dangerouslySetInnerHTML={{ __html: job.description }}></div></Card.Text> */}
                  {/* <Card.Text>{job.url}</Card.Text> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </Container>
      </>
    );
  }
}

export default (ShowDetail);
