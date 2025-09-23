import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Header } from '@/components/app';
import { Button, Flatlist, Screen, Text } from '@/components/core';

import { useTheme } from '@/hooks';
import { layout, space } from '@/styles';

interface Call {
  id: string;
  name: string;
  type: 'incoming' | 'outgoing' | 'missed';
  duration?: string;
  timestamp: string;
  avatar?: string;
  isVideo?: boolean;
}

const mockCalls: Call[] = [
  {
    id: '1',
    name: 'John Doe',
    type: 'incoming',
    duration: '5:23',
    timestamp: '2:30 PM',
    isVideo: false,
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    type: 'outgoing',
    duration: '12:45',
    timestamp: '1:15 PM',
    isVideo: true,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    type: 'missed',
    timestamp: '11:30 AM',
    isVideo: false,
  },
  {
    id: '4',
    name: 'Alice Brown',
    type: 'outgoing',
    duration: '3:12',
    timestamp: 'Yesterday',
    isVideo: false,
  },
  {
    id: '5',
    name: 'David Chen',
    type: 'incoming',
    duration: '8:56',
    timestamp: 'Yesterday',
    isVideo: true,
  },
  {
    id: '6',
    name: 'Emma Davis',
    type: 'missed',
    timestamp: 'Yesterday',
    isVideo: false,
  },
  {
    id: '7',
    name: 'Ryan Garcia',
    type: 'outgoing',
    duration: '2:34',
    timestamp: 'Tuesday',
    isVideo: false,
  },
  {
    id: '8',
    name: 'Emma Davis',
    type: 'missed',
    timestamp: 'Yesterday',
    isVideo: false,
  },
  {
    id: '9',
    name: 'Ryan Garcia',
    type: 'outgoing',
    duration: '2:34',
    timestamp: 'Tuesday',
    isVideo: false,
  },
];

const Calls = () => {
  const theme = useTheme();

  const getCallIcon = (type: Call['type']) => {
    switch (type) {
      case 'incoming':
        return '↙️';
      case 'outgoing':
        return '↗️';
      case 'missed':
        return '❌';
      default:
        return '📞';
    }
  };

  const getCallTypeColor = (type: Call['type']) => {
    switch (type) {
      case 'incoming':
        return '#25D366';
      case 'outgoing':
        return theme.primary;
      case 'missed':
        return '#EF4444';
      default:
        return theme.gray500;
    }
  };

  const renderCallItem = ({ item }: { item: Call }) => (
    <TouchableOpacity
      style={[styles.callItem, { borderBottomColor: theme.border }]}
    >
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <Text variant="title" color={theme.background}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={layout.flex1}>
        <View style={styles.callHeader}>
          <Text variant="title" color={theme.text} numberOfLines={1}>
            {item.name}
          </Text>
          <TouchableOpacity
            style={[styles.callButton, { backgroundColor: theme.primary }]}
          >
            <Text variant="caption" color={theme.background}>
              {item.isVideo ? '📹' : '📞'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callDetails}>
          <View style={styles.callInfo}>
            <Text
              variant="caption"
              color={getCallTypeColor(item.type)}
              style={space.mr1}
            >
              {getCallIcon(item.type)}
            </Text>
            <Text variant="body" color={theme.gray500}>
              {item.isVideo ? 'Video call' : 'Voice call'}
            </Text>
            {item.duration && (
              <>
                <Text variant="body" color={theme.gray500} style={space.mx1}>
                  •
                </Text>
                <Text variant="body" color={theme.gray500}>
                  {item.duration}
                </Text>
              </>
            )}
          </View>

          <Text variant="caption" color={theme.gray500}>
            {item.timestamp}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen>
      <Header title="Calls" />

      <Flatlist
        data={mockCalls}
        renderItem={renderCallItem}
        keyExtractor={item => item.id}
        style={[layout.flex1, { backgroundColor: theme.background }]}
        showsVerticalScrollIndicator={false}
      />

      <Button
        style={[styles.fab, { backgroundColor: theme.primary }]}
        variant="fab"
        activeOpacity={0.8}
      >
        📞
      </Button>
    </Screen>
  );
};

const styles = StyleSheet.create({
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
  },

  avatarContainer: {
    marginRight: 12,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    ...layout.center,
  },

  callHeader: {
    ...layout.rowBetween,
    marginBottom: 4,
  },

  callButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    ...layout.center,
  },

  callDetails: {
    ...layout.rowBetween,
  },

  callInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fab: {
    ...layout.absolute,
    ...layout.center,
    bottom: 20,
    right: 20,
  },
});

export default Calls;
