// Light theme palette (WhatsApp-style)
const light = {
  // Primary brand colors (WhatsApp green)
  primary: '#25D366', // WhatsApp green
  primaryDark: '#128C7E', // Darker green
  primaryLight: '#ABEBC6', // Light green for highlights/buttons

  // Secondary / accent (for buttons, links, or highlights)
  secondary: '#34B7F1', // Light blue accent
  secondaryLight: '#D0F0FD',

  // Neutral grayscale
  background: '#ECE5DD', // Main app background
  card: '#FFFFFF', // Chat bubble background (for other users)
  text: '#111111', // Default text color
  border: '#DDDDDD', // Divider lines

  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F5F5F5',
  gray200: '#E0E0E0',
  gray300: '#C0C0C0',
  gray400: '#A0A0A0',
  gray500: '#808080',
  gray600: '#606060',
  gray700: '#404040',
  gray800: '#202020',
  gray900: '#111111',

  // Feedback colors
  success: '#25D366', // Same as primary (for sent/delivered)
  warning: '#FFC107', // maybe for notifications or errors
  danger: '#EF4444', // failed messages
  info: '#34B7F1', // info messages or system messages
};

// Dark theme palette (WhatsApp-style)
const dark = {
  // Primary brand colors
  primary: '#128C7E', // Dark WhatsApp green
  primaryDark: '#075E54', // Even darker green
  primaryLight: '#25D366', // Lighter accent

  // Secondary / accent
  secondary: '#34B7F1',
  secondaryLight: '#D0F0FD',

  // Neutral grayscale
  background: '#121B22', // Dark app background
  card: '#1E2A33', // Chat bubble background
  text: '#E1E1E1', // Light text for dark mode
  border: '#2C3E50', // Divider lines

  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F5F5F5',
  gray200: '#E0E0E0',
  gray300: '#C0C0C0',
  gray400: '#A0A0A0',
  gray500: '#808080',
  gray600: '#606060',
  gray700: '#404040',
  gray800: '#202020',
  gray900: '#111111',

  // Feedback colors
  success: '#25D366',
  warning: '#FFC107',
  danger: '#EF4444',
  info: '#34B7F1',
};

// Namespace export
const colorPalette = {
  light,
  dark,
};

export default colorPalette;
