import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { Appbar, Modal, Portal, Provider } from 'react-native-paper'

export default function AddNew({ navigation }) {
  const sendTo = () => {
    console.log(navigation.navigate('Dashboard'))
  }
  return (
    <SafeAreaView>
      <Appbar style={{ backgroundColor: '#72cdae' }}>
        <Appbar.BackAction onPress={() => sendTo()} />
        <Appbar.Content title='Add New Record' />
      </Appbar>
    </SafeAreaView>
  )
}
