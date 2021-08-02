import React from 'react'
import { Button } from 'antd'
import { onSelectComputer, onSelectScanner, onSelectTempMain } from './SetupStore'

export const SetupDevicePage = () => {
  return (
    <div>
      <Button onClick={onSelectComputer}>Computer</Button>
      <Button onClick={onSelectScanner}>Scanner</Button>
      <Button onClick={onSelectTempMain}>TempMain</Button>
    </div>
  )
}
