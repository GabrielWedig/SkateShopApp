import { MailInput } from '../inputs'
import * as S from './style'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export const Footer = () => {
  const helpItems = [
    'Dúvidadas Frequentes',
    'Formas de Pagamento',
    'Envios',
    'Contatos'
  ]

  const institutionalItems = ['Sobre Nós', 'Time', 'Sedes']

  return (
    <S.Footer>
      <div>
        <h3>Ajuda</h3>
        <nav>
          <ul>
            {helpItems.map((item) => (
              <li>
                <button>{item}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <h3>Institucional</h3>
        <nav>
          <ul>
            {institutionalItems.map((item) => (
              <li>
                <button>{item}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <S.MailBox>
        <h3>Social</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia.
          Laudantium hic quo error placeat quas illo tempora! Perspiciatis ut,
          ipsa cumque maxime libero commodi illo eaque. Sint, dolorum nisi?
        </p>
        <MailInput />
      </S.MailBox>
      <S.SocialBox>
        <div>
          <button>
            <FaYoutube size={20} />
          </button>
          <button>
            <FaFacebook size={20} />
          </button>
          <button>
            <FaTwitter size={20} />
          </button>
          <button>
            <FaInstagram size={20} />
          </button>
        </div>
        <p>Copyright © 2024 Gabriel Wedig Dev todos direitos reservados.</p>
      </S.SocialBox>
    </S.Footer>
  )
}
