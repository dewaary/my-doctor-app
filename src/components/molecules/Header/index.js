import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttom, Gap} from '../..';
import {color} from '../../../utils';
import DarkProfileHeader from './DarkProfileHeader';

const Header = ({onPress, title, type}) => {
  if (type === 'dark-profile') {
    return <DarkProfileHeader onPress={onPress} />;
  }
  return (
    <View style={styles.container(type)}>
      <Buttom
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={25} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: type === 'dark' ? color.secondary : color.white,
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: type === 'dark' ? color.white : color.text.primary,
  }),
});
