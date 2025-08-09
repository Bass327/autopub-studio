import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/Theme/colors';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';
import Chip from '@/components/ui/Chip';
import Slider from '@react-native-community/slider';
import Input from '@/components/ui/Input';
import { SENEGAL_CITIES } from '@/constants/senegalCities';
import { Picker } from '@react-native-picker/picker';

export default function PreferencesScreen() {
  const router = useRouter();
  const { preferences, updatePreferences } = useDriverOnboardingStore();
  const [formats, setFormats] = useState<( 'VINYLE' | 'LED' | 'HYBRIDE')[]>(preferences.formats);
  const [maxRadius, setMaxRadius] = useState(preferences.maxRadius);
  const [city, setCity] = useState(preferences.city);

  const toggle = (f: 'VINYLE' | 'LED' | 'HYBRIDE') => {
    setFormats((cur) => (cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f]));
  };

  const next = () => {
    updatePreferences({ formats, maxRadius, city });
    router.push('/(driver)/onboarding/availability');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Préférences</Text>
      <Text style={styles.hint}>Sélectionnez les formats de publicité que vous acceptez</Text>
      <View style={styles.row}>
        <Chip label="VINYLE" selected={formats.includes('VINYLE')} onPress={() => toggle('VINYLE')} />
        <Chip label="LED" selected={formats.includes('LED')} onPress={() => toggle('LED')} />
        <Chip label="HYBRIDE" selected={formats.includes('HYBRIDE')} onPress={() => toggle('HYBRIDE')} />
      </View>
      <Text style={styles.label}>Rayon max : {maxRadius} km</Text>
      <Slider minimumValue={10} maximumValue={100} step={1} minimumTrackTintColor={colors.yellow} maximumTrackTintColor={colors.muted} thumbTintColor={colors.yellow} value={maxRadius} onValueChange={setMaxRadius} />
      <View style={[styles.pickerWrap, { backgroundColor: '#F5F5F5' }]}>
        <Picker selectedValue={city} onValueChange={(v) => setCity(String(v))}>
          <Picker.Item label="Ville principale" value="" />
          {SENEGAL_CITIES.map((c) => (
            <Picker.Item label={c} value={c} key={c} />
          ))}
        </Picker>
      </View>
      <Button title="Suivant" onPress={next} disabled={formats.length === 0 || !city} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 16, gap: 12 },
  title: { color: colors.text, fontWeight: '800', fontSize: 18 },
  row: { flexDirection: 'row', gap: 8 },
  label: { color: colors.text },
  hint: { color: '#9CA3AF' },
  pickerWrap: { borderRadius: 10, overflow: 'hidden' },
});


