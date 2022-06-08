import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../../../utils'

const Loading = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={color.primary} />
      <Text style={styles.textLoading}>Loading....</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.loadingBackgroud,
        width: '100%',
        height: '100%'
    },
    textLoading: {
        fontSize: 18,
        color: color.primary,
        marginTop: 5
    }
})