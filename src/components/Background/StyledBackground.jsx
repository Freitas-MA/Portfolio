import styled, { keyframes } from "styled-components";

export const StickySection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: transparent;
`;
// ! Criar um jogo aqui com as bolhas
export const BubblesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  top: 0;
  left: 0;
`;

export const BubbleAnimation = keyframes`
    0% {
        bottom: -100px;
        transform: translateX(0);
    }
    50% {
        transform: translate(100px);
    }
    100% {
        bottom: 1080px;
        transform: translateX(-200px);
    }
`;

export const Bubble = styled.div`
  position: absolute;
  bottom: -100px;
  opacity: 0.5;
  animation: ${BubbleAnimation} 10s infinite ease-in;
  background: #1bd6f7a6;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  /* &:hover {
    opacity: 1;
    background-color: red;
    opacity: 0.6;
  } */

  &:nth-child(1) {
    width: 40px;
    height: 40px;
    left: 10%;
    animation-duration: 8s;
  }
  &:nth-child(2) {
    width: 20px;
    height: 20px;
    left: 20%;
    animation-duration: 5s;
    animation-delay: 1s;
  }
  &:nth-child(3) {
    width: 50px;
    height: 50px;
    left: 35%;
    animation-duration: 7s;
    animation-delay: 2s;
  }
  &:nth-child(4) {
    width: 80px;
    height: 80px;
    left: 50%;
    animation-duration: 11s;
    animation-delay: 0s;
  }
  &:nth-child(5) {
    width: 35px;
    height: 35px;
    left: 55%;
    animation-duration: 6s;
    animation-delay: 1s;
  }
  &:nth-child(6) {
    width: 45px;
    height: 45px;
    left: 65%;
    animation-duration: 8s;
    animation-delay: 3s;
  }
  &:nth-child(7) {
    width: 90px;
    height: 90px;
    left: 70%;
    animation-duration: 12s;
    animation-delay: 2s;
  }
  &:nth-child(8) {
    width: 25px;
    height: 25px;
    left: 80%;
    animation-duration: 6s;
    animation-delay: 2s;
  }
  &:nth-child(9) {
    width: 15px;
    height: 15px;
    left: 70%;
    animation-duration: 5s;
    animation-delay: 1s;
  }
  &:nth-child(10) {
    width: 90px;
    height: 90px;
    left: 25%;
    animation-duration: 10s;
    animation-delay: 4s;
  }
`;
