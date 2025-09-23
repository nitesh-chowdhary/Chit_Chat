import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';

const Status = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Status</Text>
      <Text style={[styles.subtitle, { color: theme.secondary }]}>
        Check your chat status and activity
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Status;
