import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
<Container fluid className="d-flex min-vh-100 p-0">
      <Row className="w-100 m-0">
        <Col 
          lg={6} 
          className="d-none d-lg-flex align-items-center justify-content-center text-primary-foreground p-4"
        >
          <div className="text-center">
            <h1 className="display-4 font-weight-bold">SPORTS EQUIPMENT RENTAL</h1>
          </div>
        </Col>

        <Col 
          xs={12} 
          lg={6} 
          className="d-flex align-items-center justify-content-center bg-light p-4"
        >
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default AuthLayout
