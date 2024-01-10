import styled from "styled-components";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  caret-color: ${({ theme }) => theme.text};
`;
const Btn = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Navbar() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder="Search" />
            <SearchIcon />
          </Search>
          <Btn>
            <AccountCircleIcon />
            SIGN IN
          </Btn>
        </Wrapper>
      </Container>
    </div>
  );
}
