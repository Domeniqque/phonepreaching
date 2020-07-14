import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';

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
    <Layout title="Privacy Policy">
      <>
        <H1>Privacy Policy</H1>
        
        <Description>Nós não armazenamos nehum dado que você criar no aplicativo.</Description>

        <Section>
          <p>Não precisamos e nem queremos armazenar seus dados. Aliás nem temos servidores para armazenar seus dados 😉. Eles são seus e nunca iremos pedir eles. O que acontece no seu telefone, continua no seu telefone!</p>

          <p>
            No entanto, apenas uma vez o aplicativo nos enviará algumas informações suas: quando acontecer algum <strong>erro no aplicativo</strong> 🐛(acredite, não queremos ver seus dados). Para nos ajudar a identificar e corrigir 
            o erro precisamos de algumas informações basicas como: seu <strong>país</strong>, o <strong>modelo do seu telefone</strong>, o <strong>log de erros</strong> e algumas outras informações coletadas pelo <a rel="noreferrer" href="https://policies.google.com/privacy?hl=en-US" no>Google Analytcs</a>. 
            Essas informações ficam armazenadas nos servidores da Google. Após identificar e tratar o erro nós excluímos as informações. Não se preocupe, nenhum desses dados é o suficiente para identificar você. Mas se ainda tem alguma dúvida entre em contato: <a href="mailto:dylluar-labs@outlook.com">dylluar-labs@outlook.com</a>.
          </p>

          <p>Então, se você adquiriu nosso aplicativo parabéns 🥳. Este aplicativo é só seu e não deve compartilhar com outros ou fazer engenharia reversa ou qualquer outra coisa.</p>

          <p>Ao instalar o aplicativo você concorda com este termo. Prometemos que você sempre terá controle das suas informações.</p>
        </Section>
      </>
    </Layout>
  );
}

export default Privacy;