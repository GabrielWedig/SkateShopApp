import { Main, ProductsSwipper, Grid } from '.'
import { Container } from '../../components'
import news from './news.json'
import popular from './popular.json'

export const Home = () => {
  return (
    <Container>
      <Main />
      <Grid content={popular} />
      <ProductsSwipper title="Novidades" products={news} />
    </Container>
  )
}
