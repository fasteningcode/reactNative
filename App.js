import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
// import ImageDetail from './src/components/ImageDetail';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen
    // ImageD: ImageDetail
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "AccountX"
    }
  }
);

export default createAppContainer(navigator);


