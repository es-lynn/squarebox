import Text from 'antd/es/typography/Text'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import { Button } from 'antd'

export const SendingPageInput = () => {
  const [text, setText] = useState<string>('')

  return (
    <div>
      <Text>1. Enter Text</Text>
      <TextArea value={text} onChange={e => setText(e.target.textContent ?? '')} />
      <Button>Next</Button>
    </div>
  )
}
