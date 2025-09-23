import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Flatlist, Screen, Text } from '@/components/core';
import { useTheme } from '@/hooks';
import { layout, space } from '@/styles';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar?: string;
  unreadCount?: number;
  isOnline?: boolean;
}

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey! How are you doing?',
    timestamp: '2:30 PM',
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    lastMessage: 'Thanks for the help yesterday!',
    timestamp: '1:45 PM',
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: '3',
    name: 'Family Group',
    lastMessage: 'Mom: Dinner at 7 PM today',
    timestamp: '12:20 PM',
    unreadCount: 5,
    isOnline: false,
  },
  {
    id: '4',
    name: 'Mike Johnson',
    lastMessage: 'See you tomorrow!',
    timestamp: 'Yesterday',
    unreadCount: 0,
    isOnline: true,
  },
  {
    id: '5',
    name: 'Work Team',
    lastMessage: 'Alice: Project deadline updated',
    timestamp: 'Yesterday',
    unreadCount: 1,
    isOnline: false,
  },
];

const Home = () => {
  const theme = useTheme();

  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity
      style={[styles.chatItem, { borderBottomColor: theme.border }]}
    >
      <View style={styles.avatarContainer}>
        <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
          <Text variant="title" color={theme.background}>
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>

      <View style={layout.flex1}>
        <View style={styles.chatHeader}>
          <Text variant="title" color={theme.text} numberOfLines={1}>
            {item.name}
          </Text>
          <Text variant="caption" color={theme.gray500}>
            {item.timestamp}
          </Text>
        </View>

        <View style={styles.messageRow}>
          <Text
            variant="body"
            color={theme.gray500}
            style={StyleSheet.compose(layout.flex1, space.mr2)}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>

          {item.unreadCount ? (
            <View
              style={[styles.unreadBadge, { backgroundColor: theme.primary }]}
            >
              <Text variant="caption" color={theme.white}>
                {item?.unreadCount > 99 ? '99+' : item.unreadCount}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Screen>
      <View style={[styles.header, { backgroundColor: theme.primary }]}>
        <Text variant="heading" color={theme.background}>
          ChitChat
        </Text>
      </View>

      <Flatlist
        data={mockChats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        style={[layout.flex1, { backgroundColor: theme.background }]}
        showsVerticalScrollIndicator={false}
      />

      <Button
        style={[styles.fab, { backgroundColor: theme.primary }]}
        variant="fab"
        activeOpacity={0.8}
      >
        +
      </Button>
    </Screen>
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

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerButton: {
    padding: 8,
  },

  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
  },

  activeTab: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    ...layout.center,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#25D366',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  chatHeader: {
    ...layout.rowBetween,
    marginBottom: 4,
  },
  messageRow: {
    ...layout.rowBetween,
  },

  unreadBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    ...layout.center,
    paddingHorizontal: 6,
  },
  fab: {
    ...layout.absolute,
    ...layout.center,
    bottom: 20,
    right: 20,
  },
});

export default Home;
