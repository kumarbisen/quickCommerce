import React from 'react'
import {Text,View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { navigationRef } from '@utils/NavigationUtils';
import SplashScreen from '@features/auth/SplashScreen';
import CustomerLogin from '@features/auth/CustomerLogin';
import DeliveryLogin from '@features/auth/DeliveryLogin';

const Stack = createNativeStackNavigator();


const Navigation =()=>{
    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{
                headerShown:false}}>       
                    <Stack.Screen  name='SplashScreen' component={SplashScreen} ></Stack.Screen>
                    <Stack.Screen options={{
                        animation:"fade"
                    }} name='CustomerLogin' component={CustomerLogin}></Stack.Screen>
                    <Stack.Screen options={{
                        animation:"fade"
                    }} name='DeliveryLogin' component={DeliveryLogin}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;