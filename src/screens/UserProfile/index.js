import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, ListDoctor, Profile} from '../../components';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name={'Kadek Devi'} desc={'Dokter Anak'} />
      <Gap height={14} />
      <ListDoctor
        name="Edit Profile"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ListDoctor
        name="Edit Profile"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
      />
      <ListDoctor
        name="Edit Profile"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
      />
      <ListDoctor
        name="Edit Profile"
        description={'Last Update Yesterdat'}
        type={'next'}
        icon={'edit-profile'}
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
