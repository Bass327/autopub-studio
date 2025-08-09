import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, Modal, Pressable } from 'react-native';
import { colors } from '@/Theme/colors';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDateDDMMYYYY } from '@/utils/format';

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { personal, updatePersonal } = useDriverOnboardingStore();
  const [form, setForm] = useState(personal);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const next = () => {
    if (!form.fullName || !form.email || !form.phone || !form.birthDate) {
      Alert.alert('Champs requis', 'Merci de remplir tous les champs');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      updatePersonal(form);
      setLoading(false);
      router.push('/(driver)/onboarding/vehicle-info');
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Ex: Mamadou Ndiaye" value={form.fullName} onChangeText={(t) => setForm({ ...form, fullName: t })} containerStyle={styles.input} />
      <Text style={styles.hint}>Nom complet</Text>

      <Input placeholder="Ex: mamadou.ndiaye@email.com" keyboardType="email-address" value={form.email} onChangeText={(t) => setForm({ ...form, email: t })} containerStyle={styles.input} />
      <Text style={styles.hint}>Adresse email</Text>

      <Input placeholder="Ex: +221 77 123 45 67" keyboardType="phone-pad" value={form.phone} onChangeText={(t) => setForm({ ...form, phone: t })} containerStyle={styles.input} />
      <Text style={styles.hint}>Téléphone</Text>

      <Pressable accessibilityRole="button" accessibilityLabel="Choisir la date de naissance" onPress={() => setShowPicker(true)} style={[styles.dateButton, { backgroundColor: colors.yellow }]}>
        <Text style={{ color: colors.text, fontWeight: '700', textAlign: 'center' }}>{form.birthDate ? `Date: ${formatDateDDMMYYYY(form.birthDate)}` : 'Choisir la date'}</Text>
      </Pressable>
      <Text style={styles.hint}>Ex: 12/04/1996</Text>

      <Button title="Suivant" onPress={next} disabled={!form.fullName || !form.email || !form.phone || !form.birthDate} />

      {showPicker && (
        <DateTimePicker
          value={form.birthDate ? new Date(form.birthDate) : new Date('1995-01-01')}
          mode="date"
          onChange={(_, d) => {
            setShowPicker(false);
            if (d) setForm({ ...form, birthDate: formatDateDDMMYYYY(d) });
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 16, gap: 12 },
  input: { backgroundColor: '#F5F5F5' },
  hint: { color: '#9CA3AF', marginTop: -6, marginBottom: 6 },
});


