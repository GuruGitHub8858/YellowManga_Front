import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className='box'>
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>Yellow Manga</h1>
            </div>
            <p>Unlock the door to a world of wonder and excitement with our diverse range of Japanese manga. Whether you're a seasoned fan or a curious newcomer, there's something here for everyone.</p>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>demo</li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>123/234 lakshmi garden Erode TamilNadu</li>
              <li>Email: hr@yellowmatics.com</li>
              <li>Phone: 6379390543</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
