import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { Screen, Text } from '@/components/core';
import { useTheme } from '@/hooks';
import { layout } from '@/styles';
import { Header } from '@/components/app';

interface StatusStory {
  id: string;
  name: string;
  timestamp: string;
  isViewed: boolean;
  hasStory: boolean;
  avatar?: string;
  statusCount?: number;
}

const mockStatusStories: StatusStory[] = [
  {
    id: '1',
    name: 'John Doe',
    timestamp: '5 minutes ago',
    isViewed: false,
    hasStory: true,
    statusCount: 3,
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    timestamp: '1 hour ago',
    isViewed: false,
    hasStory: true,
    statusCount: 1,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    timestamp: '3 hours ago',
    isViewed: true,
    hasStory: true,
    statusCount: 2,
  },
  {
    id: '4',
    name: 'Alice Brown',
    timestamp: '5 hours ago',
    isViewed: false,
    hasStory: true,
    statusCount: 1,
  },
  {
    id: '5',
    name: 'David Chen',
    timestamp: 'Yesterday',
    isViewed: true,
    hasStory: true,
    statusCount: 4,
  },
  {
    id: '6',
    name: 'Emma Davis',
    timestamp: 'Yesterday',
    isViewed: false,
    hasStory: true,
    statusCount: 2,
  },
];

const Status = () => {
  const theme = useTheme();

  const renderMyStatus = () => (
    <TouchableOpacity
      style={[styles.myStatusItem, { borderBottomColor: theme.border }]}
    >
      <View style={styles.avatarContainer}>
        <View style={[styles.myAvatar, { backgroundColor: theme.primary }]}>
          <Text variant="title" color={theme.background}>
            You
          </Text>
        </View>
        <View style={[styles.addIcon, { backgroundColor: theme.primary }]}>
          <Text variant="caption" color={theme.background}>
            +
          </Text>
        </View>
      </View>

      <View style={layout.flex1}>
        <Text variant="title" color={theme.text}>
          My Status
        </Text>
        <Text variant="body" color={theme.gray500}>
          Tap to add status update
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderStatusStory = (story: StatusStory) => (
    <TouchableOpacity
      key={story.id}
      style={[styles.statusItem, { borderBottomColor: theme.border }]}
    >
      <View style={styles.avatarContainer}>
        <View
          style={[
            styles.avatar,
            { backgroundColor: theme.primary },
            styles.statusRing,
            {
              borderColor: story.isViewed ? theme.gray300 : theme.primary,
            },
          ]}
        >
          <Text variant="title" color={theme.background}>
            {story.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        {story.statusCount && story.statusCount > 1 && (
          <View
            style={[styles.statusCount, { backgroundColor: theme.primary }]}
          >
            <Text variant="caption" color={theme.background}>
              {story.statusCount}
            </Text>
          </View>
        )}
      </View>

      <View style={layout.flex1}>
        <Text
          variant="title"
          color={story.isViewed ? theme.gray500 : theme.text}
          numberOfLines={1}
        >
          {story.name}
        </Text>
        <Text variant="body" color={theme.gray500}>
          {story.timestamp}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const recentStatusStories = mockStatusStories.filter(
    story =>
      story.timestamp.includes('minutes') || story.timestamp.includes('hour'),
  );
  const viewedStatusStories = mockStatusStories.filter(
    story => story.timestamp.includes('Yesterday') || story.isViewed,
  );

  return (
    <Screen>
      <Header title="Status" />

      <ScrollView
        style={[layout.flex1, { backgroundColor: theme.background }]}
        showsVerticalScrollIndicator={false}
      >
        {renderMyStatus()}

        {recentStatusStories.length > 0 && (
          <View style={styles.section}>
            <Text
              variant="body"
              color={theme.gray500}
              style={styles.sectionTitle}
            >
              Recent updates
            </Text>
            {recentStatusStories.map(renderStatusStory)}
          </View>
        )}

        {viewedStatusStories.length > 0 && (
          <View style={styles.section}>
            <Text
              variant="body"
              color={theme.gray500}
              style={styles.sectionTitle}
            >
              Viewed updates
            </Text>
            {viewedStatusStories.map(renderStatusStory)}
          </View>
        )}

        <View style={[styles.privacyCard, { backgroundColor: theme.card }]}>
          <Text variant="body" color={theme.gray500} style={styles.privacyText}>
            🔒 Your status updates are end-to-end encrypted
          </Text>
        </View>
      </ScrollView>

      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={[styles.fabSecondary, { backgroundColor: theme.card }]}
        >
          <Text variant="title">📷</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.fab, { backgroundColor: theme.primary }]}
        >
          <Text variant="title" color={theme.background}>
            ✏️
          </Text>
        </TouchableOpacity>
      </View>
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
    marginLeft: 8,
  },

  myStatusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
  },

  statusItem: {
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

  myAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    ...layout.center,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    ...layout.center,
  },

  statusRing: {
    borderWidth: 2,
  },

  addIcon: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    ...layout.center,
    borderWidth: 2,
    borderColor: '#FFF',
  },

  statusCount: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    ...layout.center,
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: '#FFF',
  },

  section: {
    marginTop: 16,
  },

  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  privacyCard: {
    margin: 16,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  privacyText: {
    textAlign: 'center',
    fontSize: 12,
  },

  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },

  fabSecondary: {
    width: 40,
    height: 40,
    borderRadius: 20,
    ...layout.center,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    ...layout.center,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default Status;
