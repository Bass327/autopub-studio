import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/Theme/colors';
import { useCampaignsStore } from '@/stores/campaigns';
import type { Campaign, CampaignFormat } from '@/types/campaign';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Chip from '@/components/ui/Chip';
import Input from '@/components/ui/Input';
import Slider from '@react-native-community/slider';

export default function CampaignsListScreen() {
  const router = useRouter();
  const { campaigns, filter, setFilter, resetFilter } = useCampaignsStore();
  const [selectedFormats, setSelectedFormats] = useState<CampaignFormat[]>(filter.formats);
  const [city, setCity] = useState(filter.city);
  const [maxRadius, setMaxRadius] = useState(filter.maxRadius);

  const filtered = useMemo(() => {
    return campaigns.filter((c) => {
      const byFormat = selectedFormats.length === 0 || selectedFormats.some((f) => c.formats.includes(f));
      const byRadius = c.radiusKm <= maxRadius;
      const byCity = city.trim() === '' || c.city.toLowerCase().includes(city.trim().toLowerCase());
      return byFormat && byRadius && byCity && c.status !== 'PENDING';
    });
  }, [campaigns, selectedFormats, maxRadius, city]);

  const toggleFormat = (f: CampaignFormat) => {
    setSelectedFormats((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  };

  const applyFilters = () => setFilter({ formats: selectedFormats, city, maxRadius });
  const clearFilters = () => {
    setSelectedFormats([]);
    setCity('');
    setMaxRadius(50);
    resetFilter();
  };

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <Text style={styles.filtersTitle}>Filtres</Text>
        <View style={styles.row}> 
          <Chip label="VINYLE" selected={selectedFormats.includes('VINYLE')} onPress={() => toggleFormat('VINYLE')} />
          <Chip label="LED" selected={selectedFormats.includes('LED')} onPress={() => toggleFormat('LED')} />
          <Chip label="HYBRIDE" selected={selectedFormats.includes('HYBRIDE')} onPress={() => toggleFormat('HYBRIDE')} />
        </View>
        <View style={styles.sliderRow}>
          <Text style={styles.label}>Rayon max: {Math.round(maxRadius)} km</Text>
          <Slider
            minimumValue={5}
            maximumValue={50}
            step={1}
            minimumTrackTintColor={colors.yellow}
            maximumTrackTintColor={colors.muted}
            thumbTintColor={colors.yellow}
            value={maxRadius}
            onValueChange={setMaxRadius}
          />
        </View>
        <Input placeholder="Ville" value={city} onChangeText={setCity} />
        <View style={styles.actions}>
          <Button title="Appliquer" onPress={applyFilters} />
          <Pressable onPress={clearFilters}><Text style={styles.reset}>Réinitialiser</Text></Pressable>
        </View>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, gap: 12 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push({ pathname: '/(driver)/campaigns/[id]', params: { id: item.id } })}>
            <CampaignListItem item={item} />
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Aucune campagne trouvée</Text>}
      />
    </View>
  );
}

function CampaignListItem({ item }: { item: Campaign }) {
  const firstFormat = item.formats[0];
  return (
    <Card>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 }}>
        <Text style={styles.brand}>{item.brand}</Text>
        <View style={[styles.badge, badgeStyle(firstFormat)]}>
          <Text style={styles.badgeText}>{firstFormat}</Text>
        </View>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.meta}>{item.city} · {item.radiusKm} km</Text>
      <Text style={styles.meta}>Du {item.startDate} au {item.endDate}</Text>
      <Text style={styles.pay}>Pay/km: {item.payPerKm} FCFA</Text>
    </Card>
  );
}

function badgeStyle(format: CampaignFormat) {
  switch (format) {
    case 'VINYLE':
      return { backgroundColor: '#2563EB' };
    case 'LED':
      return { backgroundColor: '#10B981' };
    default:
      return { backgroundColor: colors.yellow };
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  filters: { gap: 8, padding: 16, backgroundColor: colors.blueDark },
  filtersTitle: { color: colors.white, fontWeight: '800', fontSize: 16 },
  row: { flexDirection: 'row', gap: 8 },
  sliderRow: { gap: 4 },
  label: { color: colors.white },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  reset: { color: colors.white, textDecorationLine: 'underline' },
  empty: { color: colors.white, textAlign: 'center', marginTop: 24 },
  brand: { color: colors.text, fontWeight: '800' },
  name: { color: colors.text, fontWeight: '600' },
  meta: { color: colors.muted },
  pay: { color: colors.text, fontWeight: '700', marginTop: 6 },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  badgeText: { color: colors.white, fontWeight: '700', fontSize: 12 },
});


