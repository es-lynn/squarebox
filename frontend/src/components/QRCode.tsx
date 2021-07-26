type QRCodeProps = {
  content: string
  size?: number
}
export const QRCode = ({ content, size = 512 }: QRCodeProps) => {
  return <div>{content}</div>
}
