import { Main, ProductsSwipper, Grid } from '.'
import { Container, Footer, Header } from '../../components'
import news from './news.json'
import popular from './popular.json'

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Main />
        <Grid content={popular} />
        <ProductsSwipper title="Novidades" products={news} />
        <Footer />
      </Container>
    </>
  )
}
