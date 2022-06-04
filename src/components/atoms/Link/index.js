import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils';

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: color.text.secondary,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
