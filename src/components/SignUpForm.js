import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../config/routes";
import { createNewUser } from "../http/authentification";
import styled from "styled-components";

const Label = styled.label`
  position: relative;
  margin-bottom: -1rem;
  font-size: 1.2rem;
  font-family: 'Koulen', cursive;
`

const Form = styled.form`
  height: 100%;
  padding-top: 3rem;
  margin-top: -10px;
  margin-right: 0;
  padding-bottom: 4rem;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Input = styled.input`
  border-radius: 0.4rem;
  border-style: none;
  height: 1.5rem;
  width: 15rem;
`

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleInput(e) {
    setUser((prevState) => (
      {
        ...prevState, 
        [e.target.name]: e.target.value
      }
    ));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createNewUser(user);
      navigate(`/${ROUTES.SIGN_IN}`, { state: { success: true } });
    } catch (error) {
      // Don't forget, vakho, add error messages to UI
      console.log(error);
    }
  }

  return (

    <Form>
      <Label htmlFor="username">
        Username
        <br />
        <Input
          name="username"
          id="username"
          value={user.username}
          onChange={handleInput}
        />
      </Label>
      <br />
      <Label htmlFor="firstName">
        First Name
        <br />
        <Input
          name="firstName"
          id="firstName"
          value={user.firstName}
          onChange={handleInput}
        />
      </Label>
      <br />
      <Label htmlFor="lastName">
        Last Name
        <br />
        <Input
          name="lastName"
          id="lastName"
          value={user.lastName}
          onChange={handleInput}
        />
      </Label>
      <br />
      <Label htmlFor="email">
        Email 
        <br />
        <Input
          name="email"
          id="email"
          value={user.email}
          onChange={handleInput}
        />
      </Label>
      <br />
      <Label htmlFor="birthDate">
        Birth Date
        <br />
        <Input
          name="birthDate"
          type="date"
          id="birthDate"
          value={user.birthDate}
          onChange={handleInput}
        />
      </Label>
      <br />
      <Label htmlFor="password">
        Password
        <br />
        <Input
          name="password"
          type="password"
          id="password"
          value={user.password}
          onChange={handleInput}
        />
      </Label>
      <br />
      <button 
        className="button"
        onClick={handleSubmit}>
          Sign Up
        </button>
    </Form>
  )
}

export default SignUpForm;
