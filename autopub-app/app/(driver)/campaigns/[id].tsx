import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { colors } from '@/Theme/colors';
import { useCampaignsStore } from '@/stores/campaigns';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function CampaignDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { campaigns, applyToCampaign } = useCampaignsStore();
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    return (
      <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={{ color: colors.white }}>Campagne introuvable.</Text>
      </View>
    );
  }

  const onApply = () => {
    applyToCampaign(campaign.id);
    router.replace('/(driver)/campaigns/success');
  };

  const formatDateRange = (startIso: string, endIso: string) => {
    const fmt: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
    const start = new Date(startIso);
    const end = new Date(endIso);
    const startStr = new Intl.DateTimeFormat('fr-FR', fmt).format(start).replace('.', '');
    const endStr = new Intl.DateTimeFormat('fr-FR', fmt).format(end).replace('.', '');
    return `Du ${startStr} au ${endStr}`;
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/react-logo.png')} style={styles.hero} />
      <View style={styles.content}>
        <Card style={{ gap: 8 }}>
          <Text style={styles.title}>{campaign.name}</Text>
          <Text style={styles.brand}>par {campaign.brand}</Text>
          <Text style={styles.location}>📍 {campaign.city} · Rayon {campaign.radiusKm} km</Text>
          <Text style={styles.meta}>{formatDateRange(campaign.startDate, campaign.endDate)}</Text>
          <Text style={styles.pay}>Pay/km: {campaign.payPerKm} FCFA</Text>
          <Text style={styles.meta}>Budget estimé: {campaign.budget.toLocaleString('fr-FR')} FCFA</Text>
          <Text style={styles.meta}>Véhicules recherchés: {campaign.vehiclesNeeded ?? 30}</Text>
          <View style={{ flexDirection: 'row', gap: 8, marginTop: 4, flexWrap: 'wrap' }}>
            {campaign.formats.map((f) => (
              <View key={f} style={[styles.badge, badgeStyle(f)]}>
                <Text style={styles.badgeText}>{f}</Text>
              </View>
            ))}
          </View>
          {campaign.description ? (
            <Text style={[styles.meta, { marginTop: 4 }]}>{campaign.description}</Text>
          ) : null}
        </Card>
        <Button title="Candidater à cette campagne" onPress={onApply} />
      </View>
    </View>
  );
}

function badgeStyle(format: string) {
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
  hero: { height: 160, width: '100%', resizeMode: 'contain', marginTop: 16 },
  content: { gap: 12, padding: 16 },
  title: { color: colors.text, fontWeight: '800', fontSize: 18 },
  brand: { color: colors.muted },
  location: { color: colors.text },
  meta: { color: colors.muted },
  pay: { color: colors.text, fontWeight: '800' },
  badge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  badgeText: { color: colors.white, fontWeight: '700', fontSize: 12 },
});


