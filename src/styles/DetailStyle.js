import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

export const Text = styled.h1`
  font-family: "Gugi", cursive;
`;

export const StyleBtn = styled.button`
  font-family: "Gugi", cursive;
  background-color: aliceblue;
  border: 2px dashed #f1948a;
  border-radius: 5px;
  width: 150px;
  padding: 10px;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #f1948a;
  cursor: pointer;
  &:hover {
    background-color: #512e5f;
    border: 2px solid #f1948a;
  }
`;
