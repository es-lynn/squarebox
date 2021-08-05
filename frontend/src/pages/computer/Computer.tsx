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
      const retrieveAPI = async () => {
        const data = await API.retrieve_payload({
          id: username
        })
        receivingStore.set(data.payload)
        Nav.url(path.receiving.output)
      }

      const intervalID = setInterval(retrieveAPI, 1000)
      return () => clearInterval(intervalID)
    }
  }, [])

  return (
    <PageView>
      <HeaderText>Hello ! 👋</HeaderText>
      <HeaderText>Welcome back!</HeaderText>
      <SVGHomePage />
      <ParaTopText>Please choose an option</ParaTopText>
      <ParaBottomText> you’d like to do today!</ParaBottomText>
      <TwoButtonGrid>
        <PrimaryButton onPress={onSelectSend}>Generate QR code</PrimaryButton>
        <PrimaryButton onPress={onSelectReceive}>Scan QR code</PrimaryButton>
        <LinkButton onClick={logout}>Logout</LinkButton>
      </TwoButtonGrid>
    </PageView>
  )
}
