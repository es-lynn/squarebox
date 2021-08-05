import React, { useEffect } from 'react'

import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { PageView } from '../../components/business/PageView'
import { BodyText, HeaderText, PrimaryButton, TwoButtonGrid } from '../../style/style'
import ScannerHomeImg from '../../images/scanner_home_page.svg'
import { logout } from '../computer/Computer.func'
import styledHtml from 'styled-components'
import { credentials } from '../State'
import { API } from '../../services/API'
import { scannerQRCode } from './ScannerRetrieveQRPage'

export const SetupScannerModePage = () => {
  useEffect(() => {
    if (credentials.state()?.mode === 'online') {
      // @ts-ignore
      const username: string = credentials.state()['username']
      const retrieveAPI = async () => {
        const data = await API.retrieve_qrcode({
          id: username
        })
        scannerQRCode.set(data.qrcode)
        Nav.url(path.scanner.receive_qr)
      }

      const intervalID = setInterval(retrieveAPI, 3000)
      return () => clearInterval(intervalID)
    } else {
      alert('You need to be logged in to use this.')
    }
  }, [])

  return (
    <PageView>
      <HeaderText>{'Hello Jason!\nWelcome back!'}</HeaderText>
      <AfterLoginImage src={ScannerHomeImg} alt="HomeImg" />
      <BodyText style={{ marginTop: 16, marginBottom: 16 }}>
        {"Scan the code\nand you're set to go!"}
      </BodyText>
      <TwoButtonGrid>
        <PrimaryButton
          onPress={() => {
            Nav.url(path.scanner.scan_qr)
          }}
        >
          Scan QR code
        </PrimaryButton>
        <PrimaryButton onPress={logout}>Logout</PrimaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}

const AfterLoginImage = styledHtml.img`
  width: 331px;
  height: 255px;
  margin-top: 36px;
`
