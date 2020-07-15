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

const Section = styled.div`
  padding: 2rem 1rem;
  max-width: 820px;

  p {
    margin: 1.2rem 0;
  }
`;

function Privacy() {
  return (
    <>
      <H1>Privacy Policy</H1>
      
      <Description>We do not store any data that you create in the app.</Description>

      <Section>
        <p>We don't need and don't want to store your data. In fact, we don't even have servers to store your data 😉. They are yours and we will never ask for them. What happens on your phone, remains on your phone!</p>

        <p>
          However, only once will the app send us some information about you: when an <strong> error in the app </strong> acontecer happens (believe me, we don't want to see your data). To help us identify and correct
          the error we need some basic information like: your <strong> country </strong>, your phone's <strong> model </strong>, the <strong> error log </strong> and some other information collected by <a rel="noreferrer" href="https://policies.google.com/privacy?hl=en-US"> Google Analytcs</a>.
          This information is stored on Google's servers. After identifying and addressing the error, we delete the information. Don't worry, none of this data is enough to identify you. But if you still have any questions please contact: <a href="mailto:dylluar-labs@outlook.com"> dylluar-labs@outlook.com</a>.
        </p>

        <p>So, if you purchased our app, congratulations 🥳. This application is only yours and you should not share it with others or reverse engineer it or anything else.</p>

        <p>By installing the application you <strong>agree to this term</strong>. We promise that you will always be in control of your information.</p>
      </Section>
    </>
  );
}

export default Privacy;