import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttom, Gap, Header, Profile, ProfileItem} from '../../components';
import {color} from '../../utils';

const DokterProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'Dokor Profile'} onPress={() => navigation.goBack()} />
      <Profile name="Kadek Devi" desc={'Dokter Anak'} />
      <Gap height={10} />
      <ProfileItem
        label={'Alumnus'}
        value={'Universitas Atma Jaya Yogyakarta'}
      />
      <ProfileItem
        label={'Alumnus'}
        value={'Universitas Atma Jaya Yogyakarta'}
      />
      <ProfileItem
        label={'Alumnus'}
        value={'Universitas Atma Jaya Yogyakarta'}
      />
      <View style={styles.bottom}>
        <Buttom
          title={'Start Consultation'}
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DokterProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  bottom: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
