import { StyleSheet } from 'react-native';

const layout = StyleSheet.create({
  flex: { display: 'flex' },
  flex1: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexCol: { flexDirection: 'column' },

  itemsCenter: { alignItems: 'center' },
  itemsStart: { alignItems: 'flex-start' },
  itemsEnd: { alignItems: 'flex-end' },

  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },

  selfStart: { alignSelf: 'flex-start' },
  selfEnd: { alignSelf: 'flex-end' },
  selfCenter: { alignSelf: 'center' },

  absolute: { position: 'absolute' },
  relative: { position: 'relative' },

  center: { justifyContent: 'center', alignItems: 'center' },

  aspect1: { aspectRatio: 1 },
  aspectSquare: { aspectRatio: 1 },
  aspectVideo: { aspectRatio: 16 / 9 },

  fullWidth: { width: '100%' },
  fullHeight: { height: '100%' },
  fullSize: { width: '100%', height: '100%' },

  absoluteFill: StyleSheet.absoluteFillObject,
});

export default layout;
