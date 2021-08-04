import React, { useRef } from 'react'
import { Text, Button } from 'native-base'
import { useLinkedState } from '../../lib/LinkedState'
import { copyFromInputRef, receivingStore } from './ReceivingStore'
import { Nav } from '../../app/Navigator'

export const ReceivingOutputPage = () => {
  const [content] = useLinkedState(receivingStore)
  const textAreaRef = useRef<any>()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Text>2. Your text</Text>
      {/* @ts-ignore */}
      <textarea ref={textAreaRef} defaultValue={content} />
      <Button onPress={() => copyFromInputRef(textAreaRef)}>Copy Text</Button>
      <Button onPress={() => Nav.url('/')}>Restart</Button>
    </div>
  )
}
