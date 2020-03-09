import React, { Component } from "react";
import api from "../../services/api";
import gihubw from "../../assets/images/githubw.svg";
import slogan from "../../assets/images/slogan.png";
import { Container, Form } from "./styles";

import CompareList from "../../components/compareList/index";

export default class Main extends Component {
  state = {
    repositoryImput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.repositoryImput}`);

      this.setState({
        repositoryImput: "",
        repositories: [...this.state.repositories, response.data]
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <img className="logoGit" src={gihubw} alt="GitHub" />
        <img src={slogan} alt="GitHub Compare" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/reposiório"
            value={this.state.repositoryImput}
            onChange={e => this.setState({ repositoryImput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
