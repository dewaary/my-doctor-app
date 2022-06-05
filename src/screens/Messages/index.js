import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListDoctor} from '../../components';
import {color} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: color.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    color: color.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
