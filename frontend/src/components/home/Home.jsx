import React from 'react';
import Main from '../template/Main';

const Home = props => 
  <Main icon="home" title="Início" subtitle="Cadastro de usuário">
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">Sistema para exempleficar a construção de cadastro desenvolvido em React</p>
  </Main>

export default Home;