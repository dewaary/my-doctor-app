import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILHospitalsBG } from '../../assets'
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
      <ListHospitals />
      <ListHospitals />
      <ListHospitals />
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