import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber"/>

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" placeholder="E-mail"/>

        <Input name="password" placeholder="Senha" type="password" />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>
        <a href="forgot">
          <FiLogIn />
          Criar conta
        </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
