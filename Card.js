import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'

export default function Card(props) {
  return <View style={styles.card}>{props.children}</View>
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    width: Platform.OS === 'android' ? 300 : '30%',
    height: Platform.OS === 'android' ? 450 : '75%',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    elevation: 10,
  },
})
