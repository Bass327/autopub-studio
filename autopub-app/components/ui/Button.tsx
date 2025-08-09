import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors } from '@/Theme/colors';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export default function Button({ title, onPress, disabled, style, accessibilityLabel }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      style={({ pressed }) => [
        styles.base,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      android_ripple={{ color: colors.yellowSoft }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.yellow,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.9,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
});


