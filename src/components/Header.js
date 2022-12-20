import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MyButton from "./ui/MyButton";
import { $getToken, $logout, $removeToken } from "../dataManager/myQueries";

const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = (e) => {
    const {name} = e.target
    name==='로그아웃' ? $removeToken() && navigate('/') : navigate('/sign-in')
  };
  return (
    <Container>
      <MainTitle
        onClick={() => {
          navigate("/");
        }}
      >
        멍냥의 전당 🐾
      </MainTitle>
      <span>
        {$getToken()
          ? "항해99 집사님 환영합니다 😸"
          : "멍멍 ! 로그인을 해주세요 주인님 ! 🐶"}
      </span>
      {$getToken() ? (
        <MyButton onClick={onClickHandler} mg="0 0 0 2rem">
          로그아웃
        </MyButton>
      ) : (
        <MyButton onClick={onClickHandler} mg="0 0 0 2rem">
          로그인
        </MyButton>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: var(--color-point1);
  padding: 3rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const MainTitle = styled.div`
  color: var(--color-point4);
  font-size: 2.4rem;
  font-weight: 900;
  flex: 1;
  cursor: pointer;
`;
