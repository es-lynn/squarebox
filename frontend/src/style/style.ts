import { Button, Text } from 'native-base'
import { Input as AntInput, Button as AntButton } from 'antd'
import styled from 'styled-components/native'
import styledHtml from 'styled-components'
import 'antd/dist/antd.css'

export const sp = {
  _4: 4,
  _8: 8,
  _12: 12,
  _16: 16,
  _24: 24,
  _32: 32,
  _48: 48,
  _72: 72,
  _108: 108
}

export const cl = {
  white: '#FFF',
  black: '#000'
}

export const PrimaryButton = styled(Button)`
  background-color: #6842ff;
  width: 277px;
  height: 52px;
  font-size: 16px;
  border-radius: 100px;
  font-weight: bold;
`

export const LinkButton = styledHtml.a`
  text-decoration-line: underline;
  color: #6842ff;
  text-align: center;
  font-size: 16px;

    :hover {
   color: #6842ff;
     text-decoration-line: underline;
  }
`

export const SecondaryButton = styledHtml(AntButton)`
  border: 2px solid #6842ff;
  width: 277px;
  height: 52px;
  font-size: 16px;
  border-radius: 100px;
  font-weight: bold;
  background-color: #fff;
  color: #6842ff !important;

  :hover {
     border: 2px solid #6842ff;
       background-color: #fff;
  }
`

export const PrimaryAntButton = styledHtml(AntButton)`
  background-color: #6842ff;
  width: 277px;
  height: 52px;
  font-size: 16px;
  border-radius: 100px;
  font-weight: bold;
  color: #fff;

    :hover {
       color: #fff;
       background-color: #6842ff;
  }
`

export const TwoButtonGrid = styledHtml.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .ant-btn:not([disabled]):active {
    border: 2px solid #6842ff;
    color: #6842ff;
}


`

export const HeaderText = styled(Text)`
  font-family: Open Sans;
  font-weight: 700;
  text-align: center;
  font-size: 30px;
  line-height: 40.85px;
`

export const BodyText = styled(Text)`
  font-family: Open Sans;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  line-height: 21.79px;
`

export const PhoneInput = styledHtml(AntInput)`
width: 307px;
height: 42px;
  .ant-input-group {
    border: 1.5px solid #9FB0FE;
    border-radius: 100px;
  }

  .ant-input::placeholder {
    color: #92929D;
  }

  .ant-input-group-addon {
    border-radius: 100px;
    font-family: Open Sans;
    font-weight: 600;
    text-align: center;
    font-size: 16px;
    line-height: 21.79px;
    color:#171725;
    background-color: #FFF;
    border: none;
    padding: 10px 20px 10px 20px;
  }

  .ant-input {
    font-family: Open Sans;
    font-size: 16px;
    border-radius: 100px;
    height:42px;
    border-left: 1px solid #9FB0FE;
  }
`

export const PassWordInput = styledHtml(AntInput.Password)`
background: #FFFFFF;
border: 1.5px solid #9FB0FE;
border-radius: 100px;
height: 48px;
padding-top: 0;

.ant-input-prefix {
  padding: 10px;
}

.ant-input {
  height: 45px;
  background-color: #fff;
}
`

export const CustomInput = styledHtml(AntInput)`
  border: 1.5px solid #9fb0fe;
  border-radius: 100px;
  height: 48px;
  padding-top:10px;
  padding-bottom: 10px;
  padding-left: 16px;
`
