import Text from 'antd/es/typography/Text'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import { Button } from 'antd'
import React from 'react'
import { useLinkedState } from '../../lib/LinkedState'
import { onNext, sendingStore } from './SendingStore'

export const SendingInputPage = () => {
  const [text, setText] = useLinkedState<string>(sendingStore)

  return (
    <div>
      <Text>1. Enter Text</Text>
      <TextArea
        value={text}
        onChange={e => {
          setText(e.target.value ?? '')
        }}
      />
      <Button onClick={onNext}>Next</Button>
    </div>
  )
}
