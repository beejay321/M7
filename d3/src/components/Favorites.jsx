import { Col, Row, Card, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { removeFromFavAction } from "../actions";

const mapStateToProps = (state) => ({
  company: state.favorites.company,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (index) => {
    dispatch(removeFromFavAction(index));
  },
});

const Favorites = (props) => (
  <Container>
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {props.company.map((job, i) => (
            <div className="py-3">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Title>{job.company_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{job.title}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{job.job_count}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
        </ul>
      </Col>
    </Row>
  </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
