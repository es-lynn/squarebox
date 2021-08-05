import React, { useEffect } from 'react'
import { PageView } from '../../components/business/PageView'
import { BodyText, HeaderText, LinkButton, PrimaryButton, TwoButtonGrid } from '../../style/style'
import { logout, onSelectReceive, onSelectSend } from './Computer.func'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import { SVGHomePage } from '../../images/SVGHomePage'
import { credentials } from '../State'
import { API } from '../../services/API'
import { receivingStore } from './receiving/ReceivingStore'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'
import { useLinkedState } from '../../lib/LinkedState'
import { decrypt } from '../../services/EncryptionService'

const AfterLoginImage = styledHtml.img`
  width: 331px;
  height: 255px;
  margin-top: 36px;
`

const ParaTopText = styled(BodyText)`
  margin-top: 44px;
  line-height: 22px;
  text-align: center;
`

const ParaBottomText = styled(BodyText)`
  margin-bottom: 17px;
  text-align: center;
  line-height: 22px;
`

export const Computer = () => {
  useEffect(() => {
    if (credentials.state()?.mode === 'online') {
      // @ts-ignore
      const username: string = credentials.state()['username']
      // @ts-ignore
      const encryptionKey: string = credentials.state()['encryptionKey']
      const retrieveAPI = async () => {
        const data = await API.retrieve_payload({
          id: username
        })
        receivingStore.set(decrypt(data.payload, encryptionKey))
        Nav.url(path.receiving.output)
      }

      const intervalID = setInterval(retrieveAPI, 1000)
      return () => clearInterval(intervalID)
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
      <SVGHomePage />
      <ParaTopText>Please choose an option</ParaTopText>
      <ParaBottomText> you’d like to do today!</ParaBottomText>
      <TwoButtonGrid>
        <PrimaryButton onPress={onSelectSend}>Send Text</PrimaryButton>
        <PrimaryButton onPress={onSelectReceive}>Receive Text</PrimaryButton>
        <LinkButton onClick={logout}>Logout</LinkButton>
      </TwoButtonGrid>
    </PageView>
  )
}
