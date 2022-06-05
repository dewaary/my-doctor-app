import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILCatUmum} from '../../../assets';
import {color} from '../../../utils';

const DoctorCategory = () => {
  return (
    <View style={styles.container}>
      <ILCatUmum style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>Dokter Umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: color.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 130,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    color: color.text.primary,
  },
  category: {
    fontSize: 12,
    color: color.text.primary,
  },
});
