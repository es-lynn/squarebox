import React, { useRef, useState } from 'react'
import { Input as AntInput } from 'antd'
import {
  BodyText,
  HeaderText,
  PrimaryButton,
  SecondaryButton,
  TwoButtonGrid,
  PrimaryAntButton
} from '../../../style/style'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import { PageView } from '../../../components/business/PageView'
import { Nav } from '../../../app/Navigator'
import { copyFromInputRef, receivingStore } from './ReceivingStore'
import { useLinkedState } from '../../../lib/LinkedState'

const ParaTopText = styled(BodyText)`
  margin-top: 44px;
  line-height: 22px;
  text-align: center;
`

const TextAreaCustom = styledHtml('textarea')`
  min-width: 275px;
  border-radius: 24px;
  min-height: 310px !important;
  font-family: Open Sans;
  font-size: 16px;
  margin-bottom: 30px;
  padding-left: 14px;
  padding-top:14px;
  width: 85%;
`

export const ReceivingOutputPage = () => {
  const [content] = useLinkedState(receivingStore)
  const textAreaRef = useRef<any>()

  return (
    <PageView>
      <HeaderText>Sweet! Now you can copy the data! 🎉</HeaderText>
      <ParaTopText>
        Here’s your data that you have just scanned. You can copy and paste it. Easy peasy!{' '}
      </ParaTopText>
      <TextAreaCustom ref={textAreaRef} value={content} />
      <TwoButtonGrid>
        <PrimaryAntButton
          onClick={() => {
            copyFromInputRef(textAreaRef)
          }}
        >
          Copy it!
        </PrimaryAntButton>
        <SecondaryButton onClick={() => Nav.url('/')}>Back to home</SecondaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}
