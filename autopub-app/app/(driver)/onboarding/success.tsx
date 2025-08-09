import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/Theme/colors';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';

export default function OnboardingSuccessScreen() {
  const router = useRouter();
  const { setComplete } = useDriverOnboardingStore();

  useEffect(() => {
    setComplete(true);
  }, [setComplete]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, marginBottom: 8 }}>🎉</Text>
      <Text style={styles.title}>Votre profil conducteur est prêt !</Text>
      <Button title="Voir les campagnes" onPress={() => router.replace('/(driver)/driver')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { color: colors.text, fontSize: 20, fontWeight: '800', textAlign: 'center', marginBottom: 16 },
});


