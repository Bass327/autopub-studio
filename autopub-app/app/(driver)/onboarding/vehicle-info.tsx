import React, { useState } from 'react';
import { Alert, StyleSheet, View, Text, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { colors } from '@/Theme/colors';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function VehicleInfoScreen() {
  const router = useRouter();
  const { vehicle, updateVehicle } = useDriverOnboardingStore();
  const [form, setForm] = useState(vehicle);

  const next = () => {
    if (!form.make || !form.model || !form.year || !form.color || !form.plate) {
      Alert.alert('Champs requis', 'Merci de remplir tous les champs');
      return;
    }
    updateVehicle(form);
    router.push('/(driver)/onboarding/preferences');
  };

  const pickPhoto = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.7 });
    if (!res.canceled) setForm({ ...form, photoUri: res.assets[0].uri });
  };

  const years = Array.from({ length: 30 }, (_, i) => `${new Date().getFullYear() - i}`);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 80 }]} keyboardShouldPersistTaps="handled">
        <Input placeholder="Ex: Toyota" value={form.make} onChangeText={(t) => setForm({ ...form, make: t })} containerStyle={styles.input} />
        <Text style={styles.hint}>Marque</Text>

        <Input placeholder="Ex: Corolla" value={form.model} onChangeText={(t) => setForm({ ...form, model: t })} containerStyle={styles.input} />
        <Text style={styles.hint}>Modèle</Text>

        <View style={[styles.pickerWrap, styles.input]}>
          <Picker selectedValue={form.year} onValueChange={(v) => setForm({ ...form, year: String(v) })}>
            <Picker.Item label="Année" value="" />
            {years.map((y) => (
              <Picker.Item key={y} label={y} value={y} />
            ))}
          </Picker>
        </View>
        <Text style={styles.hint}>Année du véhicule</Text>

        <Input placeholder="Ex: Noir" value={form.color} onChangeText={(t) => setForm({ ...form, color: t })} containerStyle={styles.input} />
        <Text style={styles.hint}>Couleur</Text>

        <Input placeholder="Ex: DK-1234-AA" value={form.plate} onChangeText={(t) => setForm({ ...form, plate: t })} containerStyle={styles.input} />
        <Text style={styles.hint}>Immatriculation</Text>

        <Button title={form.photoUri ? 'Remplacer la photo' : 'Choisir une photo'} onPress={pickPhoto} />
        {form.photoUri ? <Image source={{ uri: form.photoUri }} style={styles.thumb} /> : null}
        <Button title="Suivant" onPress={next} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white, padding: 16, gap: 12 },
  input: { backgroundColor: '#F5F5F5' },
  hint: { color: '#9CA3AF', marginTop: -6, marginBottom: 6 },
  pickerWrap: { borderRadius: 10, overflow: 'hidden' },
  thumb: { width: 120, height: 80, borderRadius: 8, marginTop: 8, alignSelf: 'flex-start' },
});


