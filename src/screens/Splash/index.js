import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {color} from '../../utils';
import {FIREBASE} from '../../config';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const Splash = ({navigation}) => {
  useEffect(() => {
    const auth = getAuth();
    const unLogin = onAuthStateChanged(auth, user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => unLogin();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: color.text.primary,
    marginTop: 20,
    // fontFamily:
  },
});
