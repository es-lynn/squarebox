import React from 'react'
import { Button } from 'antd'
import { onSelectReceiving, onSelectSending } from './SetupStore'

export const SetupComputerModePage = () => {
  return (
    <div>
      <Button onClick={onSelectSending}>Sending</Button>
      <Button onClick={onSelectReceiving}>Receiving</Button>
    </div>
  )
}
