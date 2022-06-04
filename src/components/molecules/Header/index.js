import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBackDark} from '../../../assets';
import {Gap} from '../..';
import {color} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>Header</Text>
      <Gap width={25} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: color.text.primary,
  },
});
