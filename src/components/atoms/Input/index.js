import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    fontSize: 16,
    color: color.text.secondary,
    marginBottom: 6,
    // fontFamily
  },
});
