import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Platform, Text, Modal, Button } from 'react-native'

export default function Details({ navigation }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    console.log(navigation.getParam('Name'))
  }, [])

  return (
    <Modal
      animationType={'fade'}
      transparent={false}
      visible={visible}
      onRequestClose={() => {
        alert('Modal has been closed.')
      }}
      style={styles.modal}
    >
      {/* <View style={styles.modal}> */}
      <Text style={styles.text}>Modal is open!</Text>
      <Button
        title='Click To Close Modal'
        onPress={() => {
          setVisible(false)
          console.log('model closed!')
        }}
      />
      {/* </View> */}
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 500,
    width: Platform.OS === 'android' ? '80%' : 500,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 80,
    marginLeft: 40,
  },
})
