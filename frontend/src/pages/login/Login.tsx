import React, { useState } from 'react'
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
import LockIcon from '../../images/icons/lock.svg'

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
  const [password, setPassword] = useState<string>('')

  return (
    <PageView>
      <HeaderText>Hello there!</HeaderText>
      <HeaderText>Just one time sign in is enough! 😎</HeaderText>
      {/*<FrontPageImg src={LogInImg} alt="LogInImg" />*/}
      <SVGLoginScreen />
      <ParaText>Please fill in the fields below to sign in</ParaText>
      <InputContainer>
        {/* <PhoneInput addonBefore="+65" placeholder="Your Phone Number" /> */}
        <CustomInput placeholder="Your Email" onChange={(e: any) => setEmail(e.target.value)} />
        <PassWordInput
          prefix={<PrefixIcon src={LockIcon} alt="lock-icon" />}
          onChange={e => setPassword(e.target.value)}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
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
          onPress={() => {
            configureCredentials({
              mode: 'online',
              username: email,
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
