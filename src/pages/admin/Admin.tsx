import { TopBar } from '.'
import { Container } from '../../components'
import { scrollToSection } from '../../utils'
import * as S from './style'

export const Admin = () => {
  const sections = [{ title: 'Top Bar', name: 'top-bar' }]

  return (
    <Container>
      <S.Navigation>
        {sections.map((section) => (
          <li>
            <button onClick={() => scrollToSection(section.name)}>
              {section.title}
            </button>
          </li>
        ))}
      </S.Navigation>
      <S.Content>
        <h1>Painel do Admin</h1>
        <TopBar />
      </S.Content>
    </Container>
  )
}
