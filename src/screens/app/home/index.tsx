import React from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Screen, Text } from '@/components/core';
import { useTheme } from '@/hooks';

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

      <View style={styles.chatContent}>
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
            style={styles.lastMessage}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>

          {item.unreadCount && item.unreadCount > 0 && (
            <View
              style={[styles.unreadBadge, { backgroundColor: theme.primary }]}
            >
              <Text variant="caption" color={theme.white}>
                {item.unreadCount > 99 ? '99+' : item.unreadCount.toString()}
              </Text>
            </View>
          )}
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

        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Text variant="title" color={theme.background}>
              ⚙️
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            styles.activeTab,
            { backgroundColor: theme.primary },
          ]}
        >
          <Text variant="body" color={theme.background}>
            Chats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text variant="body" color={theme.gray500}>
            Status
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text variant="body" color={theme.gray500}>
            Calls
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockChats}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
        style={[styles.chatList, { backgroundColor: theme.background }]}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: theme.primary }]}
        activeOpacity={0.8}
      >
        <Text variant="heading" color={theme.background}>
          +
        </Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  chatList: {
    flex: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
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

  chatContent: {
    flex: 1,
  },

  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  lastMessage: {
    flex: 1,
    marginRight: 8,
  },

  unreadBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },

  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default Home;
