import styled from "styled-components";

export const StyledList = styled.div`
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #512e5f;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1948a;
  }
`;

export const StyledItem = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  border: 2px solid #512e5f;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-family: "Gugi", cursive;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: ${({ completed }) => (completed ? "aliceblue" : "#512e5f")};
  background-color: ${({ completed }) => (completed ? "#F1948A" : "")};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "")};

  animation: item-animation 3s infinite alternate;
  @keyframes item-animation {
    0% {
    }
    50% {
      border: 2px solid #f1948a;
    }
    100% {
    }
  }

  &:hover {
    height: 40px;
    font-size: 150%;
    transition: 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;
