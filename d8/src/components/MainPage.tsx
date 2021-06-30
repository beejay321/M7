import { Component } from "react";
import { Container, Card, Form, Col, Row, FormControl, Button } from "react-bootstrap";
// import { Link } from "react-router-dom"


interface Propping {
    
}

class MainPage extends Component {
    state = {
        songs: [],
        query : ""
    }

    componentDidMount = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`)
            console.log(response)
            let result = await response.json()
            console.log(result)
            this.setState({ songs: result.data})
          } catch (error) {
            console.log('error')
          }
    }

    HandleChange  = async (e) => {
        this.setState({query :e.target.value })
    }



    






    render () {
        return (
            <>
                {/* <h1>New Component</h1> */}
                
        <Container>
          <h1>Jobs</h1>
          <Col>
            <Form inline className="py-4">
              <FormControl type="text" placeholder="Search" value={this.state.query} onChange={(e) => this.setState({ query: e.currentTarget.value.toLowerCase() })} className="mr-sm-2" />
              <Button className="my-4" 
            //   onClick={this.props.getJobs}
              >
                Search
              </Button>
            </Form>
          </Col>
          {/* {this.props.jobs.isLoading && (
            <div>
              <p>Loading....</p>
            </div>
          )} */}
          <Row>
            {this.state.songs
              .filter((song) => song.album.title.toLowerCase().indexOf(this.state.query) !== -1)
              .map((song) => (
                <div className="py-4">
                  <Card style={{ width: "50rem" }}>
                  <Card.Img variant="top" src={song.album.cover} />                    
                        <Card.Body style={{ color: "black" }}>
                         
                          <Card.Text>{song.title}</Card.Text>
                          <Card.Text>{song.category}</Card.Text>
                        </Card.Body>
                      
                        
                     
                  </Card>
                </div>
              ))}
          </Row>
        </Container>
     
            </>
        )
    }
}

export default MainPage


 {/* <Link to={`/companyDetail/${job.company_name}`}>
                            <Card.Text>{job.company_name}</Card.Text>
                          </Link> */}