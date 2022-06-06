import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { IconStart} from '../../../assets';
import {color} from '../../../utils';

const RatedDoctor = ({name, desc, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center'
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
