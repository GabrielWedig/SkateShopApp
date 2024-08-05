import { Container, Header } from '../../components'
import { MainSwipper } from './MainSwipper/MainSwipper'

export const Home = () => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '160px' }}>
        <MainSwipper />
      </Container>
    </>
  )
}
