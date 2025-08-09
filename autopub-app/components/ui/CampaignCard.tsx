import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { colors } from '@/Theme/colors';

type Props = {
  name: string;
  period: string;
  status: 'vinyle' | 'LED' | 'mixte';
};

export default function CampaignCard({ name, period, status }: Props) {
  return (
    <Card style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.period}>{period}</Text>
      <View style={[styles.badge, getStatusStyle(status)]}>
        <Text style={styles.badgeText}>{status.toUpperCase()}</Text>
      </View>
    </Card>
  );
}

function getStatusStyle(status: Props['status']) {
  switch (status) {
    case 'vinyle':
      return { backgroundColor: '#2563EB' };
    case 'LED':
      return { backgroundColor: '#10B981' };
    default:
      return { backgroundColor: colors.yellow };
  }
}

const styles = StyleSheet.create({
  card: { gap: 8 },
  name: { fontSize: 16, fontWeight: '700', color: colors.text },
  period: { color: colors.muted },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: { color: colors.white, fontWeight: '700', fontSize: 12 },
});


