import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const IconBox = () => {
  return (
    <Container>
      <Row className="align-items-left my-5">
        <Col xs={12} md={4} className="text-left amb-iconbox" col="12 4">
          <Image src="./assets/icon-1.svg" className="mb-3" />
          <h5>
            SUPERIOR <br />
            PROTECTION
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque lacinia diam eu eleifend. Phasellus nisi tortor, aliquam
            nec fringilla a, mattis et lorem. Etiam id mattis sem, vel convallis
            mauris.
          </p>
          <Button variant="primary">Learn More</Button>
        </Col>
        <Col xs={12} md={4} className="text-left amb-iconbox" col="12 4">
          <Image src="./assets/icon-2.svg" className="mb-3" />
          <h5>
            Dependable <br />
            Repair services
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque lacinia diam eu eleifend. Phasellus nisi tortor, aliquam
            nec fringilla a, mattis et lorem. Etiam id mattis sem, vel convallis
            mauris.
          </p>
          <Button variant="primary">Learn More</Button>
        </Col>
        <Col xs={12} md={4} className="text-left amb-iconbox" col="12 4">
          <Image src="./assets/icon-3.svg" className="mb-3" />
          <h5>
            Life Safety <br />
            Inspections
          </h5>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            scelerisque lacinia diam eu eleifend. Phasellus nisi tortor, aliquam
            nec fringilla a, mattis et lorem. Etiam id mattis sem, vel convallis
            mauris.
          </p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IconBox;
