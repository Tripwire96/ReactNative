import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Platform,
} from 'react-native'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { Appbar, Modal, Portal, Provider } from 'react-native-paper'

// componentDidMount = () => {
//   const apiUrl = 'https://localhost:44336/api/Login/userLogin'
//   axios.get(apiUrl).then((result) => {
//     debugger
//     console.log(result.data)
//   })
// }

export default function Dashboard({ navigation }) {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)

  const fetchData = async () => {
    // const response = await axios.get('https://localhost:44336/api/Login/getAll')
    // const result = response.data
    // let strData = JSON.parse(result)
    // //console.log(strData)
    // setData(strData)

    axios
      .get('https://localhost:44336/api/Login/getAll')
      .then((result) => {
        //console.log(result.data)
        //let strData = JSON.parse(result.data)
        console.log(result.data)
        setData(result.data)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onShowEvent = () => {
    console.log('Clicked!')
    setVisible(true)
    //console.log(visible)
  }

  const onCloseEvent = () => {
    console.log('Clicked!')
    setVisible(false)
    //console.log(visible)
  }

  const sendTo = () => {
    console.log(navigation.navigate('Login'))
  }

  const sendToNew = () => {
    console.log(navigation.navigate('AddNew'))
  }

  const renderItem = ({ item }) => {
    console.log(item)
    return (
      <TouchableOpacity style={styles.btn} onPress={() => onShowEvent(item)}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '85%' }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
              }}
            >
              {item.Name}
            </Text>
          </View>
          <View>
            <Ionicons name='open' style={styles.iconStyle} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const detailed = (item) => {
    console.log('Clicked!')
  }
  return (
    // <View style={styles.container}>
    //   <Modal
    //     animationType={'fade'}
    //     //transparent={false}
    //     visible={visible}
    //     style={styles.modal}
    //   >
    //     <Ionicons
    //       name='close-circle'
    //       style={styles.iconStyleClose}
    //       onPress={() => onCloseEvent()}
    //     />
    //   </Modal>

    //   <Text
    //     style={{
    //       fontWeight: 'bold',
    //       margin: '2%',
    //     }}
    //   >
    //     List of Employees
    //   </Text>
    //   <FlatList
    //     data={data}
    //     keyExtractor={(item) => String(item.EmpId)}
    //     renderItem={renderItem}
    //   />
    // </View>

    <SafeAreaView>
      <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor: '#72cdae' }}>
          <Appbar.BackAction onPress={() => sendTo()} />
          <Appbar.Content title='Dashboard' />
          <TouchableOpacity style={styles.addNew} onPress={() => sendToNew()}>
            <Ionicons
              name='md-add-circle-sharp'
              style={{ fontWeight: 'bold', margin: '2%', fontSize: 15 }}
            >
              <Text style={{ fontWeight: 'bold', margin: '2%', fontSize: 15 }}>
                Add New Record
              </Text>
            </Ionicons>
          </TouchableOpacity>
        </Appbar.Header>
        <Text
          style={{
            fontWeight: 'bold',
            margin: '2%',
          }}
        >
          List of Employees
        </Text>

        <ScrollView>
          {data.map((item) => (
            <View style={styles.btn} key={item.EmpId}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  justifyContent: 'center',
                  padding: '8%',
                  backgroundColor: '#800040',
                }}
                onPress={() => onShowEvent()}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  {item.Name}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Provider
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
        >
          <Portal style={{ alignContent: 'center' }}>
            <Modal
              visible={visible}
              onDismiss={() => onCloseEvent()}
              style={styles.containerStyle}
            >
              <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>
        </Provider>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn: {
    borderColor: 'black',
    width: 150,
    borderWidth: 2,
    marginLeft: '2%',
    marginBottom: '5%',
    //flexDirection: 'row',
  },
  container: {
    flex: 2,
    backgroundColor: '#dfdfdf',
  },
  // modal: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 400,
  //   width: Platform.OS === 'android' ? '80%' : 400,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   marginTop: 80,
  //   marginLeft: 40,
  // },
  iconStyle: {
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
  },
  iconStyleClose: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  containerStyle: {
    backgroundColor: '#f4f4fe',
    padding: 20,
    height: '60%',
    width: '25%',
  },
  addNew: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 150,
  },
})
