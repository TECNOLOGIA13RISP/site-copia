import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faShareAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
import * as S from './styles'

export default function HomeContato() {
  return (
    <S.Wrapper id="contato">
      <Container>
        <div className="contact-box">
          <h2>Entre em contato com o 13RISP</h2>
          <div className="title-line" />
          <p>
            Utilize uma das opções a seguir ou preencha o formulário e clique em
            enviar. Retornaremos o mais breve possível.
          </p>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <div>
              <h3>Endereço</h3>
              <address>
                Rua Inácio Pereira da Rocha, 142 - 1º Andar
                <br />
                Vila Madalena - São Paulo/SP - 05432-010
              </address>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhoneAlt} />
            <div>
              <h3>Telefone</h3>
              <a href="tel:+551151862800">(11) 5186-2800</a>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faShareAlt} />
            <div>
              <h3>Siga-nos</h3>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/13registrosp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/13registro"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/13registro/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </S.Wrapper>
  )
}
