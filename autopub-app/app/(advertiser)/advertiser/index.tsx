import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { colors } from '@/Theme/colors';
import Header from '@/components/ui/Header';
import StatCard from '@/components/ui/StatCard';
import CampaignCard from '@/components/ui/CampaignCard';
import Button from '@/components/ui/Button';
import HistoryList from '@/components/ui/HistoryList';

export default function AdvertiserDashboard() {
  return (
    <View style={styles.container}>
      <Header title="AutoPub Studio" subtitle="Espace Annonceur" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <StatCard label="Véhicules actifs" value="42" hint="Campagne Q4 - Afrique Ouest" />
        <CampaignCard name="Campagne: Lancement Produit X" period="1 Oct - 30 Nov" status="mixte" />
        <StatCard label="Impressions estimées" value="2,4M" />
        <Button title="Lancer nouvelle campagne" onPress={() => {}} />
        <HistoryList
          title="Historique"
          items={[
            { id: '1', name: 'Back To School', period: 'Sep 2025', impressions: '1,1M' },
            { id: '2', name: 'Eté Fraîcheur', period: 'Juil 2025', impressions: '900k' },
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


