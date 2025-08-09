import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/Theme/colors';
import Button from '@/components/ui/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';

export default function AvailabilityScreen() {
  const router = useRouter();
  const { updatePreferences } = useDriverOnboardingStore();
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date(Date.now() + 7 * 86400000));

  const next = () => {
    updatePreferences({}); // placeholder, on pourrait stocker les dates si besoin
    router.push('/(driver)/onboarding/review');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disponibilités</Text>
      <Text style={styles.label}>Début</Text>
      <DateTimePicker value={start} onChange={(_, d) => d && setStart(d)} mode="date" />
      <Text style={styles.label}>Fin</Text>
      <DateTimePicker value={end} onChange={(_, d) => d && setEnd(d)} mode="date" />
      <Button title="Suivant" onPress={next} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 16, gap: 12 },
  title: { color: colors.text, fontWeight: '800', fontSize: 18 },
  label: { color: colors.text },
});


