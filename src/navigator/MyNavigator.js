import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../screens/SplashScreen';
import { ContextManager } from '../components/ContextManager';
import Splash from '../screens/Splash';

const Drawer = createDrawerNavigator();

const MyNavigator = () => {
    const [showSplash, setShowSplash] = React.useState(true);
    React.useEffect(() => {
        setTimeout(async () => {
            setShowSplash(false);
        }, 2000);
    }, []);
    if (showSplash) {
        return <SplashScreen />;
    }
return(
    <ContextManager.Provider value={contextManager}>
        <NavigationContainer>
            <Drawer.Screen name="Home" component={Splash} />
        </NavigationContainer>
    </ContextManager.Provider>
)
}
export default MyNavigator