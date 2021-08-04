# Cross Compatibility

There may potentially be both mobile and desktop apps in the future. We would want to reuse the same UI across all environments instead of having to code each environment separately.

## No native HTML

All native HTML is banned, use components from `ReactNativeWeb` instead (eg. no `<div>`, use `<View>`).

- https://reactnative.dev/docs/components-and-apis
- https://github.com/necolas/react-native-web

## Limited CSS

Not all CSS available on web can be used for this project. While React Native supports your standard width, height, color, etc, certain CSS attributes are not supported, such as `grid`. 

## UI Library

We will be using `NativeBase` as it is a cross compatible library.

- https://docs.nativebase.io/
