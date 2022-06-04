import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttom, Gap, Header, Input} from '../../components';
import {color} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title={'Daftar Akun'} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Buttom title="Continue" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
});
