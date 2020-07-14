import Head from 'next/head'
import Link from 'next/link'

import { Container, Content, Footer } from './styles'

export default function Layout({ children, title = 'Phone Preaching' }) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      </Head>

      <Content>
        {children}
      </Content>

      <Footer>
        <section>
          <Link href="/">
            <a href="/">
              Início
            </a>
          </Link>

          <Link href="privacy">
            <a href="/privacy">
              Politicas de Privacidade
            </a>
          </Link>
        </section>

        <p>By <strong>Dylluar Labs</strong></p>
      </Footer>

      <style jsx global>{`
        html,
        body,
        input, 
        button {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
        }

        @media screen and (max-width: 420px) {
          html {
            font-size: 14px;
          }
        }

        @media screen and (max-width: 320px) {
          html {
            font-size: 10px;
          }
        }

        * {
          outline: 0;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        *:focus {
          outline: 0;
        }

        a {
          text-decoration: none;
          color: #0070f3;
        }

        ul {
          list-style: none;
        }
        
        button {
          cursor: pointer;
        }
      
        a:hover,
        a:focus,
        a:active {
          text-decoration: underline;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.5rem;
        }
      `}</style>
    </Container>
  )
}
