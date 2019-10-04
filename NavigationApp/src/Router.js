import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'



import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

//import AboutModal from './screens/AboutModal'

const MainStack = createStackNavigator({
	Home: HomeScreen,
  Detail: DetailScreen
});

export default AppContainer = createAppContainer(MainStack);