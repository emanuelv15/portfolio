// import { FormEvent, useState } from "react";
import {
  Instagram,
  WhatsApp,
  LinkedIn,
  GitHub,
  MailOutline,
} from "@material-ui/icons";

import { Container, Item } from "./styles";

export function Contact() {
  // const [message, setMessage] = useState(false);

  // function handleSubmit(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   setMessage(true);
  // }

  return (
    <Container id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <Item>
          <a
            href="https://instagram.com/emanuel_v15"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
            <h3>Instagram</h3>
          </a>
        </Item>

        <Item>
          <a
            href="https://api.whatsapp.com/send?phone=55031983481992"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp />
            <h3>WhatsApp</h3>
          </a>
        </Item>

        <Item>
          <a
            href="https://www.linkedin.com/in/emanuelv15"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
            <h3>LinkedIn</h3>
          </a>
        </Item>

        <Item>
          <a
            href="https://github.com/emanuelv15"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
            <h3>GitHub</h3>
          </a>
        </Item>

        <Item>
          <a
            href="mailto:emanuel.v.souza@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailOutline />
            <h3>E-mail</h3>
          </a>
        </Item>

        {/* <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form> */}
      </div>
    </Container>
  );
}
