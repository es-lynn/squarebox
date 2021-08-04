import React from 'react'
import { Button } from 'native-base'
import { onSelectReceiving, onSelectReceiveText, onSelectSending } from './SetupStore'
import styled from '@emotion/styled'

export const SetupComputerModePage = () => {
  return (
    <TempMainWrapper>
      <div>
        <h2>Please choose an option:</h2>
        <TempButton onPress={onSelectSending}>Generate QR</TempButton>
        <br />
        <TempButton onPress={onSelectReceiving}>Scan QR</TempButton>
        <br />
        <TempButton onPress={onSelectReceiveText}>Receive Text</TempButton>
      </div>
    </TempMainWrapper>
  )
}

const TempButton = styled(Button)`
  width: 200px;
`

const TempMainWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 800px;
  justify-content: center;
`
