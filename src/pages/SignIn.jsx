import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  height: 50%;
  width: 25%;
  padding: 20px 0px;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  margin: 3px 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 200;
  margin: 5px 0;
`;

const Input = styled.input`
  background-color: transparent;
  outline: none;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 5px;
  caret-color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.soft};
  padding: 4px 12px;
  border: none;
  color: ${({ theme }) => theme.textSoft};
  border-radius: 5px;
`;

const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 10px;
`;

export default function SignIn() {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Text>to continue to wetube</Text>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>Sign in</Button>
        <Text>or</Text>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
}
