import React from "react";
import { Container, Card, Form, Col, Row, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getJobsAction } from "../actions";


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => dispatch(getJobsAction()),
});

class Home extends React.Component {
  state = {
    jobs: {
      results: [],
    },
    query: "",
    isLoading: false,
  };

  // componentDidMount = async () => {
  //   this.props.getJobs()  };

  // fetchData = async (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     isLoading: true,
  //   });
  //   try {
  //     let response = await fetch(`https://remotive.io/api/remote-jobs?limit=20`);
  //     //   console.log(response);
  //     if (response.ok) {
  //       let data = await response.json();
  //       console.log(data.jobs);
  //       this.setState({
  //         jobs: { results: data.jobs },
  //         isLoading: false,
  //       });
  //     } else {
  //       this.setState({
  //         isError: true,
  //       });
  //     }
  //   } catch (error) {
  //     this.setState({
  //       isError: true,
  //     });
  //   }
  // };

  // componentDidUpdate = async (previousProps, previousState) => {
  //   if (previousState.jobs !== this.state.jobs) {
  //     this.fetchData();
  //   }
  // };

  render() {
    return (
      <>
        <Container>
          <h1>Jobs</h1>
          <Col>
            <Form inline className="py-4" onSubmit={this.props.getJobs()}>
              <FormControl type="text" placeholder="Search" value={this.state.value} onChange={(e) => this.setState({ query: e.currentTarget.value.toLowerCase() })} className="mr-sm-2" />
            </Form>
          </Col>
          {this.props.jobs.isLoading && (
            <div>
              <p>Loading....</p>
            </div>
          )}
          <Row>
            {this.props.jobs.searchResults
              .filter((job) => job.title.toLowerCase().indexOf(this.state.query) !== -1)
              .map((job) => (
                <div className="py-4">
                  <Card style={{ width: "50rem" }}>
                    <Row>
                      <Col>
                        <Card.Body style={{ color: "black" }}>
                          <Link to={`/companyDetail/${job.company_name}`}>
                            <Card.Text>{job.company_name}</Card.Text>
                          </Link>
                          <Card.Text>{job.title}</Card.Text>
                          <Card.Text>{job.category}</Card.Text>
                        </Card.Body>
                      </Col>
                      <Col>
                        {/* <Button className="my-4" onClick={() => this.props.addTofav(job)}>
                          Favorites
                        </Button> */}
                      </Col>
                    </Row>
                  </Card>
                </div>
              ))}
          </Row>
        </Container>
        {/* <job/> */}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
