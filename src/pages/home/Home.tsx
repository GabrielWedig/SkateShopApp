import { Brands, MainSwipper, Popular, Shirts } from '.'
import { Container, Header } from '../../components'

export const Home = () => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '160px' }}>
        <MainSwipper />
        <Brands />
        <Popular />
        <Shirts />
      </Container>
    </>
  )
}
