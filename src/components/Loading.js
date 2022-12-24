import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <Div></Div>;
};

const Div = styled.div`
  background-image: url("loading_img.gif");
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
`;

export default Loading;
