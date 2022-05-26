import SignUpForm from "../components/SignUpForm";
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
  letter-spacing: 0.2rem;
`
function SignUp() {
  return (
    <Container>
      <Text>Sign Up here for more</Text>
      <hr />
      <SignUpForm />
    </Container>
  )
}

export default SignUp;
