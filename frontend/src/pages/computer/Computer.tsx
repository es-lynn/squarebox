import React from 'react'
import { PageView } from '../../components/business/PageView'
import { Button, Text } from 'native-base'
import { BodyText, HeaderText, PrimaryButton, TwoButtonGrid } from '../../style/style'
import { logout, onSelectReceive, onSelectSend } from './Computer.func'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import HomeImg from '../../images/home_page.svg'

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
  return (
    <PageView>
      <HeaderText>Hello Dave! 👋</HeaderText>
      <HeaderText>Welcome back!</HeaderText>
      <AfterLoginImage src={HomeImg} alt="HomeImg" />
      <ParaTopText>Please choose an option</ParaTopText>
      <ParaBottomText> you’d like to do today!</ParaBottomText>
      <TwoButtonGrid>
        <PrimaryButton onPress={onSelectSend}>Generate QR code</PrimaryButton>
        <PrimaryButton onPress={onSelectReceive}>Scan QR code</PrimaryButton>
        <PrimaryButton onPress={logout}>Logout</PrimaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}
