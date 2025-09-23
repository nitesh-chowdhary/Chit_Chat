import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { useTheme } from '@/hooks';
import { Text } from '@/components/core';
import { layout } from '@/styles';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = props => {
  const theme = useTheme();
  return (
    <View style={[styles.header, { backgroundColor: theme.primary }]}>
      <Text variant="heading" color={theme.background}>
        {props?.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...layout.rowBetween,
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  headerButton: {
    padding: 8,
  },
});

export { Header };
