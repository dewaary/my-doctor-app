import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyNews1} from '../../../assets';
import {color} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: color.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: color.text.primary,
    maxWidth: '90%',
  },
  date: {
    fontSize: 16,
    color: color.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
