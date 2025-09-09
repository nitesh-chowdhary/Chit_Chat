import { PixelRatio } from 'react-native';
import { Device } from './device';

const { width, height } = Device;
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const baseWidth = 350;
const baseHeight = 680;

export namespace Scale {
  export const s = (size: number) => (shortDimension / baseWidth) * size;
  export const vs = (size: number) => (longDimension / baseHeight) * size;
  export const ms = (size: number, factor = 0.5) =>
    size + (s(size) - size) * factor;
  export const mvs = (size: number, factor = 0.5) =>
    size + (vs(size) - size) * factor;
  export const normalize = (size: number) =>
    Math.round(PixelRatio.roundToNearestPixel(ms(size)));
}
