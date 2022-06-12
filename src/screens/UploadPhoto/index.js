import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Buttom, Gap, Header, Link} from '../../components';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {color, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {FIREBASE} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profesion, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.errorMessage) {
          showMessage({
            message: 'oops, sepertinya foto anda jelek :)',
            type: 'default',
            backgroundColor: color.error,
            color: color.white,
          });
        } else {
          console.log('response getImage', response);
          setPhotoForDB(
            `data: ${response.assets[0].type};base64, ${response.assets[0].fileName}`,
          );

          const source = {uri: response.assets[0].uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    FIREBASE.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto ? (
              <IconRemovePhoto style={styles.addPhoto} />
            ) : (
              <IconAddPhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profesion}>{profesion}</Text>
        </View>
        <View>
          <Buttom
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align={'center'}
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
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
    borderRadius: 100 / 2,
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
