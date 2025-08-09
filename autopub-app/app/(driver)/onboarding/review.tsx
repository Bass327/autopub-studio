import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/Theme/colors';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';
import Card from '@/components/ui/Card';

export default function ReviewScreen() {
  const router = useRouter();
  const { personal, vehicle, preferences } = useDriverOnboardingStore();
  return (
    <View style={styles.container}>
      <Card style={{ gap: 6 }}>
        <Text style={styles.section}>Infos personnelles</Text>
        <Text style={styles.item}>{personal.fullName}</Text>
        <Text style={styles.item}>{personal.email}</Text>
        <Text style={styles.item}>{personal.phone}</Text>
        <Text style={styles.item}>{personal.birthDate}</Text>
      </Card>
      <Card style={{ gap: 6 }}>
        <Text style={styles.section}>Véhicule</Text>
        <Text style={styles.item}>{vehicle.make} {vehicle.model} {vehicle.year}</Text>
        <Text style={styles.item}>Couleur: {vehicle.color}</Text>
        <Text style={styles.item}>Immat: {vehicle.plate}</Text>
      </Card>
      <Card style={{ gap: 6 }}>
        <Text style={styles.section}>Préférences</Text>
        <Text style={styles.item}>Formats: {preferences.formats.join(', ') || '—'}</Text>
        <Text style={styles.item}>Rayon: {preferences.maxRadius} km</Text>
        <Text style={styles.item}>Ville: {preferences.city || '—'}</Text>
      </Card>
      <Button title="Valider mon profil" onPress={() => router.push('/(driver)/onboarding/success')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 16, gap: 12 },
  section: { color: colors.text, fontWeight: '800' },
  item: { color: colors.text },
});


