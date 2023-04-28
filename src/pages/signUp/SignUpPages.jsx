import React from 'react';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import { useSignUp } from '../../services/auth';

export default function SignUpPage() {
  const { form, handleForm } = useForm({
    name: '', email: '', password: '', confirmPassword: '',
  });
  const signUp = useSignUp();

  // eslint-disable-next-line consistent-return
  function submitForm(e) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (form.password !== form.confirmPassword) return alert('As senhas não coincidem');

    delete form.confirmPassword;
    signUp(form);
  }

  return (
    <Container>
      <form onSubmit={submitForm}>
        <input required type="text" name="name" placeholder="Nome" value={form.name} onChange={handleForm} />
        <input required type="email" name="email" autoComplete="username" placeholder="E-mail" value={form.email} onChange={handleForm} />
        <input required type="password" name="password" minLength={3} autoComplete="new-password" placeholder="Senha" value={form.password} onChange={handleForm} />
        <input required type="password" name="confirmPassword" minLength={3} autoComplete="new-password" placeholder="Confime a Senha" value={form.confirmPassword} onChange={handleForm} />
        <button type="submit">Cadastrar</button>
      </form>
      <a href="/sign-in">Já tem uma conta? Faça login</a>
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
