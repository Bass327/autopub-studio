import React from 'react';
import { Stack } from 'expo-router';
import { colors } from '@/Theme/colors';

export default function AdvertiserLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.blue },
        headerTintColor: colors.white,
        headerTitleStyle: { color: colors.white, fontWeight: '700' },
      }}
    />
  );
}


