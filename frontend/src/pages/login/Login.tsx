import React, { useState } from 'react'
import { Input, Text } from 'native-base'
import { Button } from 'react-native'
import { configureCredentials } from './Login.func'
import { PageView } from '../../components/business/PageView'

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <PageView>
      <Text>Hello there, just one time login is enough</Text>
      <Text>Please fill in the fields below to sign in</Text>
      <Input placeholder={'Email Address'} onChangeText={setEmail} />
      <Input placeholder={'Password'} onChangeText={setPassword} />
      <Button
        title={'Sign in'}
        onPress={() => {
          configureCredentials({
            mode: 'online',
            username: email,
            encryptionKey: password
          })
        }}
      />
      <Button
        title={'Offline Mode'}
        onPress={() => {
          configureCredentials({
            mode: 'offline'
          })
        }}
      />
    </PageView>
  )
}
