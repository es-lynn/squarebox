import React from 'react'
import { PageView } from '../../components/business/PageView'
import { Button, Text } from 'native-base'
import { onSelectReceive, onSelectSend } from './Computer.func'

export const Computer = () => {
  return (
    <PageView>
      <Text>Hello! Welcome back!</Text>
      <Text>{"Please choose an option you'd like to do today!"}</Text>
      <Button onPress={onSelectSend}>Generate QR code</Button>
      <Button onPress={onSelectReceive}>Scan QR code</Button>
    </PageView>
  )
}
