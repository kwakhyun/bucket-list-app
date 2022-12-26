import styled from "styled-components";

export const StyledPercent = styled.span`
  color: #f1948a;
  font-family: "Gugi", cursive;
`;

export const StyledProgressBar = styled.div`
  background-color: aliceblue;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;

export const StyledHighLight = styled.div`
  background-color: #f1948a;
  width: ${({ width, length }) => (length ? width : 0)};
  height: 40px;
  border-radius: 5px;
  transition: 1s;
`;
