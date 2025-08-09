import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { colors } from '@/Theme/colors';

type Item = {
  id: string;
  name: string;
  amount?: string; // for driver
  impressions?: string; // for advertiser
  period: string;
};

type Props = {
  title: string;
  items: Item[];
};

export default function HistoryList({ title, items }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => (
          <Card style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.period}>{item.period}</Text>
            </View>
            {item.amount ? (
              <Text style={styles.right}>{item.amount}</Text>
            ) : item.impressions ? (
              <Text style={styles.right}>{item.impressions}</Text>
            ) : null}
          </Card>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 8 },
  title: { color: colors.text, fontWeight: '800', fontSize: 16 },
  row: { flexDirection: 'row', alignItems: 'center' },
  name: { color: colors.text, fontWeight: '600' },
  period: { color: colors.muted },
  right: { color: colors.text, fontWeight: '700' },
});


