import Head from 'next/head'

import BannerHome from 'components/BannerHome'
import CardsHome from 'components/CardsHome'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import MapaCircunscricao from 'components/MapaCircunscricao'
import PesquisaSatisfacao from 'components/PesquisaSatisfacao'

const Index = () => {
  const content = {
    title: 'Bem vindo(a) ao 13º Registro de Imóveis de São Paulo',
    subtitle:
      'Desde 1941 garantindo a segurança jurídica e a integridade das informações relacionadas aos imóveis dos subdistritos Cerqueira César e Jardim América'
  }

  return (
    <>
      <Head>
        <title>13 Registro de Imóveis de São Paulo</title>
        <meta
          name="description"
          content="Bem vindo ao 13 Registro de Imoveis de São Paulo, responsável pela circunscrição que abrange os subdistritos de Cerqueira César e Jardim América."
        />
        <meta
          property="og:title"
          content="13 Registro de Imóveis de São Paulo"
        />
        <meta
          property="og:description"
          content="Bem vindo ao 13 Registro de Imoveis de São Paulo, responsável pela circunscrição que abrange os subdistritos de Cerqueira César e Jardim América."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <BannerHome title={content.title} subtitle={content.subtitle} />
      <CardsHome />
      <MapaCircunscricao />
      <PesquisaSatisfacao />
      <LayoutFooter />
    </>
  )
}
export default Index
