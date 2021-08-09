import { FormEvent, useState } from "react";

import { Container } from "./styles";

export function Contact() {
  const [message, setMessage] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage(true);
  }

  return (
    <Container id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </Container>
  );
}
