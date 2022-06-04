import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILGetstarted, ILLogo} from '../../assets';
import {Buttom, Gap} from '../../components/atoms';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetstarted} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Buttom
          title={'Get Started'}
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Buttom
          type={'secondary'}
          title={'Sign In'}
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginTop: 91,
    // fontFamily: 'Nunito-SemiBold',
  },
});
