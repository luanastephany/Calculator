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
  background-color: black;
  color: #fff;
`;

export const Wrapper = styled.div`
  background-color: gray;
  display: inline-grid;
  grid-template-columns: repeat(4, 100px);
  width: auto;

  button {
    height: 100px;
    width: 100%;
    font-size: 20px;
  }
`;
