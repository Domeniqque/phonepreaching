import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
`;

export const H2 = styled.h2`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
`;

export const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  padding: 1rem 0;
  text-align: center;
`

export const Section = styled.section`
  flex: 1;
`

export const ImageContent = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: 10px 0;
  height: 420px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 420px) {
    & {
      height: 520px;
    }
  }

  img {
    object-fit: cover;
    height: 100%;
  }
`;
