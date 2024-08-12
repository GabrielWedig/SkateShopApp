import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 100px 0;
  display: flex;
  gap: 100px;

  h3 {
    margin-bottom: 20px;
  }
`

export const MailBox = styled.div`
  width: 400px;

  p {
    font-size: 14px;
    margin-bottom: 30px;
  }
`

export const SocialBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 300px;

  p {
    font-size: 14px;
  }

  div {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
`
