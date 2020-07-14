import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  padding: 5rem 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 420px) {
    & {
      padding: 5rem 1rem;
    }
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  section {
    display: flex;
    flex-direction: row;

    > p {
      font-size: 0.5rem;
    }
    
    a {
      margin: 4px 10px;
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 420px) {
    & {
      flex-direction: column-reverse;
      justify-content: space-around;
    }
  }
`