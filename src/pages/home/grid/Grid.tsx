import { Card } from '../../../components'
import * as S from './style'

interface Content {
  title: string
  image: string
}

interface GridProps {
  content: Content[]
}

export const Grid = ({ content }: GridProps) => {
  const border = '25px solid white'

  return (
    <S.Grid>
      <S.LeftSide>
        <Card
          image={content[0].image}
          title={content[0].title}
          style={{ width: '50%', borderRight: border }}
        />
        <Card
          image={content[1].image}
          title={content[1].title}
          style={{ width: '50%' }}
        />
        <Card
          image={content[2].image}
          title={content[2].title}
          style={{ width: '100%', borderTop: border }}
        />
      </S.LeftSide>
      <Card
        style={{ width: '35%', borderLeft: border }}
        image={content[3].image}
        title={content[3].title}
      />
    </S.Grid>
  )
}
