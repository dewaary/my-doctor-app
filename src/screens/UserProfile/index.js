import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, Header, ListDoctor, Profile} from '../../components';
import {color, getData, showError} from '../../utils';
import {ILNullPhoto} from '../../assets';
import {FIREBASE} from '../../config';
import {showMessage} from 'react-native-flash-message';
import {getAuth, signOut} from 'firebase/auth';
import auth from 'firebase/auth';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profesion: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  });

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigation.replace('GetStarted')
      })
      .catch(error => {
        showError(error.message);
      });
    // FIREBASE.auth()
    //   .signOut()
    //   .then(res => {
    //     console.log('ini logout', res);
    //   })
    //   .catch(error => {
    //     showMessage({
    //       message: error.message,
    //       type: 'default',
    //       backgroundColor: color.error,
    //       color: color.white,
    //     });
    //   });
    // auth()
    //   .signOut()
    //   .then(res => {
    //     console.log('success', res);
    //     navigation.replace('GetStarted');
    //   })
    //   .catch(error => {
    //     showMessage({
    //       message: error.message,
    //       type: 'default',
    //       backgroundColor: color.error,
    //       color: color.white,
    //     });
    //   });
    // console.log('berhasilll');
  };

  return (
    <View style={styles.container}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          desc={profile.profesion}
          photo={profile.photo}
        />
      )}
      <Gap height={14} />
      <ListDoctor
        name="Edit Profile"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ListDoctor
        name="Language"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
      />
      <ListDoctor
        name="Give Use Rate"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
      />
      <ListDoctor
        name="LogOut"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
        onPress={logOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
