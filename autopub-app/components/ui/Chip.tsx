import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors } from '@/Theme/colors';

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export default function Chip({ label, selected, onPress, style }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.base, selected ? styles.selected : styles.unselected, style]}
    >
      <Text style={[styles.text, selected && styles.textSelected]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
  },
  unselected: {
    backgroundColor: 'transparent',
    borderColor: colors.yellow,
  },
  selected: {
    backgroundColor: colors.yellow,
    borderColor: colors.yellow,
  },
  text: {
    color: colors.white,
    fontWeight: '600',
  },
  textSelected: {
    color: colors.text,
  },
});


