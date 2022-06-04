import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../../../utils';
import IconOnly from './iconOnly';

const Buttom = ({type, title, onPress, icon}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttom;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? color.buttom.secondary.background
        : color.buttom.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color:
      type === 'secondary'
        ? color.buttom.secondary.text
        : color.buttom.primary.text,
  }),
});
