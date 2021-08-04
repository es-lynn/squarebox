import React from 'react'
import { Button } from 'native-base'
import { onSelectComputer, onSelectScanner, onSelectTempMain } from './SetupStore'

export const SetupDevicePage = () => {
  return (
    <div>
      <Button onPress={onSelectComputer}>Computer</Button>
      <Button onPress={onSelectScanner}>Scanner</Button>
      <Button onPress={onSelectTempMain}>TempMain</Button>
    </div>
  )
}
