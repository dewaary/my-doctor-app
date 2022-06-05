import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, fonts} from '../../../utils';
import {DummyDoctor3} from '../../../assets';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor3} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>Ibu Dokter, Phdhh hdhdhhd hdhdh hdhdh</Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: color.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    // fontFamily: fonts
    color: color.white,
  },
  date: {
    fontSize: 11,
    // fontFamily
    color: color.text.secondary,
    marginTop: 8,
  },
});
