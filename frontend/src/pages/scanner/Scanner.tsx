import React, { useEffect } from 'react'

import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { PageView } from '../../components/business/PageView'
import { BodyText, HeaderText, LinkButton, PrimaryButton, TwoButtonGrid } from '../../style/style'
import { SVGScannerHomePage } from '../../images/SVGScannerHomePage'
import { logout } from '../computer/Computer.func'
import styledHtml from 'styled-components'
import { credentials } from '../State'
import { API } from '../../services/API'
import { scannerQRCode } from './ScannerRetrieveQRPage'
import { useLinkedState } from '../../lib/LinkedState'
import { decrypt } from '../../services/EncryptionService'

export const SetupScannerModePage = () => {
  useEffect(() => {
    if (credentials.state()?.mode === 'online') {
      // @ts-ignore
      const username: string = credentials.state()['username']
      // @ts-ignore
      const encryptionKey: string = credentials.state()['encryptionKey']
      const retrieveAPI = async () => {
        const data = await API.retrieve_qrcode({
          id: username
        })
        scannerQRCode.set(decrypt(data.qrcode, encryptionKey))
        Nav.url(path.scanner.receive_qr)
      }

      const intervalID = setInterval(retrieveAPI, 1000)
      return () => clearInterval(intervalID)
    } else {
      alert('You need to be logged in to use this.')
    }
  }, [])

  const [_credentials] = useLinkedState(credentials)
  const name: string | undefined = (() => {
    if (_credentials?.mode === 'online') {
      return _credentials.username
    }
  })()
  return (
    <PageView>
      {name ? (
        <HeaderText>{`Hello ${name}!\nWelcome back!`}</HeaderText>
      ) : (
        <HeaderText>{'Hello Anonymous!\nWelcome back!'}</HeaderText>
      )}
      <SVGScannerHomePage />
      <BodyText style={{ marginTop: 16, marginBottom: 16 }}>
        {"Scan the code\nand you're set to go!"}
      </BodyText>
      <TwoButtonGrid>
        <PrimaryButton
          onPress={() => {
            Nav.url(path.scanner.scan_qr)
          }}
        >
          Receive Text
        </PrimaryButton>
        <LinkButton onClick={logout}>Logout</LinkButton>
      </TwoButtonGrid>
    </PageView>
  )
}

const AfterLoginImage = styledHtml.img`
  width: 331px;
  height: 255px;
  margin-top: 36px;
`
