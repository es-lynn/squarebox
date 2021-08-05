import { PageView } from '../../components/business/PageView'
import React from 'react'
import { configureDevice } from './Setup.func'
import styled from 'styled-components/native'
import { BodyText, HeaderText, TwoButtonGrid, PrimaryButton } from '../../style/style'
import ChooseDevice from '../../images/choose_device.svg'
import styledHtml from 'styled-components'

const ChooseDeviceImage = styledHtml.img`
  width: 331px;
  height: 255px;
  margin-top: 7px;
`

const ParaText = styled(BodyText)`
  margin-top: 41px;
  margin-bottom: 16px;
`

export const Setup = () => {
  return (
    <PageView>
      <HeaderText>Almost there!</HeaderText>
      <HeaderText> Now, help us choose a device type. 🎮</HeaderText>
      <ChooseDeviceImage src={ChooseDevice} alt="ChooseDevice" />
      <ParaText>Select your device type:</ParaText>
      <TwoButtonGrid>
        <PrimaryButton onPress={() => configureDevice('computer')}>Computer</PrimaryButton>
        <PrimaryButton onPress={() => configureDevice('scanner')}>Scanner</PrimaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}
