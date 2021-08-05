import React from 'react'
import { PageView } from '../../components/business/PageView'
import { BodyText, HeaderText, PrimaryButton, TwoButtonGrid } from '../../style/style'
import ScannerSuccess from '../../images/scanner_success.svg'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import styledHtml from 'styled-components'

export const ScannerScanConfirmationPage = () => {
  return (
    <PageView>
      <HeaderText>{'Yay! What you need is transferred! 🔥'}</HeaderText>
      <BodyText style={{ marginTop: 16, maxWidth: 300 }}>
        {
          'No data left behind!\nAs you have paired your computer, the data has been successfully transferred on it right now!'
        }
      </BodyText>
      <AfterLoginImage src={ScannerSuccess} alt="HomeImg" />
      <TwoButtonGrid style={{ marginTop: 32 }}>
        <PrimaryButton
          onPress={() => {
            Nav.url(path.scanner.index)
          }}
        >
          Back to Home
        </PrimaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}

const AfterLoginImage = styledHtml.img`
  width: 331px;
  height: 255px;
  margin-top: 36px;
`
