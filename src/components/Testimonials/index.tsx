import { testimonials } from "../../services/data";

import { Container, Card } from "./styles";

export function Testimonials() {
  return (
    <Container id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonials.map((testimonial) => (
          <Card className={testimonial.featured ? "featured" : ""}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={testimonial.img} className="user" alt="" />
              <img src={testimonial.icon} className="right" alt="" />
            </div>
            <div className="center">
              <h3>{testimonial.desc}</h3>
            </div>
            <div className="bottom">
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}
