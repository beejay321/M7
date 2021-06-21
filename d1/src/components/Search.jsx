import React from "react";
import { Container,  Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


class Search extends React.Component {
  state = {
    jobs: [],
  };

  componentDidMount = async () => {
    // will ALWAYS happen once
    console.log("THIS IS COMPONENTDIDMOUNT");
    this.fetchData();
  };

  fetchData = async () => {
    try {
      let response = await fetch("https://remotive.io/api/remote-jobs");
    //   console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data.jobs);
        this.setState({
          jobs: data.jobs,
        });
      } else {
        this.setState({
          isError: true,
        });
      }
    } catch (error) {
      // we'll probably end up here in a network error
      this.setState({
        isError: true,
      });
    }
  };

  //   componentDidUpdate = async (previousProps, previousState) => {
  //     if (previousProps.selectedMovie !== this.props.selectedMovie) {
  //       this.fetchData();
  //     }
  //   };

  render() {
    return (
      <>
       <Container>
          <h1>Jobs</h1>
          <Card>
            {this.state.jobs.map((job) => (
              <Card.Body style={{ color: "black" }}>
                <Link to = {`/companyDetail`}>
                    <Card.Title>{job.company_name}</Card.Title>
                </Link>
                <Card.Text>{job.title}</Card.Text>
                <Card.Text>{job.category}</Card.Text>
              </Card.Body>
            ))}
          </Card>
        </Container>
        {/* <job/> */}
      </>
    );
  }
}

export default Search;
