import React from 'react'
import styled from '@emotion/styled'
import { ShowQRCode } from '../../../components/ShowQRCode'

export const SendingDisplayPage = () => {
  // const [text] = useLinkedState(sendingStore)

  return (
    <ContentWrapper>
      <ShowQRCode />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
`
