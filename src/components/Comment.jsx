import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelTimer = styled.span`
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const ChannelDesc = styled.p`
  font-size: 14px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export default function Comment() {
  return (
    <Container>
      <Img src="https://img.freepik.com/premium-photo/portrait-painting-beautiful-woman-abstract-illustration-beautiful-girl-conceptual-closeu_769803-13.jpg?size=626&ext=jpg"></Img>
      <ChannelDetail>
        <Text>
          <ChannelName>David dev</ChannelName>
          <ChannelTimer>3 days ago</ChannelTimer>
        </Text>
        <ChannelDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
          corrupti dolorem doloribus minima animi alias, eos esse error quae.
        </ChannelDesc>
      </ChannelDetail>
    </Container>
  );
}
