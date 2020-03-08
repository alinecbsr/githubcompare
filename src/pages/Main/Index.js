import React from "react";
import gihubw from "../../assets/images/githubw.svg";
import slogan from "../../assets/images/slogan.png";
import { Container, Form } from "./styles";

const Main = () => (
  <Container>
    <img className="logoGit" src={gihubw} alt="GitHub" />
    <img src={slogan} alt="GitHub Compare" />
    <Form>
      <input type="text" placeholder="usuário/reposiório" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
