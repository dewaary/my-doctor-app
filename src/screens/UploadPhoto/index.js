import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttom, Gap, Header, Link} from '../../components';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {color} from '../../utils';

const UploadPhoto = () => {
  return (
    <View style={styles.container}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Dewa Ari</Text>
          <Text style={styles.profesion}>Product Designer</Text>
        </View>
        <View>
          <Buttom title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align={'center'} size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: color.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: color.text.primary,
    // fontFamily,
    textAlign: 'center',
  },
  profesion: {
    fontSize: 18,
    // fontFamily:
    textAlign: 'center',
    color: color.secondary,
  },
});
