import { Navbar } from "react-bootstrap";

const myNav = () => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Navbar>
    </>
  );
};
export default myNav;
