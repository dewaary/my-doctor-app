import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Hospital1} from '../../../assets';
import {color} from '../../../utils';

const ListHospitals = () => {
  return (
    <View style={styles.container}>
      <Image source={Hospital1} style={styles.picture} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default ListHospitals;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: color.border,
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    color: color.text.primary,
  },
  address: {
    fontSize: 12,
    color: color.text.secondary,
    marginTop: 16,
  },
});
