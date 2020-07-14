import Head from 'next/head'

import Layout from '../components/Layout'
import { H1, Description, Section, ImageContent } from './styles'

export default function Home() {
  return (
    <Layout>
      <>
        <Section>
          <H1>Phone Preaching</H1>

          <Description>
            Gerencie sua lista aleatória de números telefonicos 
          </Description>

          <ImageContent>
              <img src="/img/phone-index-filter-en.png" alt="Tela inicial com lista de números cadastrados"/>
          </ImageContent>
        </Section>
      </>
    </Layout>
  )
}