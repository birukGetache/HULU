import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { setUsername, setPassword, clearUser } from '../slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
`;

const Form = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #4557a0;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;

  &:focus {
    border-color: #4557a0;
    outline: none;
    box-shadow: 0 0 4px rgba(69, 87, 160, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4557a0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #35447a;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-size: 14px;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsernameState] = useState('');
  const [password, setPasswordState] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      
      if (response.data.success) {
        dispatch(setUsername(username));
        dispatch(setPassword(password));
        navigate('/admin');
      } else {
        setError(response.data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleClear = () => {
    setUsernameState('');
    setPasswordState('');
    dispatch(clearUser());
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsernameState(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPasswordState(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
        <Button type="button" onClick={handleClear} style={{ marginTop: '10px', backgroundColor: '#888' }}>
          Clear
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;
