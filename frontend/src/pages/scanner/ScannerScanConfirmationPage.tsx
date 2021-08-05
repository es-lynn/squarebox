import React, { useEffect, useState } from 'react'
import { PageView } from '../../components/business/PageView'
import { BodyText, HeaderText, PrimaryButton, TwoButtonGrid } from '../../style/style'
import ScannerSuccess from '../../images/scanner_success.svg'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import styledHtml from 'styled-components'
import { LinkedState, useLinkedState } from '../../lib/LinkedState'
import { credentials } from '../State'
import { API } from '../../services/API'

export const contentState = new LinkedState<string>('')

export const ScannerScanConfirmationPage = () => {
  const [content] = useLinkedState(contentState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // @ts-ignore
    const username: string = credentials.state()['username']
    API.send_payload({
      id: username,
      payload: content
    })
      .then(() => setLoading(false))
      .catch(() => alert('Connection error please retry.'))
  }, [])

  return (
    <PageView>
      <HeaderText>{loading ? 'Loading...' : 'Yay! What you need is transferred! 🔥'}</HeaderText>
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
