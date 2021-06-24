import { Col, Row, Card } from "react-bootstrap";
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
// console.log(props)

const Favorites = (props) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: "none" }}>
        {props.company.map((job, i) => (
          <div className="py-3">
            <Card style={{ width: "80rem" }}>
              <Card.Body>
                <Card.Title>{job.title}</Card.Title>
                <br />
                <Card.Subtitle className="mb-2 text-muted">{job.company_name}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{job.job_type}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{job.category}</Card.Subtitle>
                <Card.Text>{/* <div dangerouslySetInnerHTML={{ __html: job.description }}></div> */}</Card.Text>
                <Card.Text>{job.url}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold"></Col>
    </Row>
  </Row>
);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
