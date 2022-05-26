import { useLocation } from "react-router-dom";
import SignInForm from "../components/signIn/SignInForm";
import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #fff;
  padding-top: 1rem;
  margin-top: -10px;
  margin-left: -10px;
  margin-right: -10px;
`
const Text = styled.h1`
  text-align: center;
  font-family: 'Koulen', cursive;
  font-size: 2.3rem;
  letter-spacing: 0.3rem;
`
function SignIn() {
  const { state } = useLocation();

  return (
    <Container>
      <Text>Sign In</Text>
      <hr />
      {state?.success && <h2>Sign up was successful</h2>}
      <SignInForm />
    </Container>
  );
}

export default SignIn;
