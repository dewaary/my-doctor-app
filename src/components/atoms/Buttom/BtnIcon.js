import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconSendDark, IconSendLight} from '../../../assets';
import {color} from '../../../utils';

const BtnIcon = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </View>
  );
};

export default BtnIcon;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? color.disable : color.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
