import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  height: 100%;
  font-size: 1.8rem;

  h2 {
    color: #7159c1;
    margin-bottom: 30px;
  }

  img {
    height: 190px;
    margin-bottom: 30px;
  }

  button {
    background: #7159c1;
    color: #fff;
    height: 55px;
    margin-top: 20px;
    width: 230px;
    border: none;
    border-radius: 6px;
    font-size: 1.4rem;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.8);
    &:hover {
      opacity: 0.7;
      transition: 0.3s;
    }
  }
`;
