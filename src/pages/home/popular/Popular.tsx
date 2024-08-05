import { Card } from '../../../components'
import * as S from './style'
import mock from './mock.json'

export const Popular = () => {
  return (
    <S.Popular>
      <S.LeftSide>
        <Card
          image={mock[0].image}
          title={mock[0].title}
          style={{ width: '50%', borderRight: '10px solid white' }}
        />
        <Card
          image={mock[1].image}
          title={mock[1].title}
          style={{ width: '50%' }}
        />
        <Card
          image={mock[2].image}
          title={mock[2].title}
          style={{ width: '100%', borderTop: '10px solid white' }}
        />
      </S.LeftSide>
      <Card
        style={{ width: '35%', borderLeft: '10px solid white' }}
        image={mock[3].image}
        title={mock[3].title}
      />
    </S.Popular>
  )
}
