import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'
import Details from './src/screens/Details'
import AddNew from './src/screens/AddNew'

//STACK NAVIGATION
const screens = {
  Login: {
    screen: Login, //Component Name
    navigationOptions: {
      headerShown: false,
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerShown: false,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      headerShown: false,
    },
  },
  AddNew: {
    screen: AddNew,
    navigationOptions: {
      headerShown: false,
    },
  },
}

const navigator = createStackNavigator(screens, {
  initialRouteName: 'Login',
})

export default createAppContainer(navigator)

//DRAWER NAVIGATION
// const Drawer = createDrawerNavigator()

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName='Home'>
//         <Drawer.Screen name='Login' component={Login} />
//         <Drawer.Screen name='Dashboard' component={Dashboard} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }
