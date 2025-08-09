import React from 'react';
import { Stack, usePathname, useRouter } from 'expo-router';
import { colors } from '@/Theme/colors';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';

export default function DriverLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const { onboardingComplete } = useDriverOnboardingStore();

  if (!onboardingComplete && !pathname?.includes('/onboarding')) {
    router.replace('/(driver)/onboarding/welcome');
  }

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


