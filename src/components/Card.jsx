import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "300px"};

  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Img = styled.img`
  width: ${(props) => (props.type === "sm" ? "50%" : "100%")};
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

// const Detail = styled.div`
//   width: 100%;
//   height: 202px;
//   background-color: #999;
// `;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Text = styled.div``;

const Title = styled.h1`
  font-size: ${(props) => (props.type === "sm" ? "13px" : "16px")};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: ${(props) => (props.type === "sm" ? "11px" : "14px")};
  color: ${({ theme }) => theme.textSoft};
  font-weight: ${(props) => props.type === "sm" && "500"};
  margin: ${(props) => (props.type === "sm" ? "5px 0" : "10px 0")};
`;

const Info = styled.div`
  font-size: ${(props) => (props.type === "sm" ? "11px" : "14px")};
  color: ${({ theme }) => theme.textSoft};
`;

export default function Card({ type }) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Img
          type={type}
          src="https://i.ytimg.com/vi/NqzdVN2tyvQ/maxresdefault.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="data:image/jpeg;base64,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"
          />
          <Text>
            <Title type={type}>
              React Node.js Video Sharing App Full Tutorial (Redux, JWT,
              Cookies) | MERN Stack Youtube Clone
            </Title>
            <ChannelName type={type}>David dev</ChannelName>
            <Info type={type}>660,908 views • 1 day ago</Info>
          </Text>
        </Details>
      </Container>
    </Link>
  );
}
