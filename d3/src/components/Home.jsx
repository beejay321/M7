import React from "react";
import { Container, Card, Form, Col, Row, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getJobsAction, addToFavAction } from "../actions";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => dispatch(getJobsAction()),
  addTofav: (company) => {
    dispatch(addToFavAction(company));
  },
});

class Home extends React.Component {
  state = {
    query: "",
  };

  // componentDidMount = async () => {
  //   this.props.getJobs();
  // };

  render() {
    return (
      <>
        <Container>
          <h1>Jobs</h1>
          <Col>
            <Form inline className="py-4">
              <FormControl type="text" placeholder="Search" value={this.state.query} onChange={(e) => this.setState({ query: e.currentTarget.value.toLowerCase() })} className="mr-sm-2" />
              <Button className="my-4" onClick={this.props.getJobs}>
                Search
              </Button>
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
                        <Button className="my-4" onClick={() => this.props.addTofav(job)}>
                          Favorites
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </div>
              ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
