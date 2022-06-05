import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ILCatObat, ILCatPsikiater, ILCatUmum} from '../../../assets';
import {color} from '../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if(category === 'dokter umum') {
      return <ILCatUmum style={styles.illustration}/>
    }
    if(category === 'psikiater'){
      return <ILCatPsikiater style={styles.illustration}/>
    }
    if(category === 'dokter obat') {
      return <ILCatObat style={styles.illustration}/>
    }
    return <ILCatUmum style={styles.illustration}/>
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: color.cardLight,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginRight: 10,
    width: 130,
    height: 130,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontSize: 12,
    color: color.text.primary,
  },
  category: {
    fontSize: 12,
    color: color.text.primary,
  },
});
