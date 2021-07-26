import React from 'react'
import { Button } from 'antd'
import { onSelectComputer, onSelectScanner } from './SetupStore'

export const SetupDevicePage = () => {
  return (
    <div>
      <Button onClick={onSelectComputer}>Computer</Button>
      <Button onClick={onSelectScanner}>Scanner</Button>
    </div>
  )
}
