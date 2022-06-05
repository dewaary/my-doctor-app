import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ListDoctor} from '../../components';
import {color} from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

const Messages = () => {
  const [doctors, serDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, Terimakasih atas waktunya',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Devi',
      desc: 'Baik ibu, Terimakasih atas waktunya',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Laek',
      desc: 'Baik ibu, Terimakasih atas waktunya',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListDoctor
              key={doctor.id}
              image={doctor.profile}
              name={doctor.name}
              description={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: color.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    color: color.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
