import React, { useEffect, useMemo, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as S from './styles'

type TabName = 'noticias' | 'editais'

type BulletinItem = {
  title: string
  date: string
  description: string
}

const noticias: BulletinItem[] = [
  {
    title: 'Horário CARNAVAL 2026',
    date: '02/02/2026',
    description: 'Funcionamento durante o período de Carnaval.'
  },
  {
    title: 'Resolução COFECI n. 1.551/2025',
    date: '16/10/2025',
    description: 'Justiça Federal suspende a Resolução COFECI n. 1.551/2025.'
  },
  {
    title: 'Redes sociais 13 RISP',
    date: '15/10/2025',
    description: 'Acompanhe nossas redes sociais para novos comunicados.'
  }
]

const editais: BulletinItem[] = [
  {
    title: 'EDITAIS',
    date: '16/10/2025',
    description:
      'Publicações de notícias e editais referentes aos registros públicos.'
  }
]

export default function HomeInformacoes() {
  const [activeTab, setActiveTab] = useState<TabName>('noticias')

  useEffect(() => {
    const syncTabFromHash = () => {
      if (window.location.hash === '#editais') {
        setActiveTab('editais')
        return
      }

      if (window.location.hash === '#noticias') {
        setActiveTab('noticias')
      }
    }

    syncTabFromHash()
    window.addEventListener('hashchange', syncTabFromHash)

    return () => {
      window.removeEventListener('hashchange', syncTabFromHash)
    }
  }, [])

  const items = useMemo(
    () => (activeTab === 'noticias' ? noticias : editais),
    [activeTab]
  )

  return (
    <S.Wrapper id="importancia">
      <Container>
        <Row>
          <Col xl={6} lg={6} md={12} className="importance-copy">
            <h2>A Importância do Registro</h2>
            <div className="title-line" />
            <p>
              Pela legislação brasileira, para adquirir a propriedade de um
              imóvel, é preciso que o título translativo (instrumento
              particular, escritura pública etc.) seja registrado no Registro de
              Imóveis competente.
            </p>
          </Col>
          <Col xl={6} lg={6} md={12}>
            <span id="noticias" className="anchor-offset" />
            <span id="editais" className="anchor-offset" />
            <div className="bulletin-box">
              <div className="bulletin-tabs">
                <button
                  type="button"
                  className={activeTab === 'noticias' ? 'is-active' : ''}
                  onClick={() => setActiveTab('noticias')}
                >
                  Últimas notícias
                </button>
                <button
                  type="button"
                  className={activeTab === 'editais' ? 'is-active' : ''}
                  onClick={() => setActiveTab('editais')}
                >
                  Editais
                </button>
              </div>
              <div className="bulletin-list">
                {items.map((item) => (
                  <article
                    className="bulletin-item"
                    key={`${activeTab}-${item.title}`}
                  >
                    <h3>{item.title}</h3>
                    <p className="date">{item.date}</p>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </S.Wrapper>
  )
}
