import styled from 'styled-components';

const H1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 1.5rem;
  padding: 1rem 0;
  text-align: center;
`

const Section = styled.section`
  flex: 1;
`

const ImageContent = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: 20px 0;
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

export default function Home() {
  return (
    <Section>
      <H1>Phone Preaching</H1>

      <Description>
        Manage your random phone numbers
      </Description>

      <ImageContent>
          <img src="/img/phone-index-filter-en.png" alt="Home screen with list of registered numbers"/>
      </ImageContent>

      <p>Create random lists of phone numbers in over 150 countries</p>
    </Section>
  )
}