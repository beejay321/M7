import React from "react";
import { Link } from "react-router-dom";

import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addToFavAction } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addTofav: (company) => {
    dispatch(addToFavAction(company));
  },
});


class ShowDetail extends Component {
  state = {
    company :{},
    jobs: [],
  };

  componentDidMount = async () => {
    console.log(this.props.match.params.companyName);

    

    try {
      const response = await fetch(`https://remotive.io/api/remote-jobs?company_name=${this.props.match.params.companyName}`);
      if (response.ok) {
        let data = await response.json();
        console.log("why arent you console logging");
        console.log(data)
        console.log(data.jobs);
        this.setState({
          company: data,
          jobs : data.jobs,
          
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
          <Row className=" d-flex justify-content-between">
            <Col>
              <h3 className="my-4"> {this.props.match.params.companyName} </h3>
            </Col>

            <Col>
              <Button className="my-4" 
              // onClick={() => this.props.addTofav(company)}
              >
                Add To Favorites
                {/* <i className="bi bi-heart-fill"></i> */}
              </Button>
            </Col>
          </Row>
          {this.state.jobs.map((job) => (
            <div className="py-3">
              <Card style={{ width: "80rem" }}>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  {/* <br /> */}
                  {/* <Card.Subtitle className="mb-2 text-muted">{company.company_name}</Card.Subtitle> */}
                  <Card.Subtitle className="mb-2 text-muted">{job.job_type}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                  {/* <Card.Text>{company.description.slice(0, 500) + "...."}</Card.Text> */}
                  <Card.Text>{/* <div dangerouslySetInnerHTML={{ __html: company.description }}></div> */}</Card.Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);