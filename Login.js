import { StatusBar } from 'expo-status-bar'
import axios from 'axios'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from './Card'
import { FontAwesome } from '@expo/vector-icons'

export default function Login(props) {
  const [userName, setuserName] = useState('')
  const [userPassword, setuserPassword] = useState('')
  //const [loading, setloading] = useState(false)

  const onPressEvent = async (e) => {
    //props.navigation.navigate('Dashboard')
    try {
      const apiUrl = 'https://localhost:44336/api/Login/userLogin'
      const data = { username: userName, Password: userPassword }
      await axios.post(apiUrl, data).then((result) => {
        //console.log(result.data)
        //console.log(result.data.message)
        if (result.data.status == '200') {
          props.navigation.navigate('Dashboard')
        } else {
          alert('Wrong Username or Password!!!')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    // <KeyboardAvoidingView
    //   // style={{ backgroundColor: '#4c69a5' }}
    //   // resetScrollToCoords={{ x: 0, y: 0 }}
    //   // scrollEnabled={false}
    // >
    <View style={styles.container}>
      <Card style={{}}>
        <View>
          <View style={[styles.header]}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Login</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.backgd}>
              <FontAwesome name='user' style={styles.iconStyle} />
              <TextInput
                style={styles.inputText}
                name='userName'
                onChangeText={(val) => setuserName(val)}
                placeholder='Name'
                placeholderTextColor='#193540'
              />
            </View>
            <View style={styles.backgd}>
              <FontAwesome name='lock' style={styles.iconStyle} />
              <TextInput
                secureTextEntry={true}
                style={styles.inputText}
                name='userPassword'
                onChangeText={(val) => setuserPassword(val)}
                placeholder='Password'
                placeholderTextColor='#193540'
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={onPressEvent}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
      <StatusBar style='auto' />
    </View>
    // </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  backgd: {
    flexDirection: 'row',
    backgroundColor: '#f4f4fe',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
    width: Platform.OS === 'android' ? 250 : '80%',
  },
  container: {
    flex: 1,
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#72cdae',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  inputText: {
    height: Platform.OS === 'android' ? 30 : 50,
    // padding: '5%',
    fontSize: 16,
    backgroundColor: '#f4f4fe',
    width: Platform.OS === 'android' ? 200 : '85%',
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
  footer: {
    paddingTop: '15%',
    alignItems: 'center',
  },
  btn: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#800040',
    borderWidth: 1,
    borderColor: '#800040',
    height: '20%',
    width: 150,
    justifyContent: 'center',
    margin: '10%',
  },
})
