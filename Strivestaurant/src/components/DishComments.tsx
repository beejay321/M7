import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { dish } from "../types/interface";

interface DishCommentsProps {
  selectedPasta: dish;
}

const DishComments = ({ selectedPasta }: DishCommentsProps) => (
  <Container>
    <Row className="justify-content-center mt-3 pb-5">
      <Col xs={12} md={6}>
        <ListGroup>{selectedPasta ? selectedPasta.comments!.map((c) => <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>) : <p>Click on a dish to read its comments</p>}</ListGroup>
      </Col>
    </Row>
  </Container>
);

export default DishComments;
