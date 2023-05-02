import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { useSignIn } from '../../services/auth';

export default function SignInPage() {
  const { form, handleForm } = useForm({ email: '', password: '' });
  const login = useSignIn();

  function submitForm(e) {
    e.preventDefault();
    login(form);
  }

  return (
    <Container>
      <form onSubmit={submitForm}>
        <input required type="email" name="email" autoComplete="username" placeholder="E-mail" value={form.email} onChange={handleForm} />
        <input required type="password" name="password" minLength={3} autoComplete="new-password" placeholder="Senha" value={form.password} onChange={handleForm} />
        <button type="submit">Entrar</button>
      </form>
      <a href="/sign-up">Não tem uma conta? Cadastre-se</a>
    </Container>
  );
}

const Container = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
