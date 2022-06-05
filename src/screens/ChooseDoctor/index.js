import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ListDoctor} from '../../components';
import {DummyDoctor3} from '../../assets';
import {color} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type={'dark'}
        title={'Pilih Dokter Anak'}
        onPress={() => navigation.goBack()}
      />
      <ListDoctor
        type="next"
        image={DummyDoctor3}
        name="Alexander Jane"
        description={'wanita'}
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListDoctor
        type="next"
        image={DummyDoctor3}
        name="Alexander Jane"
        description={'wanita'}
      />
      <ListDoctor
        type="next"
        image={DummyDoctor3}
        name="Alexander Jane"
        description={'wanita'}
      />
      <ListDoctor
        type="next"
        image={DummyDoctor3}
        name="Alexander Jane"
        description={'wanita'}
      />
      <ListDoctor
        type="next"
        image={DummyDoctor3}
        name="Alexander Jane"
        description={'wanita'}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
});
