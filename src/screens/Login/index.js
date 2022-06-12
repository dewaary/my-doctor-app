import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ILLogo} from '../../assets';
import {Buttom, Gap, Input, Link, Loading} from '../../components';
import {color, storeData, useForm} from '../../utils';
import {FIREBASE} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    FIREBASE.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('success', res);
        setLoading(false);
        FIREBASE.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: color.error,
          color: color.white,
        });
      });
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title={'Forgot Password'} size={12} onPress={login} />
          <Gap height={40} />
          <Buttom
            title={'Sign In'}
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title={'Create New Accout'}
            size={16}
            align={'center'}
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: color.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: color.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
