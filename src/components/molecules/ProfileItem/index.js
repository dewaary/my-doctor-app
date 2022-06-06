import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils';

const ProfileItem = ({label, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: color.border,
  },
  label: {
    fontSize: 14,
    color: color.text.secondary,
    marginBottom: 6,
  },
  value: {
    fontSize: 14,
    color: color.text.primary,
  },
});
