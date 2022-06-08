import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Buttom, Gap, Header, Input, Loading} from '../../components';
import {color, useForm} from '../../utils';
import {FIREBASE} from '../../config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profesion: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(success => {
        // Signed in
        console.log('register success', success);
        // ...
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log('error Register', errorMessage);
        // ..
      });
  };
  return (
    <>
    <View style={styles.container}>
      <Header onPress={() => navigation.goBack()} title={'Daftar Akun'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={form.profesion}
            onChangeText={value => setForm('profesion', value)}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Buttom title="Continue" onPress={onContinue} />
        </View>
      </ScrollView>
    </View>
    <Loading />
    </>
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
