import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Buttom, Gap, Input, Link} from '../../components';

const Login = () => {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title={'Forgot Password'} size={12} />
      <Gap height={40} />
      <Buttom title={'Sign In'} />
      <Gap height={30} />
      <Link title={'Create New Accout'} size={16} align={'center'} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
