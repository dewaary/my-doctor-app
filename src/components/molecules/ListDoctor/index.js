import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils';

const ListDoctor = ({image, name, description}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>
          {description}
        </Text>
      </View>
    </View>
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
