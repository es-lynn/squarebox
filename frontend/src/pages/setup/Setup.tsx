import { PageView } from '../../components/business/PageView'
import { Button, Text } from 'native-base'
import React from 'react'
import { configureDevice } from './Setup.func'

export const Setup = () => {
  return (
    <PageView>
      <Text>Select your device type:</Text>
      <Button onPress={() => configureDevice('computer')}>Computer</Button>
      <Button onPress={() => configureDevice('scanner')}>Scanner</Button>
    </PageView>
  )
}
