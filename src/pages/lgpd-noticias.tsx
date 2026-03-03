import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import React from 'react'

const title = 'Not\u00edcias'
const description =
  'Alerta sobre golpes relacionados ao ITBI na Prefeitura de S\u00e3o Paulo.'

const Index = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title={title}>
        <div className="page-lgpd">
          <p>
            <strong>{'Not\u00edcias'}</strong>
          </p>
          <p>
            {
              'Alerta de golpe envolvendo o ITBI da Prefeitura de S\u00e3o Paulo!'
            }
          </p>
          <p>
            {'Usu\u00e1rios que pesquisam por "ITBI PMSP" no Google t\u00eam sido ' +
              'direcionados a sites falsos que simulam o portal oficial da Prefeitura.'}
          </p>
          <p>{'Prezados usu\u00e1rios,'}</p>
          <p>
            {'Temos recebido relatos quanto \u00e0 ocorr\u00eancia de golpes relacionados \u00e0 ' +
              'emiss\u00e3o da guia do Imposto sobre Transmiss\u00e3o de Bens Im\u00f3veis ' +
              '(ITBI), junto \u00e0 Prefeitura Municipal de S\u00e3o Paulo.'}
          </p>
          <p>
            {'Ao que consta, ao serem realizadas pesquisas por "ITBI", "PMSP" e outros, ' +
              'usando o site da Google, est\u00e3o sendo apresentados resultados com links ' +
              'que direcionam a sites falsos que simulam o portal oficial da Prefeitura ' +
              'do Munic\u00edpio de S\u00e3o Paulo.'}
          </p>
          <p>
            {'Ainda conforme relatos, ao clicar nesses links, o usu\u00e1rio \u00e9 ' +
              'redirecionado para site que imita o site oficial da Prefeitura ' +
              'Municipal de S\u00e3o Paulo, e induz o usu\u00e1rio a clicar em link que ao ' +
              'solicitar o ITBI, redireciona o usu\u00e1rio para uma conversa pelo ' +
              'WhatsApp, onde os golpistas emitem um boleto fraudulento.'}
          </p>
          <p>
            {'Para que n\u00e3o seja v\u00edtima de mais este golpe, acesse o site da ' +
              'Prefeitura sempre pelo portal oficial. Observe que a prefeitura ' +
              'nunca envia documentos relativos ao ITBI por SMS ou WhatsApp, pois a ' +
              'emiss\u00e3o \u00e9 somente pela internet no link abaixo. Em caso de d\u00favida, ' +
              'consulte sempre os canais oficiais da Prefeitura do Munic\u00edpio de S\u00e3o ' +
              'Paulo.'}
          </p>
          <p>
            <strong>Link oficial:</strong>{' '}
            <a
              href="https://capital.sp.gov.br/web/fazenda/servicos/itbi"
              target="_blank"
              rel="noreferrer"
            >
              https://capital.sp.gov.br/web/fazenda/servicos/itbi
            </a>
          </p>
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}

export default Index
