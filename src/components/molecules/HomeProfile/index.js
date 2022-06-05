import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyUser} from '../../../assets';
import {color} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Dewa Ari</Text>
        <Text style={styles.profession}>Mobile Developer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    color: color.text.primary,
  },
  profession: {
    fontSize: 12,
    color: color.text.secondary,
  },
});
