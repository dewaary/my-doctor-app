import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils';
import {Buttom} from '../..';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan Anda" />
      <Buttom type={'btn-icon'} />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: color.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    maxHeight: 45,
  },
});
