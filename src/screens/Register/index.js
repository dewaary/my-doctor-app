import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Buttom, Gap, Header, Input, Loading} from '../../components';
import {color, getData, storeData, useForm} from '../../utils';
import {FIREBASE} from '../../config';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profesion: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    const auth = getAuth();
    setLoading(true);
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(success => {
        // Signed in
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profesion: form.profesion,
          email: form.email,
          uid: success.user.uid,
        };
        FIREBASE.database()
          .ref('users/' + success.user.uid + '/')
          .set({data});
        storeData('user', data);
        navigation.navigate('UploadPhoto', data);
        console.log('register success', success);
        // ...
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: color.error,
          color: color.white,
        });
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
      {loading && <Loading />}
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
