import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttom, Gap, Header, Input, Profile} from '../../components';
import {color} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title={'Edit Account'} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Buttom
            title={'Save Profile'}
            onPress={() => navigation.goBack('UserProfile')}
          />
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
