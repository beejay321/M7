import React from "react";
import { Container,  Card, Form, Button, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';


class Home extends React.Component {
  state = {
    jobs: [],
    query:""
  };

  componentDidMount = async () => {
    // will ALWAYS happen once
    console.log("THIS IS COMPONENTDIDMOUNT");
    this.fetchData();
  };

  fetchData = async () => {
    try {
      let response = await fetch(`https://remotive.io/api/remote-jobs
      `);
    //   ?search=${query}
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
          <Form inline>
                <FormControl type="text" placeholder="Search" 
                value = {this.state.value}
                onChange = {(e) => this.setState({query: e.currentTarget.value.toLowerCase()})}
                className="mr-sm-2" 
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
          <Card>
            {this.state.jobs.filter(job =>job.title.toLowerCase().indexOf(this.state.query)!== -1)
            .map((job) => (
              <Card.Body style={{ color: "black" }}>
                <Link to = {`/companyDetail/${job.company_name}`}>
                    <Card.Title 
                //      onClick={() =>
                //   this.props.history.push(
                //     "/details/" + job.company_name)}
                  >{job.company_name}</Card.Title>
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

export default Home;

{/* <Row id="movieRow" className="flex-row flex-nowrap scroll-container">
          {this.state.movies
            .filter((movie) =>
              movie.Title.toLowerCase().includes(this.state.query)
            )
            .map((movie) => (
              <Col>
                <Card className="h-100 text-center ">
                  <Card.Img variant="cover" src={movie.Poster} rounded />
                </Card>
              </Col>
            ))}
        </Row> */}
