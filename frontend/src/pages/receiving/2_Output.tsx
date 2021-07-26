import React, { useRef } from 'react'
import Text from 'antd/es/typography/Text'
import { TextAreaRef } from 'antd/es/input/TextArea'
import { useLinkedState } from '../../lib/LinkedState'
import { copyFromInputRef, receivingStore } from './ReceivingStore'
import { Button } from 'antd'

export const ReceivingOutputPage = () => {
  const [content] = useLinkedState(receivingStore)
  const textAreaRef = useRef<TextAreaRef>()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text>2. Your text</Text>
      {/* @ts-ignore */}
      <textarea ref={textAreaRef} defaultValue={content} />
      <Button onClick={() => copyFromInputRef(textAreaRef)}>Copy Text</Button>
    </div>
  )
}
