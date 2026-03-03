/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'

const TabelaDeCustas = () => {
  return (
    <>
      <Head>
        <title>Tabela de Custas</title>
        <meta name="description" content="Acesse nossa tabela de custas para ter uma prévia do custo do serviço solicitado," />
        <meta
          property="og:title"
          content="Tabela de Custas"
        />
        <meta property="og:description" content="Acesse nossa tabela de custas para ter uma prévia do custo do serviço solicitado," />
        <meta property="og:url" content="https://13registro,com,br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Tabela de Custas de Emolumentos">
        <div className="page-tabela-custas">
          <div className="tabela-custas-pdf">
            <div className="text-center">
              <a className="btn btn-primary" href="/tabela-de-custas-pdf">
                Acessar
              </a>
            </div>
          </div>
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default TabelaDeCustas
