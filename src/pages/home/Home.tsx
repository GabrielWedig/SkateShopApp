import { MainSwipper, News, Popular } from '.'
import { Container, Header } from '../../components'

export const Home = () => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '160px' }}>
        <MainSwipper />
        <Popular />
        <News />
      </Container>
    </>
  )
}
