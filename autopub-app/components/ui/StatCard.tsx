import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors } from '@/Theme/colors';
import Card from './Card';
import Button from './Button';

type Props = {
  label: string;
  value: string;
  hint?: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function StatCard({ label, value, hint, onPress, style }: Props) {
  return (
    <Card style={[styles.card, style]}>      
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}
      {onPress ? <Button title="Voir détails" onPress={onPress} /> : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 8,
  },
  label: {
    color: colors.text,
    opacity: 0.8,
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  hint: {
    color: colors.muted,
  },
});


