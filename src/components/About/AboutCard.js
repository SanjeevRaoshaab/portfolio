import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanjeev kumar  </span>
            from <span className="purple"> Gurugram, India.</span>
            <br />
            am not currently working at a job, but I am practicing at home, building projects.
            <br />
            I have completed my React.js course from SDK Institute in Gurugram and have an offline certificate.
            <br />
            I have also completed an online course on Udemy and have obtained a certificate.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming: Leisure gamer
            </li>
            <li className="about-activity">
              <ImPointRight /> Gymming: Fitness enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight />Travelling: Adventure seeker
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sanjeev</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
