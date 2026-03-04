import BannerHome from 'components/BannerHome'
import CardsHome from 'components/CardsHome'
import HomeInformacoes from 'components/HomeInformacoes'
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import MapaCircunscricao from 'components/MapaCircunscricao'
import Head from 'next/head'

const Index = () => {
  const content = {
    title: 'Bem-vindos ao portal do 13º Registro de Imóveis',
    subtitle:
      '13º Oficial de Registro de Imóveis da Capital do Estado de São Paulo'
  }

  return (
    <>
      <Head>
        <title>13º Registro de Imóveis de São Paulo</title>
        <meta
          name="description"
          content="Portal de serviços online do 13º Registro de Imóveis de São Paulo."
        />
        <meta
          property="og:title"
          content="13º Registro de Imóveis de São Paulo"
        />
        <meta
          property="og:description"
          content="Portal de serviços online do 13º Registro de Imóveis de São Paulo."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <BannerHome title={content.title} subtitle={content.subtitle} />
      <CardsHome />
      <HomeInformacoes />
      <MapaCircunscricao />
      <LayoutFooter />
    </>
  )
}

export default Index
