import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/Theme/colors';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';

export default function ApplySuccessScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, marginBottom: 8 }}>✅</Text>
      <Text style={styles.title}>Votre candidature a été envoyée !</Text>
      <Text style={styles.subtitle}>Nous vous contacterons si vous êtes sélectionné.</Text>
      <Button title="Retour à mes campagnes" onPress={() => router.replace('/(driver)/driver')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { color: colors.white, fontSize: 20, fontWeight: '800', textAlign: 'center', marginBottom: 8 },
  subtitle: { color: colors.white, opacity: 0.9, textAlign: 'center', marginBottom: 16 },
});


