import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from '@/Theme/colors';

import Button from '@/components/ui/Button';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/react-logo.png')}
        style={styles.logo}
        contentFit="contain"
      />
      <View style={styles.content}>
        <View style={styles.titleWrap}>
          <Title>AutoPub Studio</Title>
          <Subtitle>Publicité mobile intelligente</Subtitle>
        </View>
        <Button title="Je suis conducteur" onPress={() => {}} />
        <Button title="Je suis annonceur" onPress={() => {}} />
      </View>
    </View>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <TextBase style={styles.title}>{children}</TextBase>;
}

function Subtitle({ children }: { children: React.ReactNode }) {
  return <TextBase style={styles.subtitle}>{children}</TextBase>;
}

function TextBase({ children, style }: { children: React.ReactNode; style?: any }) {
  return (
    <View>
      <Text style={style}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    padding: 24,
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 24,
  },
  content: {
    gap: 16,
  },
  titleWrap: {
    marginBottom: 8,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.white,
    opacity: 0.9,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
});
