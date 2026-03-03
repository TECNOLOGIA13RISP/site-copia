import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import React from 'react'

const PoliticaDePrivacidade = () => {
  return (
    <>
      <Head>
        <title>Pesquisa de Satisfação</title>
        <meta
          name="description"
          content="Participe da pesquisa de satisfação do 13 Registro de Imóveis de São Paulo."
        />
        <meta property="og:title" content="Pesquisa de Satisfação" />
        <meta
          property="og:description"
          content="Participe da pesquisa de satisfação do 13 Registro de Imóveis de São Paulo."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Pesquisa de Satisfação">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScELdvFnI7nlzaHonqS9PNpEziKpVsCN9pvkuQ17hiqfcycrQ/viewform?embedded=true"
          width="100%"
          height="900"
          frameBorder="0"
        >
          Carregando…
        </iframe>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default PoliticaDePrivacidade
