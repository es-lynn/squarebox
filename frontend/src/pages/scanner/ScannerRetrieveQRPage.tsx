import React from 'react'
import QRCode from 'react-qr-code'
import styledHtml from 'styled-components'
import { TwoButtonGrid, SecondaryButton } from '../../style/style'
import { PageView } from '../../components/business/PageView'
import { Nav } from '../../app/Navigator'
import { LinkedState, useLinkedState } from '../../lib/LinkedState'

const ButtonWrapper = styledHtml(TwoButtonGrid)`
margin-top: 70px;
`
export const scannerQRCode = new LinkedState<string>('')

export const ScannerRetrieveQRPage = () => {
  const [state] = useLinkedState(scannerQRCode)

  return (
    <PageView>
      <QRCode value={state} />
      <ButtonWrapper>
        <SecondaryButton onClick={() => Nav.url('/')}>Close</SecondaryButton>
      </ButtonWrapper>
    </PageView>
  )
}
