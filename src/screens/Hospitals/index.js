import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Hospital1, Hospital2, Hospital3, ILHospitalsBG } from '../../assets'
import { color } from '../../utils'
import { ListHospitals } from '../../components'

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalsBG} style={styles.background}>
      <Text style={styles.title}>Nearby Hospitals</Text>
      <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
      <ListHospitals type="Rumah Sakit" name="Citra Bunga Merdeka" address="Jln. Surya Merdeka No 200" image={Hospital1}/>
      <ListHospitals type="Rumah Sakit Anak" name="Happy Family and Kids" address="Jln. Surya Merdeka No 200" image={Hospital2}/>
      <ListHospitals type="Rumah Sakit Jiwa" name="Tingkat Paling Atas" address="Jln. Surya Merdeka No 200" image={Hospital3}/>
      </View>
    </View>
  )
}

export default Hospitals

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    color: color.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: color.white,
    marginTop: 6,
    textAlign: 'center'
  },
  content: {
    backgroundColor: color.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  }
})