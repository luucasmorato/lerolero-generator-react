import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  height: 100%;
  font-size: 1.3rem;

  h1 {
    color: #7159c1;
  }

  .card {
    min-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    padding: 50px 20px;
    border-radius: 6px;
    color: #7159c1;
    box-shadow: 0px 1px 6px 1px rgba(255, 255, 255, 0.6);
    margin: 40px 0;
  }

  button {
    background: #7159c1;
    color: #fff;
    height: 55px;
    width: 230px;
    border: none;
    border-radius: 6px;
    font-size: 1.3rem;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.8);
    &:hover {
      opacity: 0.7;
      transition: 0.3s;
    }
  }
`;
