import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 1rem;
  width: 100%;
  padding: 1rem;
  width: calc(100%-300px);
  display: flex;
  min-height: 100vh;
  height: auto;
  align-items: center;
  justify-content: center;
`;
export const Profile = styled.div`
  background: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px #5e5d5d2b;
`;
export const Name = styled.p`
  font-size: 1.2rem;
  padding: 20px 0 0;
`;
export const Email = styled.p`
  font-size: 1rem;
  padding: 3px 0;
`;
