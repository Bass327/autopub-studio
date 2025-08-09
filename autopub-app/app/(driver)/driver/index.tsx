import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { colors } from '@/Theme/colors';
import Header from '@/components/ui/Header';
import StatCard from '@/components/ui/StatCard';
import CampaignCard from '@/components/ui/CampaignCard';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';
import HistoryList from '@/components/ui/HistoryList';
import { useDriverOnboardingStore } from '@/stores/driverOnboarding';

export default function DriverDashboard() {
  const router = useRouter();
  const { onboardingComplete } = useDriverOnboardingStore();
  if (!onboardingComplete) {
    router.replace('/(driver)/onboarding/welcome');
    return null;
  }
  return (
    <View style={styles.container}>
      <Header
        title="Bonjour, Alex"
        subtitle="Heureux de vous revoir"
        avatar={require('@/assets/images/icon.png')}
      />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <StatCard
          label="Revenus ce mois-ci"
          value="125 500 FCFA"
          hint="Basé sur 24 jours actifs"
          onPress={() => {}}
        />
        <CampaignCard
          name="Campagne: Boisson Énergie +"
          period="15 Sep - 15 Oct"
          status="vinyle"
        />
        <Button title="Parcourir campagnes" onPress={() => router.push('/(driver)/campaigns')} />
        <HistoryList
          title="Historique"
          items={[
            { id: '1', name: 'Banky Pay', period: 'Août 2025', amount: '98 000 FCFA' },
            { id: '2', name: 'FastFood 2x1', period: 'Juil 2025', amount: '120 500 FCFA' },
          ]}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { gap: 12, padding: 16, paddingBottom: 24 },
});


