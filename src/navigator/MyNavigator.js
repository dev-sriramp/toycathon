import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from '../screens/SplashScreen';
import {ContextManager} from '../components/ContextManager';
import LandScreen from '../screens/LandScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator>
          <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="LandScreen" component={LandScreen} />
          <Drawer.Screen name="SplashScreen" component={SplashScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ContextManager.Provider>
  );
};
export default MyNavigator;
