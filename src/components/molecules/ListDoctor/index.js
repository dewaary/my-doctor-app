import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils';
import {IconNext} from '../../../assets';

const ListDoctor = ({image, name, description, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.wrapperText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: color.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperText: {
    flex: 1,
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
  desc: {
    fontSize: 12,
    color: color.text.secondary,
  },
});
