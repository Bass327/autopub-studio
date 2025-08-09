import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { colors, gradient } from '@/Theme/colors';
import Button from '@/components/ui/Button';

export default function WelcomeScreen() {
  return (
    <LinearGradient colors={gradient as unknown as string[]} style={styles.container}>
      <View style={styles.content}>
        <Button title="Je suis conducteur" onPress={() => router.push('/driver')} />
        <Button title="Je suis annonceur" onPress={() => router.push('/advertiser')} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  content: {
    gap: 16,
  },
});


