import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <div>
      <img src={logo} alt="fastfeed" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label>
          <strong>Seu e-mail</strong>
        </label>
        <Input name="email" type="email" placeholder="Digite seu email" />
        <label>
          <strong>Sua senha</strong>
        </label>
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </div>
  );
}
