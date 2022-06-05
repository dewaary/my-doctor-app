import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../../utils'
import { Buttom } from '../..'
import { DummyDoctor2, DummyDoctor3 } from '../../../assets'

const DarkProfileHeader = () => {
  return (
    <View style={styles.container}>
        <Buttom type={'icon-only'} icon={'back-light'}/>
        <View style={styles.content}>
      <Text style={styles.name}>Kadek Devi</Text>
      <Text style={styles.desc}>Dokter Anak</Text>
        </View>
      <Image source={DummyDoctor3} style={styles.avatar}/>
    </View>
  )
}

export default DarkProfileHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    name: {
        fontSize: 20,
        color: color.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        marginTop: 6,
        textAlign: 'center',
        color: color.white
    }
})