import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import { colors } from '@/Theme/colors';

type InputProps = TextInputProps & {
  left?: React.ReactNode;
  right?: React.ReactNode;
  containerStyle?: ViewStyle;
};

export default function Input({ left, right, style, containerStyle, ...props }: InputProps) {
  return (
    <View style={[styles.container, containerStyle] }>
      {left}
      <TextInput
        placeholderTextColor={colors.muted}
        style={[styles.input, style]}
        {...props}
      />
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
  },
});


