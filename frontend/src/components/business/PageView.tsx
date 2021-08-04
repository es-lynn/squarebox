import { View, ViewStyle } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'
import { withStyle } from 'reactjs-commons'

type PageViewProps = {
  /** Styling of the main background container. This stretches the full width. */
  style?: ViewStyle
  /** Styling of only the center container. This is max-width of 1140px */
  containerStyle?: ViewStyle
  children: ReactNode
}

export const PageView = ({ children, style, containerStyle, ...rest }: PageViewProps) => {
  return (
    <BackgroundView style={style} {...rest}>
      <ContainerView style={containerStyle}>{children}</ContainerView>
    </BackgroundView>
  )
}

export const BackgroundView = withStyle(View)({
  maxWidth: '100%'
})

export const ContainerView = withStyle(View)({
  margin: 'auto',
  width: '100%',
  padding: '0 16',
  maxWidth: 768
})
