import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fonts} from '../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>Ibu Dokter, Phdhh hdhdhhd hdhdh hdhdh</Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: color.cardLight,
    maxWidth: '75%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    // fontFamily: fonts
    color: color.text.primary,
  },
  date: {
    fontSize: 11,
    // fontFamily
    color: color.text.secondary,
    marginTop: 8,
  },
});
