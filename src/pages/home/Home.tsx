import { MainSwipper, ProductsSwipper, Grid } from '.'
import { Container, Footer, Header } from '../../components'
import news from './news.json'
import popular from './popular.json'

export const Home = () => {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '160px' }}>
        <MainSwipper />
        <Grid content={popular} />
        <ProductsSwipper title="Novidades" products={news} />
        <Footer />
      </Container>
    </>
  )
}
