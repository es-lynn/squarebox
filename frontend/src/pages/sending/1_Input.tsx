import React from 'react'
import styled from '@emotion/styled'
import { QRCodeComponent } from '../../components/QRCode'

export const SendingInputPage = () => {
  return (
    <ContentWrapper>
      <QRCodeComponent />
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  display: flex;
  justify-content: center;
`

// export const SendingInputPage = () => {
//   const [text, setText] = useLinkedState<string>(sendingStore)
//
//   return (
//     <div>
//       <Text>1. Enter Text</Text>
//       <TextArea
//         value={text}
//         onChange={e => {
//           setText(e.target.value ?? '')
//         }}
//       />
//       <Button onClick={onNext}>Next</Button>
//     </div>
//   )
// }
