import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Display = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  width: 400px;
  font-size: 24px;
  font-family: monospace;
  background-color: #242b33;
  color: #fff;
`;

export const Wrapper = styled.div`
  background-color: #242b34;
  display: inline-grid;
  grid-template-columns: repeat(4, 100px);
  width: auto;

  button {
    height: 100px;
    width: 100%;
    font-size: 22px;
    border: 1px solid #242b34;
    color: #fff;
    cursor: pointer;
  }

  .colored {
    background-color: #fd9e2b;
    font-size: 30px;
  }

  .darkgrey {
    background-color: #393d43;
  }

  .lightgrey {
    background-color: #5a5f67;
  }
`;
