import React, { useState } from 'react'
import { Input, Text, View } from 'native-base'
import { Button } from 'react-native'
import { configureAsOffline, configureAsOnline } from './Login.func'
import { PageView } from '../../components/business/PageView'
import { Nav } from '../../app/Navigator'
import { path } from '../../routes/path'

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
          configureAsOnline(email, password)
          Nav.url(path.setup.index)
        }}
      />
      <Button
        title={'Offline Mode'}
        onPress={() => {
          configureAsOffline()
          Nav.url(path.setup.index)
        }}
      />
    </PageView>
  )
}
