import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Buttom, Gap, Header, Input, Profile} from '../../components';
import {color, getData} from '../../utils';
import {FIREBASE} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profesion: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  });

  const update = () => {
    console.log('profile', profile);
    const data = profile;
    data.photo = profile.photo.uri;

    console.log('new password', password);

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password kurang dari 6',
          type: 'default',
          backgroundColor: color.error,
          color: 'white',
        });
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
      navigation.replace('MainApp');
    }

    const updatePassword = () => {
      console.log('new password', password);

      if (password.length > 0) {
        if (password.length < 6) {
          showMessage({
            message: 'Password kurang dari 6',
            type: 'default',
            backgroundColor: color.error,
            color: 'white',
          });
        } else {
          FIREBASE.auth()
            .onAuthStateChanged(user => {
              if (user) {
                user.updatePassword(password).then(res => {
                  console.log('success', res);
                });
              }
            })
            .catch(error => {
              showMessage({
                message: error.message,
                type: 'default',
                backgroundColor: color.error,
                color: 'white',
              });
            });
        }
      }
    };

    const updateProfileData = () => {
      const data = profile;
      data.photo = profile.photo.uri;
      FIREBASE.database()
        .ref(`users/${profile.uid}/`)
        .update(data)
        .then(() => {
          console.log('success');
        })
        .catch(error => {
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: color.error,
            color: color.white,
          });
        });
    };
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

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
          // setHasPhoto(true);
        }
      },
    );
  };
  return (
    <View style={styles.container}>
      <Header title={'Edit Account'} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile photo={photo} onPress={getImage} />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profesion}
            onChangeText={value => changeText('profesion', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disable={true} />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Buttom title={'Save Profile'} onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
