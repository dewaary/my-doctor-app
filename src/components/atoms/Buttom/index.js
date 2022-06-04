import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Buttom = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttom;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: type === 'secondary' ? '#112340' : 'white',
  }),
});
