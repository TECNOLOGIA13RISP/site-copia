import LayoutFooter from 'components/Layout/Footer'
import LayoutNavbar from 'components/Layout/Navbar'
import { LayoutSubpage } from 'components/Layout/Subpage'
import Head from 'next/head'
import React from 'react'
import { Table } from 'react-bootstrap'

const PoliticaDePrivacidade = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade</title>
        <meta
          name="description"
          content="Leia nossa Política de Privacidade para entender como seus dados são utilizados."
        />
        <meta property="og:title" content="Política de Privacidade" />
        <meta
          property="og:description"
          content="Leia nossa Política de Privacidade para entender como seus dados são utilizados."
        />
        <meta property="og:url" content="https://13registro.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <LayoutNavbar />
      <LayoutSubpage title="Política de Privacidade">
        <div className="page-politica-de-privacidade">
          <p>
            <strong>
              POLÍTICA DE PRIVACIDADE E DE PROTEÇÃO DE DADOS PESSOAIS 13º
              OFICIAL DE REGISTRO DE IMÓVEIS DA COMARCA DE SÃO PAULO
            </strong>
          </p>
          <p className="font-weight-bold pt-5">1. DISPOSIÇÕES PRELIMINARES</p>
          <p>
            Em respeito à Lei Geral de Proteção de Dados (LGPD – Lei nº
            13.709/18) bem como às normas pertinentes à matéria (Provimento 23,
            CGJ-TJ/SP; Normas de Serviços dos Cartórios Extrajudiciais de São
            Paulo da CGJ-TJ/SP; Provimento 50, CNJ; Provimento 74, CNJ;
            Provimento 88, CNJ; Instrução Normativa RFB nº 1111/2010; Lei nº
            6.015/73), publica-se esta Política de Privacidade de Dados, que
            norteará todo tratamento que ocorrer nesta serventia de Registro de
            Imóveis.{' '}
          </p>
          <p>
            As serventias extrajudiciais estão sujeitas a um regime híbrido de
            tratamento de dados pessoais, pois exercem privativamente uma função
            pública, em regime de delegação (art. 236 CF). Enquanto a atividade
            fim da serventia está sujeita ao regime público do art. 23, §4º da
            LGPD, o gerenciamento administrativo e financeiro da serventia é
            nitidamente privado.{' '}
          </p>
          <p>
            Desse modo, o 13º OFICIAL DE REGISTRO DE IMÓVEIS DE SÃO PAULO
            interage com diferentes tipos de usuários em diferentes
            circunstâncias, que podem implicar em tratamento de dados pessoais:{' '}
          </p>
          <ul>
            <li>
              <strong>
                Atendimento presencial dos Usuários do Registro Público de
                Imóveis
              </strong>{' '}
              – Dados pessoais são fornecidos diretamente pelo usuário no
              atendimento em balcão para que sejam realizados registros e/ou
              averbações ou para a realização de consulta ao fólio real.{' '}
            </li>
            <li>
              <strong>
                Atendimento remoto dos Usuários do Registro Público de Imóveis
                por intermédio do SREI
              </strong>{' '}
              – Dados pessoais são fornecidos diretamente pelo usuário por
              intermédio do SREI para a remissão de solicitações à serventia
              para que sejam realizados registros e/ou averbações ou para a
              realização de consulta ao fólio real, de maneira remota.
            </li>
            <li>
              <strong>
                Funcionários, Candidatos e Prestadores de Serviços
              </strong>{' '}
              – No contexto de relações de trabalho, prestação de serviços ou de
              atividades de recrutamento, quando atuar enquanto empregador ou
              potencial empregador ou contratante de serviços, dados pessoais
              poderão ser tratados para fins de comunicação, recrutamento,
              manutenção de banco de currículos e/ou cumprimento de obrigações
              trabalhistas e fiscais.
            </li>
          </ul>
          <p>
            Em observância ao que determina a LGPD, o 13º OFÍCIO DE REGISTRO DE
            IMÓVEIS DE SÃO PAULO torna pública a identidade do seu encarregado,
            para envio de eventual comunicação, pedidos de esclarecimentos ou
            exercício de quaisquer dos direitos previstos nesta Política:
          </p>
          <ul>
            <li>Encarregado Interno (DPO): Patrícia Lopes Hermenegildo</li>
            <li>E-mail do Encarregado: lgpd@13registro.com.br</li>
          </ul>
          <p>
            Titulares de dados pessoais de outras operações de tratamento
            realizadas pela serventia que não estejam contempladas nesta
            Política também poderão entrar em contato com seu Encarregado de
            Proteção de Dados para vindicar maiores informações sobre os
            tratamentos realizados, em prestígio à autodeterminação informativa.
          </p>
          <p>
            Este website possui, a fim de trazer uma maior facilidade ao
            usuário, links para sites de serviços que não operados por esta
            serventia e, portanto, não se encontram sob a sua responsabilidade.
            O usuário reconhece estar ciente que não poderá haver eventual
            responsabilização desta serventia por questões ligadas a tais
            websites.
          </p>
          <p className="font-weight-bold pt-5">2. DOS CONCEITOS LEGAIS:</p>
          <ul>
            <li>
              <strong>Titular:</strong> Conforme a Lei Geral de Proteção de
              Dados (LGPD), é a pessoa natural a quem se referem os dados
              pessoais que são objeto de tratamento.
            </li>
            <li>
              <strong>Dado Pessoal:</strong> De acordo com a Lei Geral de
              Proteção de Dados Pessoais (LGPD), toda informação relacionada à
              pessoa natural identificada ou identificável é considerada dado
              pessoal. Informações como RG, CPF, endereço, contatos de telefone
              e e-mail se enquadram nesse conceito, bem como aquelas que, quando
              combinadas, produzem como resultado a identificação de um
              indivíduo.
            </li>
            <li>
              <strong>Dado Pessoal Sensível:</strong> O dado pessoal sensível é
              aquele que trata sobre origem racial ou étnica, convicção
              religiosa, opinião política, filiação a sindicato ou a organização
              de caráter religioso, filosófico ou político, dado referente à
              saúde ou à vida sexual; e dado genético ou biométrico.
            </li>
            <li>
              <strong>Dado Anonimizado:</strong> Trata-se de informação que
              perde a possibilidade de vinculação com seu titular, a partir da
              utilização de meios técnicos razoáveis e disponíveis para
              impossibilitar a associação entre o dado e o seu proprietário,
              seja de forma direta ou indireta. Quando anonimizado, o dado não é
              considerado pessoal pela LGPD, salvo quando o processo de
              anonimização ao qual foi submetido puder ser revertido.
            </li>
            <li>
              <strong>Dado Pseudoanonimizado:</strong> O dado pseudoanonimizado
              é aquele que passou por processo com o fito de impossibilitar sua
              associação com o seu titular, sendo mantida pelo controlador
              separadamente, em ambiente controlado e seguro, a informação que,
              quando associada ao dado pseudoanonimizado, identificará o
              indivíduo.
            </li>
            <li>
              <strong>Controlador:</strong> Trata-se da pessoa natural ou
              jurídica, de direito público ou privado, a quem competem as
              decisões referentes ao tratamento de dados pessoais.
            </li>
            <li>
              <strong>Co-controlador:</strong> Haverá co-controladores, quando
              dois ou mais responsáveis pelo tratamento determinarem
              conjuntamente as finalidades e os meios do tratamento de dados
              pessoais.
            </li>
            <li>
              <strong>Operador:</strong> É operador, a pessoa natural ou
              jurídica, de direito público ou privado, que realiza o tratamento
              de dados pessoais em nome do controlador.
            </li>
            <li>
              <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{' '}
              A ANPD é órgão da administração pública, atualmente integrante da
              Presidência da República, responsável por zelar, implementar e
              fiscalizar o cumprimento desta Lei em todo o país, com a
              prerrogativa de aplicar sanções em caso de descumprimento das
              disposições da norma.
            </li>
            <li>
              <strong>Encarregado:</strong> É a pessoa indicada pelo controlador
              e operador para atuar como canal de comunicação entre o
              controlador, os titulares dos dados, a Autoridade Nacional de
              Proteção de Dados (ANPD) e outras entidades reguladoras.
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            3. DO TRATAMENTO DE DADOS PESSOAIS E DOS PRINCÍPIOS LEGAIS:
          </p>
          <p>
            De acordo com a Lei Geral de Proteção de Dados Pessoais, tratamento
            é toda operação realizada com dados pessoais, como as que se referem
            a coleta, produção, recepção, classificação, utilização, acesso,
            reprodução, transmissão, distribuição, processamento, arquivamento,
            armazenamento, eliminação, avaliação ou controle da informação,
            modificação, comunicação, transferência, difusão ou extração.
          </p>
          <p>
            O tratamento de dados pessoais realizado por esta serventia observa
            os princípios contidos na LGPD, os quais seguem listados abaixo:
          </p>
          <ul>
            <li>
              <strong>Finalidade:</strong> O tratamento dos dados deve ser
              realizado para propósitos legítimos, específicos, explícitos e
              informados ao titular, sem possibilidade de tratamento posterior
              de forma incompatível com essas finalidades.
            </li>
            <li>
              <strong>Adequação:</strong> Deve haver compatibilidade do
              tratamento com as finalidades informadas ao titular, de acordo com
              o contexto da sua realização.
            </li>
            <li>
              <strong>Necessidade:</strong> O titular dos dados tem direito à
              limitação do tratamento ao mínimo necessário para a realização de
              suas finalidades, com abrangência dos dados pertinentes,
              proporcionais e não excessivos em relação às finalidades do
              tratamento.
            </li>
            <li>
              <strong>Livre Acesso:</strong> Deve ser garantida ao titular a
              consulta facilitada e gratuita sobre a forma e a duração do
              tratamento, bem como sobre a integralidade de seus dados pessoais.
              Dados do Registro Público de Imóveis, porém, sujeitam-se às
              disposições da legislação registral aplicável, que vinculam o
              direito de acesso às informações constantes no fólio real ao
              pagamento dos emolumentos devidos, nos termos do Art. 14 da Lei nº
              6.015/93 (Lei de Registros Públicos) e Art 30, incisos VIII e X da
              Lei nº 8.935/94 (Lei dos Notários e Registradores).
            </li>
            <li>
              <strong>Qualidade dos Dados:</strong> O titular tem o direito à
              exatidão, clareza, relevância e atualização dos dados, de acordo
              com a necessidade e para o cumprimento da finalidade de seu
              tratamento.
            </li>
            <li>
              <strong>Transparência:</strong> O titular tem direito a
              informações claras, precisas e facilmente acessíveis sobre a
              realização do tratamento e os respectivos agentes de tratamento,
              observados os segredos comercial e industrial.
            </li>
            <li>
              <strong>Segurança:</strong> Os agentes de tratamento devem prezar
              pela utilização de medidas técnicas e administrativas aptas a
              proteger os dados pessoais de acessos não autorizados e de
              situações acidentais ou ilícitas de destruição, perda, alteração,
              comunicação ou difusão.
            </li>
            <li>
              <strong>Prevenção:</strong> Deve-se prezar pela adoção de medidas
              para prevenção à ocorrência de danos em virtude do tratamento de
              dados pessoais.
            </li>
            <li>
              <strong>Não discriminação:</strong> É vedada a realização de
              tratamento de dados pessoais para fins discriminatórios ilícitos
              ou abusivos
            </li>
            <li>
              <strong>Responsabilização e Prestação de Contas:</strong> O agente
              de tratamento deve demonstrar a adoção de medidas eficazes e
              capazes de comprovar a observância e o cumprimento das normas de
              proteção de dados pessoais e, inclusive, da eficácia dessas
              medidas.
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            4. DAS BASES LEGAIS PARA O TRATAMENTO DE DADOS PESSOAIS
          </p>
          <p>
            A Lei Geral de Proteção de Dados Pessoais estabelece um rol taxativo
            de bases legais que legitimam o tratamento, dentre elas:
          </p>
          <ul>
            <li>
              Para o cumprimento de obrigação legal ou regulatória pelo
              controlador;
            </li>
            <li>
              Pela administração pública e serventias extrajudiciais (art. 23,
              §4º da LGPD), para o tratamento e uso compartilhado de dados
              necessários à execução de políticas públicas previstas em leis e
              regulamentos ou respaldadas em contratos, convênios ou
              instrumentos congêneres;
            </li>
            <li>
              Para a realização de estudos por órgão de pesquisa, garantida,
              sempre que possível, a anonimização dos dados pessoais;
            </li>
            <li>
              Quando necessário para a execução de contrato ou de procedimentos
              preliminares relacionados a contrato do qual seja parte o titular,
              a pedido do titular dos dados;
            </li>
            <li>
              Para o exercício regular de direitos em processo judicial,
              administrativo ou arbitral;
            </li>
            <li>
              Para a proteção do crédito, inclusive quanto ao disposto na
              legislação pertinente.
            </li>
            <li>
              Mediante expresso, livre e inequívoco consentimento do titular
            </li>
            <li>
              Quando necessário para atender aos interesses legítimos do
              controlador ou de terceiro, exceto no caso de prevalecerem
              direitos e liberdades fundamentais do titular que exijam a
              proteção dos dados pessoais;
            </li>
          </ul>
          <p>
            A atividade fim da serventia é a conferir cognoscibilidade aos
            direitos reais constituídos no fólio real (Art. 1º da Lei de
            Registros Públicos), por meio das informações tornadas
            manifestamente públicas pelo titular (Art. 7º, §4º da Lei 13.709). A
            base legal que ampara semelhante tratamento, portanto, é o
            cumprimento de obrigação legal (Art. 7º, II e Art. 23, caput e §4º
            da Lei 13.709).
          </p>
          <p>
            Outras operações de tratamento de dados pessoais poderão ser
            fundamentadas em uma ou mais hipóteses dentre as elencadas acima e a
            finalidade de sua realização será explicitada de forma clara ao
            titular.
          </p>
          <p>
            No tocante ao tratamento realizado com base no legítimo interesse,
            este poderá se dar sem o consentimento do titular para atendimento
            de finalidades legítimas, consideradas a partir de situações
            concretas, que incluem, mas não se limitam a: apoio e promoção de
            atividades do controlador e proteção, em relação ao titular, do
            exercício regular de seus direitos ou prestação de serviços que o
            beneficiem, respeitadas as legítimas expectativas dele e os direitos
            e liberdades fundamentais.
          </p>
          <p>
            Dentre os interesses legítimos desta serventia no tratamento de
            dados pessoais, encontram-se os de:
          </p>
          <ul>
            <li>
              Prestar, fornecer, manter, desenvolver, aprimorar, divulgar e
              ampliar a utilização dos nossos serviços;
            </li>
            <li>
              Personalizar a experiência e utilização dos nossos serviços pelo
              usuário, inclusive para o fornecimento de informações relativas à
              prestação destes serviços.
            </li>
            <li>
              Gerar análises e relatórios estatísticos sobre o funcionamento e
              operação dos nossos serviços;
            </li>
            <li>
              Possibilitar o contato com o usuário a respeito do andamento dos
              serviços que estão sendo prestados;
            </li>
            <li>
              Disponibilizar e melhorar mecanismos de segurança e monitoramento
              dos nossos serviços;
            </li>
            <li>
              Detectar e impedir a utilização dos nossos serviços para
              propósitos fraudulentos ou que visem alterar as funcionalidades
              dos nossos serviços ou a prática de abusos e atos ilegais contra o
              usuário;
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            5. DAS PRINCIPAIS CATEGORIAS DE DADOS PESSOAIS E SUAS FINALIDADES
          </p>
          <p>
            <strong>Dados do Registro Público de Imóveis:</strong> São as
            informações fornecidas pelo usuário à serventia extrajudicial
            territorialmente competente a fim de que seja realizado o registro,
            bem como as informações que já integram o registro das serventias
            extrajudiciais, de acesso público (Art. 7º, §4º LGPD c/c Art. 1º da
            Lei de Registros Públicos), tais como nome, endereço, data de
            nascimento, sexo, estado civil, direitos em relação à propriedade,
            requerimentos, instrumentos particulares registráveis, referência a
            documentos arquivados nas serventias, dados de transações
            imobiliárias, ônus e outras restrições sobre a propriedade,
            serventia territorialmente competente, etc. A base legal para o
            tratamento de tais dados é o cumprimento de obrigação legal.{' '}
          </p>
          <p>
            <strong>
              Dados de identificação e comunicação (apresentante, interessado no
              registro, titular de dados pessoais):
            </strong>{' '}
            Nome completo, e-mail, telefone, celular, endereço, documento de
            identificação (RG, CPF, CNH, etc). A base legal para o tratamento de
            tais dados depende do tipo de atividade de tratamento pretendida
            (privacidade contextual), podendo ser cumprimento de obrigação
            legal, legítimo interesse, execução de contrato, dentre outros.{' '}
          </p>
          <p>
            <strong>Dados financeiros e de pagamento:</strong> São as
            informações pessoais necessárias para que possamos processar o
            pagamento dos serviços prestados, incluindo seu CPF, endereço,
            informações bancárias de cobrança e crédito (e.g. número da agência
            e da conta corrente), número do cartão de crédito, dentre outros. Os
            dados financeiros e de pagamento são tratados para o fornecimento de
            produtos e/ou serviços, manutenção de arquivos, cumprimento de
            obrigações fiscais. A base legal para o tratamento de tais dados é o
            cumprimento de obrigação legal, especialmente a legislação fiscal.
          </p>
          <p>
            <strong>Dados de funcionários:</strong> Nome completo, inclusive o
            nome social; data de nascimento; número e imagem da Carteira de
            Identidade (RG); número do Cadastro de Pessoas Físicas (CPF); número
            e imagem da Carteira Nacional de Habilitação (CNH); fotografia 3x4;
            estado civil; idade; tipo sanguíneo e fator RH; nível de instrução
            ou de escolaridade; endereço completo; número de telefone e endereço
            de correio eletrônico (e-mail); filiação a sindicato; nome dos
            genitores; nome de usuário e senha específicos para uso dos serviços
            da Entidade Empregadora; comunicação mantida entre colaborador e
            serventia; atestados médicos. A base legal para o tratamento de tais
            dados é a execução de contrato.
          </p>
          <p>
            <strong>Dados de identificação digital:</strong> São informações
            geradas automaticamente, quais sejam, as características do
            dispositivo de acesso, as características do navegador, o Protocolo
            de Internet (IP, data e hora), as telas da Central acessadas, os
            registros de acesso à Central, os dados de geolocalização, histórico
            das solicitações realizadas Para tal coleta, a serventia fará uso de
            algumas tecnologias padrões, como cookies, que são pequenos arquivos
            de texto que um site, quando visitado, coloca no computador do
            usuário ou no seu dispositivo móvel, por navegador de internet
            (browser). Todos os navegadores permitem ao utilizador aceitar,
            recusar ou apagar cookies, em sua aba de configurações. Ao desativar
            cookies, porém, o usuário pode impedir que alguns serviços da web
            funcionem corretamente, afetando, parcial ou totalmente, a navegação
            no website. Os dados técnicos sobre o computador/dispositivo móvel
            são tratados para identificação de usuários no meio digital e
            prevenção a fraudes. A base legal para o tratamento de tais dados é
            o cumprimento de obrigação legal, especificadamente as estipuladas
            no Marco Civil da Internet (Lei nº 12.965/2014).
          </p>
          <p className="font-weight-bold pt-5">
            6. DAS ATIVIDADES DE TRATAMENTO DESENVOLVIDAS PELA SERVENTIA:
          </p>
          <Table responsive>
            <thead>
              <tr>
                <th>ATIVIDADE DE TRATAMENTO</th>
                <th>DADOS COLETADOS</th>
                <th>BASE LEGAL</th>
                <th>DURAÇÃO DO TRATAMENTO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Atendimento presencial do Usuário do Registro Público de
                  Imóveis Dados do Registro Público de Imóveis;
                </td>
                <td>Dados de identificação e comunicação;</td>
                <td>Dados financeiros</td>
                <td>
                  Cumprimento de obrigação legal (Lei de Registros Públicos) A
                  depender do ato, nos termos do Provimento 50/2015 do CNJ
                </td>
              </tr>
              <tr>
                <td>
                  Atendimento eletrônico do Usuário Remoto do Registro Público
                  de Imóveis Dados do Registro Público de Imóveis;
                </td>
                <td>Dados de identificação e comunicação;</td>
                <td>Dados financeiros</td>
                <td>
                  Cumprimento de obrigação legal (Provimentos 89 e 109 do CNJ) A
                  depender do ato, nos termos do Provimento 50/2015 do CNJ
                </td>
              </tr>
              <tr>
                <td>
                  Comunicação à COAF (Conselho de Controle de Atividades
                  Financeiras - Prevenção à Lavagem de Dinheiro e ao
                  Financiamento do Terrorismo
                </td>
                <td>
                  Dados do Registro Público de Imóveis; Dados de identificação e
                  comunicação; Dados financeiros; Outros dados do beneficiário
                  final
                </td>
                <td>05 anos (nos termos do Provimento 88/2019 do CNJ)</td>
              </tr>
              <tr>
                <td>Gestão de Relações Laborais</td>
                <td>Dados de funcionários; Dados financeiros e de pagamento</td>
                <td>
                  Execução de contrato; Cumprimento de obrigação legal (CLT)
                </td>
                <td>
                  Até 10 anos após extinção do contrato (em atendimento a prazos
                  prescricionais)
                </td>
              </tr>
              <tr>
                <td>Análise de currículos e recrutamentos</td>
                <td>Dados de identificação e comunicação; Currículos</td>
                <td>Consentimento</td>
                <td>05 anos ou até a oposição do titular</td>
              </tr>
              <tr>
                <td>Gestão de Prestadores de Serviços</td>
                <td>
                  Gestão de Prestadores de Serviços Dados de identificação e
                  comunicação; Dados financeiros e de pagamento
                </td>
                <td>Execução de contrato; cumprimento de obrigação legal </td>
                <td>
                  Até 10 anos após extinção do contrato (em atendimento a prazos
                  prescricionais)
                </td>
              </tr>
              <tr>
                <td>Controle de Acesso às Instalações da Serventia </td>
                <td>Dados biométricos</td>
                <td>Execução de contrato (funcionários); </td>
                <td>Durante a vigência do contrato de trabalho</td>
              </tr>
              <tr>
                <td>Sistema de Videovigilância</td>
                <td>Imagens de funcionários e visitantes</td>
                <td>Legítimo Interesse (segurança)</td>
                <td>365 dias</td>
              </tr>
              <tr>
                <td>
                  Atendimento de Solicitações dos Titulares de Dados Pessoais
                  pelo Encarregado
                </td>
                <td>Dados de identificação e comunicação;</td>
                <td>Cumprimento de obrigação legal (Lei 13.709 – LGPD)</td>
                <td>
                  Enquanto perdurar responsabilidades de tratamentos conexos
                </td>
              </tr>
              <tr>
                <td>Atendimento Geral (Sugestões/Reclamações</td>
                <td>Dados de identificação e comunicação;</td>
                <td>Legítimo Interesse (melhoria dos serviços)</td>
                <td>
                  Enquanto perdurar responsabilidades de tratamentos conexos
                </td>
              </tr>
              <tr>
                <td>Cookies do Website</td>
                <td>Dados de identificação digital;</td>
                <td>
                  Cumprimento de obrigação legal (Lei nº 12.965 – Marco Civil da
                  Internet)
                </td>
                <td>
                  Mínimo de 06 meses, na forma do art. 15 da Lei nº 12.965, e
                  máximo de 01 ano
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="font-weight-bold pt-5">7. POLÍTICA DE COOKIES</p>
          <p>
            Cookies são pequenos arquivos de texto pequenos colocados no
            dispositivo do usuário, os quais podem ser coletados posteriormente
            por servidores Web no domínio que os colocou. É possível escolher
            quais cookies serão utilizados durante a navegação, sendo assim a
            base legal para o tratamento de dados pessoais, neste caso, é o{' '}
            <strong>consentimento do titular</strong>.
          </p>
          <ul>
            <li>
              <strong>Cookies de sessão:</strong> Cookies que são utilizados “na
              sessão”, a cada vez que o usuário visita o website, expirando em
              seguida, quando este o deixa. Esses cookies não são armazenados no
              dispositivo permanentemente e ajudam a minimizar a necessidade de
              transferir dados pessoais pela internet. Eles também podem ser
              excluídos ou ter a permissão de uso recusada pelo usuário,
              contudo, tais ações prejudicarão o desempenho e a sua experiência
              no uso do website. Os cookies também utilizam registros de hora de
              acesso e saída da página web.
            </li>

            <li>
              <strong>Cookies de rastreamento:</strong> Cookies que permitem o
              reconhecimento de visitantes que retornam à página do website da
              serventia. Ao combinar um identificador anônimo gerado
              aleatoriamente, o cookie de rastreamento mantém o controle sobre o
              local de onde veio o usuário do site, o mecanismo de busca que
              pode ter usado, o link em que clicou, a senha usada e sua
              localização geográfica ao acessar a página.
            </li>

            <li>
              <strong>Cookies persistentes:</strong> Cookie que é salvo no
              dispositivo do usuário por um período fixo (às vezes, por algumas
              horas, outras, por um ano ou mais) e não é excluído ao encerrar o
              navegador. Os cookies persistentes são utilizados quando o website
              precisa lembrar quem é o visitante por mais de uma sessão de
              navegação. Esse tipo de cookie pode ser usado para armazenar
              preferências, para que sejam lembradas em uma próxima visita ao
              site.
            </li>

            <li>
              <strong>Cookies analíticos ou de desempenho:</strong> Cookies de
              desempenho são utilizados para melhorar a sua experiência no uso
              do website. Esses cookies ajudam o CORI-BR a adaptar o conteúdo do
              website para refletir o que os usuários consideram mais
              interessante e identificar quando surgem problemas técnicos com as
              páginas relacionadas aos serviços ofertados. Esses dados também
              podem ser utilizados para compilar relatórios que nos ajudam a
              analisar como as páginas são utilizadas, quais são os problemas
              mais comuns e como podemos melhorá-las.
            </li>
          </ul>
          <p>
            Os dados e os registros de atividades coletados no website da
            serventia serão armazenados em ambiente seguro e controlado, pelo
            prazo mínimo de 6 (seis) meses, nos termos do Marco Civil da
            Internet (art. 1
          </p>
          <p>
            <strong>Desativar Cookies:</strong> É possível impedir a atuação de
            alguns cookies por meio das configurações do navegador (consulte a
            função “Ajuda” do seu navegador web para saber como). No entanto,
            esteja ciente que a eventual desativação de algum cookie poderá
            afetar a funcionalidade deste e de outros sites que você visita. A
            desativação de cookies possivelmente resultará em um mau
            funcionamento do website desta serventia.{' '}
          </p>
          <p className="font-weight-bold pt-5">
            8. DO COMPROMETIMENTO COM O PROVIMENTO 23 DA CORREGEDORIA GERAL DE
            JUSTIÇA DO ESTADO DE SÃO PAULO
          </p>
          <p>
            O 13º Ofício de Registro de Imóveis da Comarca de São Paulo declara
            seu integral comprometimento com o Provimento 23/2020 CGJ-SP, que
            dispõe sobre a proteção de dados pelas serventias extrajudiciais no
            Estado de São Paulo, tendo adotado as seguintes ações no âmbito do
            Compliance de Proteção de Dados em implementação na serventia:
          </p>
          <ul>
            <li>
              Todos os prepostos e prestadores terceirizados de serviços foram
              orientados sobre os deveres, requisitos e responsabilidades
              decorrentes da Lei nº 13.709/2018 (item 132.1)
            </li>
            <li>
              Foram arquivados, em classificador próprio, os comprovantes e
              registros de participação em cursos, seminários, conferências,
              workshops e afins, proporcionados pelo Oficial ou um dos
              Encarregados, com a indicação do conteúdo das orientações, bem
              como da carga horária, transmitidas nesses eventos (item 132.5)
            </li>
            <li>
              Foi nomeado Encarregado de proteção de dados, inclusive
              contratando serviço adicional de Encarregado Externo (DPO as a
              service) de escritório de advocacia especializado no ambiente
              registral e em proteção de dados, o Chezzi Advogados, que atuarão
              como canal de comunicação entre os titulares de dados pessoais e a
              ANPD. A nomeação ocorreu mediante portaria (divulgada a todos os
              funcionários) e contrato escrito arquivado em classificador
              próprio (item 133 a 133.5)
            </li>
            <li>
              Foi divulgada a Política de Privacidade da serventia e de Canal de
              Atendimento ao titular de dados pessoais, estando em processo de
              mapeamento dos dados pessoais para instituição do sistema de
              controle de fluxo (item 133.6)
            </li>
            <li>
              Funcionários foram instruídos para a expedição de certidão ou
              informação restrita ao que constar nos indicadores e índices
              pessoais, inclusive solicitações de certidões ou informações em
              bloco, ou agrupadas, ou segundo critérios não usuais de pesquisa,
              nos termos dos itens 144 e seguintes.
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            9. DOS DIREITOS DOS TITULARES DE DADOS PESSOAIS
          </p>
          <p>
            A Lei Geral de Proteção de Dados Pessoais tem a autodeterminação
            informativa como princípio basilar no tocante aos direitos dos
            titulares (art. 18). Entende-se por autodeterminação informativa a
            possibilidade do titular de compreender e influenciar, sujeito às
            determinadas restrições legais, os tratamentos que são realizados
            com os seus dados pessoais, conferindo transparência a estas
            operações.
          </p>

          <p>
            Nem todos os direitos previstos no art. 18 da LGPD poderão ser
            exercidos perante o acervo público da serventia extrajudicial, em
            razão das peculiaridades desse acervo e da incidência das regras
            específicas do microssistema registral.
          </p>
          <p>
            Esta serventia, no contexto de suas atividades legais de tratamento
            de dados pessoais, reforça o seu compromisso de respeito aos
            direitos dos titulares, sendo estes:
          </p>
          <ul>
            <li>
              <p className="font-weight-bold pt-5">
                Confirmação da existência de tratamento (Art. 18, I, LGPD)
              </p>
              <p>
                O titular de dados pessoais poderá questionar, junto a esta
                serventia, se há realização de operações de tratamento relativas
                a dados pessoais seus, por meio do Canal de Atendimento com o
                Encarregado.
              </p>
              <p>
                A confirmação de existência ou o acesso a dados pessoais serão
                providenciados, mediante requisição do titular, a qual deve ser
                formulada em formulário contido neste website, sendo garantida a
                gratuidade da solicitação.
              </p>
              <p>
                Esta serventia responderá a requisição no prazo de até 15
                (quinze) dias, contados da data do requerimento do titular com
                comprovação de autenticidade.
              </p>
            </li>

            <li>
              <p className="font-weight-bold pt-5">
                Acesso aos dados (Art. 18, II, LGPD)
              </p>
              <p>
                O titular de dados pessoais poderá solicitar e receber uma cópia
                de todos os eventuais dados pessoais coletados e armazenados;
              </p>
              <p>
                Dados do Registro Público de Imóveis sujeitam-se às disposições
                da legislação registral aplicável, que vinculam o direito de
                acesso às informações constantes no fólio real ao pagamento dos
                emolumentos devidos, nos termos do Art. 14 da Lei nº 6.015/73
                (Lei de Registros Públicos) e do Art. 30, Incisos VIII e X, da
                Lei nº 8.935/94 (Lei dos Notários e Registradores).
              </p>
            </li>
            <li>
              <p className="font-weight-bold pt-5">
                Correção de dados incompletos, inexatos ou desatualizados (Art.
                18, III, LGPD):
              </p>
              <p>
                O titular de dados pessoais poderá requisitar a correção de
                dados que estejam incompletos, inexatos ou desatualizados.
              </p>
              <p>
                Dados do Registro Público de Imóveis sujeitam-se às disposições
                da legislação registral aplicável, que estabelece procedimento
                específico para a retificação do registro, averbação ou anotação
                nos Arts. 110 e seguintes da Lei de Registros Públicos, não
                sendo devido o pagamento de selos e taxas apenas nos casos em
                que a retificação decorra de erro imputável ao oficial.
              </p>
            </li>
            <li>
              <p className="font-weight-bold pt-5">
                Anonimização, bloqueio ou eliminação de dados desnecessários,
                excessivos ou desconformes com a LGPD (Art. 18, IV, LGPD):
              </p>
              <p>
                Dados do Registro Público de Imóveis, por seu interesse público,
                não poderão ser anonimizados, bloqueados ou eliminados, sob pena
                de comprometer o arquivo público destinado a conferir
                cognoscibilidade aos direitos reais.
              </p>
              <p>
                Ressalta-se, no entanto, que sempre que possível, os dados
                utilizados em pesquisas jornalísticas, científicas ou afins,
                serão anonimizados.
              </p>
            </li>
            <li>
              <p className="font-weight-bold pt-5">
                Portabilidade dos dados a outro fornecedor de serviço ou produto
              </p>
              <p>
                O titular de dados pessoais poderá requisitar que seus dados
                pessoais sejam disponibilizados a outro fornecedor de serviço ou
                produto, respeitados o segredo comercial e industrial da
                instituição, bem como os limites técnicos de sua infraestrutura.
              </p>
              <p>
                Baseando-se nas diretrizes do Art. 20 do Regulamento Geral
                Europeu de Proteção de Dados (GDPR), que inspirou a edição da
                LGPD, o titular somente poderá exercer o direito de
                portabilidade de dados em operações de tratamento cuja base
                legal seja o consentimento ou a execução de contrato. Dados do
                Registro Público de Imóveis não são coletados mediante
                consentimento ou assinatura de contrato (Art. 7º, §4º da LGPD
                c/c Art. 1º da Lei de Registros Públicos).
              </p>
              <p>
                A orientação adotada pela Corregedoria Geral de Justiça do
                Estado de São Paulo também é a de que “os responsáveis pelas
                delegações dos serviços extrajudiciais de notas e de registro
                não se equiparam a fornecedores de serviços ou produtos para
                efeito de portabilidade de dados pessoais” (item 147 do
                Provimento nº 23 CGJ-SP).
              </p>
              <p>
                Regulamentações sobre o direito de portabilidade de dados
                poderão ser proferidas pela Autoridade Nacional de Proteção de
                Dados (Arts. 17, 18, inciso V e 40 da LGPD).
              </p>
            </li>

            <li>
              <p className="font-weight-bold pt-5">
                Eliminação dos dados pessoais tratados com o consentimento do
                titular (Art. 18, VI, LGPD)
              </p>
              <p>
                O titular de dados pessoais poderá requisitar a exclusão de
                dados pessoais tratados nesta serventia, que não procederá com a
                eliminação apenas se houver um motivo legítimo para a sua
                manutenção (Art. 16 LGPD), como eventual obrigação legal de
                retenção de dados.
              </p>
              <p>
                Na hipótese de eliminação, a serventia se reserva o direito de
                escolher o procedimento de eliminação empregado,
                comprometendo-se a utilizar mecanismo que evite a recuperação
                dos dados.
              </p>
              <p>
                Dados do Registro Público de Imóveis não poderão ser eliminados
                do fólio real, por constituírem dados tornados manifestamente
                públicos pelo titular, considerando a própria publicidade que se
                espera dos serviços notariais e registrais para a constituição
                de direitos, aos quais se dispensa a coleta de consentimento
                (art. 7º, §4º da Lei Geral de Proteção de Dados c/c art. 1º da
                Lei de Registros Públicos). Nos termos do art. 7º, §1º da Lei nº
                8.159/1991 (Lei da Política Nacional de Arquivos Públicos e
                Privados), são públicos os conjuntos de documentos produzidos e
                recebidos por entidades privadas encarregadas da gestão de
                serviços públicos, a exemplo dos serviços notariais e
                registrais, em consonância com o art. 236 da Constituição
                Federal.
              </p>
            </li>

            <li>
              <p className="font-weight-bold pt-5">
                Informação das entidades públicas e privadas com as quais esta
                serventia realizou o Uso Compartilhado de dados (Art. 18 VII,
                LGPD).
              </p>
              <p>
                O titular de dados pessoais possui o direito de saber com quais
                entidades públicas e privadas esta serventia pode realizar o
                compartilhamento de dados, o que é informado por meio desta
                Política de Privacidade e Proteção de Dados.
              </p>
            </li>

            <li>
              <p className="font-weight-bold pt-5">
                Informação sobre a possibilidade de não fornecer consentimento e
                sobre as consequências da negativa (Art. 18, VIII, LGPD);{' '}
              </p>
              <p>
                Sempre que a coleta de dados de determinado serviço esteja
                amparada no consentimento, o titular de dados pessoais será
                informado sobre a possibilidade de não fornecer consentimento.
                Em determinados casos, a negativa do consentimento poderá
                implicar na impossibilidade de prestação de determinados
                serviços, e a serventia indicará tais casos e suas
                consequências.
              </p>
            </li>

            <li>
              <p className="font-weight-bold pt-5">
                Revogação do consentimento (Art. 18, IX, LGPD)
              </p>
              <p>
                Dados do Registro Público de Imóveis são dados tornados
                manifestamente públicos pelo titular, considerando a própria
                publicidade que se espera dos serviços notariais e registrais
                para a constituição de direitos, aos quais se dispensa a coleta
                de consentimento (art. 7º, §4º da Lei Geral de Proteção de Dados
                c/c art. 1º da Lei de Registros Públicos).
              </p>
              <p>
                O titular de dados pessoais poderá revogar o consentimento
                concedido a determinadas operações de tratamento, hipótese que
                não afetará a legalidade de qualquer tratamento realizado antes
                da revogação do consentimento. Em determinados casos, a
                revogação poderá implicar na impossibilidade de prestação de
                determinados serviços, esta serventia indicará quais serviços
                podem ser descontinuados.
              </p>
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            10. DA ELIMINAÇÃO DE DADOS PESSOAIS
          </p>
          <p>
            O pedido de exclusão dos dados e interrupção do tratamento será
            acatado na medida do possível legal. A LGPD, a Lei de Registros
            Públicos e o Provimento CNJ 50/2015 impõem que algumas informações
            permaneçam sempre públicas, de modo que haverá, tão-somente, a
            exclusão das informações tratadas para algumas das finalidades
            expressas nesta Política.
          </p>
          <p>
            Os dados coletados por esta serventia serão excluídos nas seguintes
            situações:
          </p>
          <ul>
            <li>
              Quando a finalidade para a qual a informação foi coletada tenha
              sido alcançada ou quando o dado deixar de ser necessário ou
              pertinente para o alcance desta finalidade, conforme descrito
              nesta Política;
            </li>
            <li>
              Quando da revogação do consentimento por parte do Titular, nos
              casos em que este se faça necessário;
            </li>
            <li>Mediante determinação da autoridade competente para tanto.</li>
          </ul>
          <p>
            Os dados pessoais poderão ser conservados por esta serventia,
            contudo:
          </p>
          <ul>
            <li>Para cumprimento de obrigação legal ou regulatória;</li>
            <li>
              Para estudo por órgão de pesquisa, garantida, sempre que possível,
              a anonimização dos dados pessoais;
            </li>
            <li>
              Para transferência a terceiro, desde que respeitados os requisitos
              de tratamento de dados dispostos na LGDP;
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            11. DO COMPARTILHAMENTO DOS DADOS PESSOAIS
          </p>
          <p>
            O compartilhamento de dados pessoais com órgãos da Administração
            Pública deverá atender a uma finalidade específica, seja para a
            execução de uma política pública, seja para o cumprimento de uma
            atribuição legal, respeitando os princípios de proteção de dados
            pessoais, conforme o artigo 26 da Lei Geral de Proteção de Dados.
          </p>
          <p>
            Dados do Registro Público de Imóveis, portanto, apenas serão
            compartilhados em cumprimento a obrigações legais e/ou normativas
            ou, quando forem adotados mecanismos de anonimização que não
            permitam a identificação do titular do dado pessoal.{' '}
          </p>
          <p>
            Na execução de sua atividade fim, a serventia possui a obrigação de
            avaliar a existência de suspeição nas operações ou propostas de
            operações dos usuários e comunicar suspeitas de lavagem de dinheiro
            ou financiamento de terrorismo ao Conselho de Controle de Atividades
            Financeiras (Provimento 88 do CNJ). Também possui a obrigação de
            encaminhar a Declaração de Operações Imobiliárias (DOI) à Receita
            Federal (IN RFB nº 1112/2010). Ademais, caso não adote mecanismo de
            comunicação sincronizada (Webservice), deve diariamente atualizar o
            Banco de Dados Light (BDL) e o banco de imagens do ambiente
            compartilhado da Central Registradores de Imóveis (item 338 das
            Normas de Serviço de São Paulo), para fim de viabilização do
            registro eletrônico.
          </p>
          <p>
            Quando a serventia recebe solicitações por meio do Sistema de
            Registro Eletrônico de Imóveis (SREI), as Centrais de Serviços
            Eletrônicos Compartilhados bem como o ONR poderão atuar como
            co-controladores (joint controllers) para a viabilização dos
            serviços de registro eletrônico (Art. 9º, parágrafo único do
            Provimento 89/2019 CNJ). Frise-se, porém, que esses agentes não
            praticarão o ato de inscrição de direitos no fólio real, por se
            tratar de incumbência específica e exclusiva do Oficial de Registro
            de Imóveis territorialmente competente, que é o único responsável
            pelo processamento e atendimento das solicitações de registro (Art.
            25, parágrafo único, do Provimento 89/2019 CNJ).
          </p>
          <p>
            No que tange às demais atividades de tratamento, esta serventia
            apenas compartilhará dados tratados com terceiros os dados pessoais
            tratados nas seguintes hipóteses:
          </p>
          <ul>
            <li>Para o cumprimento de obrigação legal e regulatória;</li>
            <li>
              Com a Administração Pública, para o tratamento e uso compartilhado
              de dados necessários à execução de políticas públicas previstas em
              leis e regulamentos;
            </li>
            <li>
              Para a realização de estudos por órgão de pesquisa, garantida,
              sempre que possível, a anonimização dos dados;
            </li>
            <li>
              Quando necessário para a execução de contrato ou de procedimentos
              preliminares relacionados a contrato do qual seja parte o titular,
              a pedido do titular dos dados;
            </li>
            <li>
              Para o exercício regular de direitos em processo judicial,
              administrativo ou arbitral;
            </li>
            <li>
              Para a proteção da sua vida ou da incolumidade física, bem como a
              de terceiros;
            </li>
            <li>
              Para a tutela da saúde, em procedimento realizado por profissional
              da área ou entidade sanitária;
            </li>
            <li>
              Quando necessário para atender aos interesses legítimos desta
              serventia ou de terceiros, exceto nos casos que prevalecem os
              direitos e liberdades fundamentais do titular que exijam a
              proteção dos dados pessoais;
            </li>
            <li>Caso o titular dos dados consinta;</li>
            <li>
              Para proteção de crédito, inclusive quanto ao disposto na
              legislação pertinente.
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            12. TRANSFERÊNCIA INTERNACIONAL DE DADOS PESSOAIS
          </p>
          <p>
            Segundo a LGPD, a transferência internacional de dados pessoais
            somente será permitida nos seguintes casos:
          </p>
          <ul>
            <li>
              Para países ou organismos internacionais com grau de proteção de
              dados pessoais adequado;
            </li>
            <li>
              Quando o controlador oferecer e comprovar garantias de cumprimento
              dos princípios, dos direitos do titular e do regime de proteção de
              dados previstos na LGPD, na forma de: cláusulas contratuais
              específicas para determinada transferência, cláusulas-padrão
              contratuais, normas corporativas globais, selos, certificados e
              códigos de conduta regularmente emitidos;
            </li>
            <li>
              Quando a transferência for necessária para a cooperação jurídica
              internacional entre órgãos públicos de inteligência, de
              investigação e de persecução, de acordo com os instrumentos de
              direito internacional;
            </li>
            <li>
              Quando a transferência for necessária para a proteção da vida ou
              da incolumidade física do titular ou de terceiro;
            </li>
            <li>Quando a autoridade nacional autorizar a transferência;</li>
            <li>
              Quando a transferência resultar em compromisso assumido em acordo
              de cooperação internacional;
            </li>
            <li>
              Quando a transferência for necessária para a execução de política
              pública ou atribuição legal do serviço público;
            </li>
            <li>
              Quando o titular tiver fornecido o seu consentimento específico e
              em destaque para a transferência, com informação prévia sobre o
              caráter internacional da operação, distinguindo claramente esta de
              outras finalidades;
            </li>
            <li>
              Para o cumprimento de obrigação legal ou regulatória pelo
              controlado;
            </li>
            <li>
              Quando necessário para a execução de contrato ou de procedimentos
              preliminares relacionados a contrato do qual seja parte o titular,
              a pedido do titular dos dados;
            </li>
            <li>
              Para exercício regular de direitos em processo judicial,
              administrativo ou arbitral.
            </li>
            <p>
              A transferência internacional de dados pessoais será realizada por
              esta serventia com fundamento nas bases indicadas nesta Política e
              nos termos da legislação vigente.
            </p>
          </ul>
          <p className="font-weight-bold pt-5">
            13. DAS BOAS PRÁTICAS DE SEGURANÇA DA INFORMAÇÃO
          </p>
          <p>
            Em conformidade com os princípios da LGPD e com as boas práticas de
            segurança da informação e de proteção de dados pessoais, esta
            serventia garante que os dados pessoais coletados são tratados de
            forma íntegra e segura, de acordo com padrões de segurança da
            informação, confidencialidade e integridade pelo tempo necessário
            para realizar as finalidades para as quais foram coletados ou para
            cumprir com os requerimentos legais aplicáveis.
          </p>
          <p>
            Dados do Registro Público de Imóveis sujeitam-se ainda às
            disposições do Provimento nº 74/2018 do CNJ, que versa sobre os
            requisitos de tecnologia da informação das serventias
            extrajudiciais. Por isso, esta serventia adota sistemas de
            videovigilância, controles de acesso em suas instalações, unidade de
            alimentação ininterrupta (nobreak), refrigeração compatível com os
            equipamentos de hardware, serviços de backup, softwares antivírus e
            antissequestro, softwares licenciados para uso comercial, firewall,
            proxy, dentre outros controles preventivos, detectivos e corretivos
            de segurança da informação. Para facilitar a governança desses
            ativos, esta serventia também possui inventário de ativos de
            hardware e software arquivados em sua sede.
          </p>
          <p>
            Insta salientar, contudo, que nenhum sistema é completamente seguro.
            Conforme previsto na legislação, as medidas de segurança existentes
            consideram a natureza dos dados e de tratamento, os riscos
            envolvidos, a tecnologia existente e sua disponibilidade.
          </p>
          <p>
            Os dados pessoais tratados somente serão acessados por pessoas
            autorizadas, à luz do que dispõe a legislação vigente, e capacitadas
            para lhes conferir o tratamento adequado, conforme medidas de
            segurança adequadas para a proteção contra acesso não autorizado,
            alteração, divulgação ou destruição de dados pessoais coletados e
            armazenados.
          </p>
          <p>
            Em caso de incidente de segurança que envolva dados pessoais, a
            ocorrência será comunicada ao Juiz Corregedor Permanente em até 24
            horas (item 139 do Provimento 23 da CGJ-TJSP), à ANPD e ao titular,
            quando envolver risco ou dano relevante (art. 48 da LGPD).
          </p>
          <p>
            A comunicação sobre a descrição da natureza, riscos, titulares
            envolvidos, medidas técnicas e de segurança utilizadas, risco e
            medidas adotadas para o tratamento do incidente, será feita conforme
            diretrizes e o prazos definido pela ANPD, sem prejuízo da
            comunicação ao Juiz Corregedor Permanente.{' '}
          </p>
          <p className="font-weight-bold pt-5">
            14. INSTRUÇÕES DE SEGURANÇA WEB
          </p>
          <p>
            O Controlador responsável por ditar as diretrizes de tratamento é o
            delegatário desta serventia. Todos os colaboradores são treinados
            para compreender a importância da privacidade e proteção. Tem-se o
            compromisso de cumprir a legislação de proteção de Dados, por meio
            da adoção de medidas de segurança da informação.
          </p>
          <p>
            Esta serventia, visando garantir uma maior segurança quando no
            acesso do seu Website, sugere ao usuário que siga as seguintes
            precauções:
          </p>
          <ul>
            <li>
              Não responder nem clicar em links provenientes de e-mails
              desconhecidos;
            </li>
            <li>Não acessar sites suspeitos;</li>
            <li>
              Manter mecanismos de proteção ativos e atualizados, como antivírus
              e antimalware;
            </li>
            <li>
              Não instalar programas ou aplicativos de fontes estranhas ou
              ilegais.
            </li>
          </ul>
          <p>
            Independente das outras isenções e declarações elencadas na presente
            Política, o usuário, ao utilizar os serviços ofertados por esta
            serventia, declara-se ciente e concorda com as seguintes
            disposições:
          </p>
          <ul>
            <li>
              Esta serventia, bem como os seus parceiros, colaboradores e afins
              não poderão ser responsabilizados por fatos oriundos de atividades
              criminosas (e.g. ataque hacker), caso fortuito ou força maior.
            </li>
            <li>
              Esta serventia, bem como os seus parceiros, colaboradores e afins
              não poderão ser responsabilizados por quaisquer erros e/ou
              inconsistências na transmissão dos dados, bem como relacionados à
              qualidade ou disponibilidade da conexão de internet, capazes de
              obstar o adequado recebimento de informações;
            </li>
            <li>
              Esta serventia, bem como seus colaboradores e parceiros, não serão
              responsabilizados pelo uso do domínio eletrônico em discordância
              com as disposições elencadas nesta Política (e.g. imputação de
              dados, por parte de algum usuário, desatualizados, incompletos ou
              inverídicos);
            </li>
            <li>
              O usuário reconhece que incapacidade técnica e econômica de
              prevenção absoluta contra ataques, invasões, vírus, vazamento e
              perda de dados ou outros atos ilícitos que porventura aconteçam no
              domínio eletrônico, isentando, assim, esta serventia e seus
              colaboradores, bem como os operadores e encarregados de qualquer
              dano, indireto ou direto, advindos desses infelizes eventos.
            </li>
          </ul>
          <p className="font-weight-bold pt-5">
            15. DA ATUALIZAÇÃO DESTA POLÍTICA DE PRIVACIDADE
          </p>
          <p>
            Esta Política de Privacidade e Proteção de Dados Pessoais poderá ser
            alterada a qualquer tempo caso haja necessidade. Por isso,
            recomenda-se que seja consultada com regularidade e verificada a
            data de modificação.
          </p>
          <p>
            Se após a leitura desta Política de Privacidade e Proteção de Dados
            Pessoais restar qualquer dúvida ao usuário, ou por qualquer razão
            precisar se comunicar para assuntos envolvendo os seus dados
            pessoais, o contato poderá ser realizado por um dos e-mails dos
            encarregados:
          </p>
          <hr />
          <p>
            <strong>Encarregado (DPO):</strong> Patrícia Lopes Hermenegildo
          </p>
          <p>E-mail: lgpd@13registro.com.br</p>
        </div>
      </LayoutSubpage>
      <LayoutFooter />
    </>
  )
}
export default PoliticaDePrivacidade
