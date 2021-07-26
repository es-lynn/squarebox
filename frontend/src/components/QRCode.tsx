import React from 'react'

type QRCodeProps = {
  content: string
  size?: number
}
export const QRCode = ({ content, size = 256 }: QRCodeProps) => {
  // TODO: Replace with real QR Code
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black'
      }}
    >
      {content}
    </div>
  )
}
