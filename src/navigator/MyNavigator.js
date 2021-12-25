import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import {ContextManager} from '../components/ContextManager';
import LandScreen from '../screens/LandScreen';
import HomeScreen from '../screens/HomeScreen';
import SoundScreen from '../screens/SoundScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyNavigator = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  React.useEffect(() => {
    setTimeout(async () => {
      setShowSplash(false);
    }, 1000);
  }, []);
  if (showSplash) {
    return <SplashScreen />;
  }
  return (
    <ContextManager.Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LandScreen" component={LandScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SoundScreen" component={SoundScreen} />
    </Stack.Navigator>
      </NavigationContainer>
    </ContextManager.Provider>
  );
};
export default MyNavigator;
