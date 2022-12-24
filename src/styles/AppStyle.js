import styled from "styled-components";

export const Style = styled.div`
  background-image: url("https://i.pinimg.com/originals/93/c6/aa/93c6aaa4424c468db1c9f7904eb400d8.gif");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  audio {
    height: 20px;
    margin: 0 auto;
    margin-top: 20px;
    opacity: 0.5;
  }

  & > div {
    background-color: aliceblue;
    max-width: 500px;
    min-width: 300px;
    width: 50vw;
    height: 70vh;
    margin: 20px auto;
    border-radius: 15px;
    padding: 20px;
    opacity: 0.9;
    h1 {
      color: #512e5f;
      text-align: center;
    }
    hr {
      margin: 20px 0;
    }
  }

  .inputBox {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin: 0 auto;
    padding: 0 20px;

    input {
      background-color: aliceblue;
      width: 70%;
      padding: 10px;
      font-size: 16px;
      margin-right: 10px;
      outline: none;
      border: 2px solid #512e5f;
      border-radius: 20px;
      &:focus {
        transition: 0.5s;
        border: 2px solid #f1948a;
      }
    }

    button {
      background-color: #512e5f;
      border: 1px solid #fff;
      border-radius: 15px;
      width: 80px;
      padding: 10px;
      margin-right: 10px;
      font-size: 18px;
      color: #fff;
      cursor: pointer;
      &:hover {
        transition: 0.5s;
        background-color: #f1948a;
      }
    }

    span {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
