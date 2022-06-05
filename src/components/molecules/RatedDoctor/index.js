import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyDoctor1, IconStart} from '../../../assets';
import {color} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Alexa Rachel</Text>
        <Text style={styles.category}>Pediatrican</Text>
      </View>
      <View style={styles.rate}>
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  rate: {
    flexDirection: 'row',
  },
  profile: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: color.text.primary,
  },
  category: {
    fontSize: 12,
    color: color.text.secondary,
    marginTop: 2,
  },
});
