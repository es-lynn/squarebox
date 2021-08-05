import React, { useEffect } from 'react'
import { PageView } from '../../components/business/PageView'
import { Button, Text } from 'native-base'
import { BodyText, HeaderText, PrimaryButton, TwoButtonGrid } from '../../style/style'
import { logout, onSelectReceive, onSelectSend, onSelectSyncText } from './Computer.func'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import HomeImg from '../../images/home_page.svg'
import { credentials } from '../State'
import httyp from 'httyp/index'
import { Cfg } from '../../app/config/Config'
import { API } from '../../services/API'

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
        alert(JSON.stringify(data)) // TODO: Change
      }

      const intervalID = setInterval(retrieveAPI, 1000)
      return () => clearInterval(intervalID)
    }
  }, [])

  return (
    <PageView>
      <HeaderText>Hello ! 👋</HeaderText>
      <HeaderText>Welcome back!</HeaderText>
      <AfterLoginImage src={HomeImg} alt="HomeImg" />
      <ParaTopText>Please choose an option</ParaTopText>
      <ParaBottomText> you’d like to do today!</ParaBottomText>
      <TwoButtonGrid>
        <PrimaryButton onPress={onSelectSend}>Generate QR code</PrimaryButton>
        <PrimaryButton onPress={onSelectReceive}>Scan QR code</PrimaryButton>
        <PrimaryButton onPress={onSelectSyncText}>Receive Text</PrimaryButton>
        <PrimaryButton onPress={logout}>Logout</PrimaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}
