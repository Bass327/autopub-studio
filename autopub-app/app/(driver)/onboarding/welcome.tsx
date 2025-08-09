import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/Theme/colors';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';

export default function DriverOnboardingWelcome() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur AutoPub Studio</Text>
      <Text style={styles.subtitle}>Commençons par configurer votre profil conducteur</Text>
      <Button title="Commencer" onPress={() => router.push('/(driver)/onboarding/personal-info')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, justifyContent: 'center', padding: 24 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800', textAlign: 'center', marginBottom: 8 },
  subtitle: { color: colors.text, opacity: 0.8, textAlign: 'center', marginBottom: 16 },
});


