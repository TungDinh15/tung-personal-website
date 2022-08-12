import './Contact.css';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Contact me</h1>
                  <h3>Have some idea? Let's build it together.</h3>
                  <a href="# ">dinhthanhtung1402@gmail.com</a>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Contact;