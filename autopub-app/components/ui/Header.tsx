import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/Theme/colors';

type Props = {
  title: string;
  subtitle?: string;
  avatar?: ImageSourcePropType;
  right?: React.ReactNode;
};

export default function Header({ title, subtitle, avatar, right }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {avatar ? <Image source={avatar} style={styles.avatar} /> : null}
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      </View>
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.blue,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.white,
    opacity: 0.9,
  },
});


