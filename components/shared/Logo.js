import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../../config/Colors';

const Logo = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.divider} />
      <Text style={styles.title}>
        Todo <Text style={styles.titleSign}>Lists</Text>
      </Text>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 64,
  },
  titleSign: {
    fontWeight: '300',
    color: colors.blue,
  },
});

export default Logo;
