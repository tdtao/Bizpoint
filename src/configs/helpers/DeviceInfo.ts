import { Platform, Dimensions } from 'react-native';

const Screen = Dimensions.get('screen');
const ScreenWidth: number = Screen.width;
const ScreenHeight: number = Screen.height;
const deviceWidth: number = Screen.width;
const deviceHeight: number = Screen.height;
const ScreenScale: number = Screen.scale;
const ScreenFontScale: number = Screen.fontScale;

const Window = Dimensions.get('window');
const WindowWidth: number = Window.width;
const WindowHeight: number = Window.height;
const WindowFontScale: number = Window.fontScale;
const WindowScale: number = Window.scale;
const isIOS: boolean = Platform.OS === 'ios';
const isAndroid: boolean = Platform.OS === 'android';
const PlatformVersion = Platform.Version;

export {
  isIOS,
  isAndroid,
  ScreenWidth,
  ScreenHeight,
  ScreenScale,
  ScreenFontScale,
  WindowWidth,
  WindowHeight,
  WindowScale,
  WindowFontScale,
  PlatformVersion,
  deviceWidth,
  deviceHeight,
};
