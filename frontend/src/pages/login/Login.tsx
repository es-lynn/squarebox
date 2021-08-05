import React, { useEffect, useState } from 'react'
import { configureCredentials } from './Login.func'
import { PageView } from '../../components/business/PageView'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import { SVGLoginScreen } from '../../images/SVGLoginScreen'
import {
  BodyText,
  CustomInput,
  HeaderText,
  PassWordInput,
  PrimaryButton,
  TwoButtonGrid
} from '../../style/style'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { SVGLock } from '../../images/icons/SVGLock'
import { Text } from 'react-native'
import { RegexTest } from '@aelesia/commons/dist/src/collections/Regex'

const FrontPageImg = styledHtml.img`
  width: 192px;
  height: 161px;
  margin-top: 7px;
`

const PrefixIcon = styledHtml.img`
  width: 22px;
  height: 22px;
`

const ParaText = styled(BodyText)`
  margin-top: 31px;
  margin-bottom: 17px;
`

const InputContainer = styledHtml.div`
display:flex;
flex-direction: column;
gap: 26px;
margin-bottom: 40px;

`

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [emailError, setEmailError] = useState<boolean>(false)
  useEffect(() => {
    if (email !== '' && !RegexTest.email(email)) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }, [email])

  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<boolean>(false)
  useEffect(() => {
    if (password !== '' && password.length < 8) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
  }, [password])

  return (
    <PageView>
      <HeaderText>Hello there!</HeaderText>
      <HeaderText>All you need to do is sign in once! 😎</HeaderText>
      {/*<FrontPageImg src={LogInImg} alt="LogInImg" />*/}
      <SVGLoginScreen />
      <ParaText>Please fill in the fields below to sign in</ParaText>
      <InputContainer>
        {/* <PhoneInput addonBefore="+65" placeholder="Your Phone Number" /> */}
        <CustomInput placeholder="Your Email" onChange={(e: any) => setEmail(e.target.value)} />
        {emailError && <Text style={{ color: 'red', marginTop: -16 }}>Must be valid email</Text>}
        <PassWordInput
          prefix={<SVGLock />}
          onChange={e => setPassword(e.target.value)}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        {passwordError && (
          <Text style={{ color: 'red', marginTop: -16 }}>Must be at least 8 characters</Text>
        )}
      </InputContainer>
      {/* <CustomInput
        style={{ borderColor: 'red' }}
        InputLeftElement={<InputLeftText>+65</InputLeftText>}
        variant="rounded"
        placeholder={'Email Address'}
        onChangeText={setEmail}
      /> */}
      {/* <Input variant="rounded" placeholder={'Password'} onChangeText={setPassword} /> */}
      <TwoButtonGrid>
        <PrimaryButton
          disabled={passwordError || emailError || password === '' || email === ''}
          onPress={() => {
            configureCredentials({
              mode: 'online',
              username: email.toLowerCase(),
              encryptionKey: password
            })
          }}
        >
          Sign In
        </PrimaryButton>
        <PrimaryButton
          onPress={() => {
            configureCredentials({
              mode: 'offline'
            })
          }}
        >
          Offline Mode
        </PrimaryButton>
      </TwoButtonGrid>
    </PageView>
  )
}
