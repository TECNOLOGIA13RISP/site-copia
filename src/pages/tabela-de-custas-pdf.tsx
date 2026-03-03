import Head from 'next/head'

const TabelaDeCustasPdf = () => {
  return (
    <>
      <Head>
        <title>Tabela de Custas - PDF</title>
      </Head>
      <iframe
        title="Tabela de Custas"
        src="https://arisp.com.br/wp-content/uploads/2026/01/2040816OM.pdf"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </>
  )
}

export default TabelaDeCustasPdf
