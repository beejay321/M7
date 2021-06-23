import React from "react";
import { Container, Card, Form, Col, Row, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import { addTofav } from '../actions'

// const mapStateToProps = state => state

// const mapDispatchToProps = (dispatch) => ({
//   addTofav: (job) => {
//     dispatch(addToFavAction(job))
//   }
// })

class Home extends React.Component {
  state = {
    jobs: {
      results: [],
    },
    query: "",
  };

  componentDidMount = async () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      let response = await fetch(`https://remotive.io/api/remote-jobs?search=${this.state.query}`);
      //   console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data.jobs);
        this.setState({
          jobs: { results: data.jobs },
        });
      } else {
        this.setState({
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isError: true,
      });
    }
  };

  componentDidUpdate = async (previousProps, previousState) => {
    if (previousState.jobs !== this.state.jobs) {
      this.fetchData();
    }
  };

  render() {
    return (
      <>
        <Container>
          <h1>Jobs</h1>
          <Col>
            <Form inline className="py-4">
              <FormControl type="text" placeholder="Search" value={this.state.value} onChange={(e) => this.setState({ query: e.currentTarget.value.toLowerCase() })} className="mr-sm-2" />
            </Form>
          </Col>
          <Row>
            {this.state.jobs.results
              .filter((job) => job.title.toLowerCase().indexOf(this.state.query) !== -1)
              .map((job) => (
                <div className="py-4">
                  <Card style={{ width: "50rem" }}>
                    <Row>
                      <Col>
                        <Card.Body style={{ color: "black" }}>
                          <Link to={`/companyDetail/${job.company_name}`}>
                            <Card.Title>{job.company_name}</Card.Title>
                          </Link>
                          <Card.Text>{job.title}</Card.Text>
                          <Card.Text>{job.category}</Card.Text>
                        </Card.Body>
                      </Col>
                      <Col>
                        <Button className="my-4" onClick={() => this.props.addTofav(job)}>
                          Favorites
                          {/* <i className="bi bi-heart-fill"></i> */}
                        </Button>
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

export default Home;
