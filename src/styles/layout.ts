import { StyleSheet } from 'react-native';

const layout = StyleSheet.create({
  flex: { display: 'flex' },

  flex1: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexCol: { flexDirection: 'column' },

  itemsCenter: { alignItems: 'center' },
  itemsStart: { alignItems: 'flex-start' },
  itemsEnd: { alignItems: 'flex-end' },
  itemsStretch: { alignItems: 'stretch' },
  itemsBaseline: { alignItems: 'baseline' },

  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },

  center: { justifyContent: 'center', alignItems: 'center' },

  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  colCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colAround: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  selfStart: { alignSelf: 'flex-start' },
  selfEnd: { alignSelf: 'flex-end' },
  selfCenter: { alignSelf: 'center' },
  selfStretch: { alignSelf: 'stretch' },

  wrap: { flexWrap: 'wrap' },
  noWrap: { flexWrap: 'nowrap' },

  grow: { flexGrow: 1 },
  shrink: { flexShrink: 1 },
  noGrow: { flexGrow: 0 },
  noShrink: { flexShrink: 0 },

  overflowHidden: { overflow: 'hidden' },
  overflowScroll: { overflow: 'scroll' },

  aspect1: { aspectRatio: 1 },
  aspectSquare: { aspectRatio: 1 },
  aspectVideo: { aspectRatio: 16 / 9 },

  fullWidth: { width: '100%' },
  fullHeight: { height: '100%' },
  fullSize: { width: '100%', height: '100%' },

  absoluteFill: StyleSheet.absoluteFillObject,

  // positions
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
});

export default layout;
