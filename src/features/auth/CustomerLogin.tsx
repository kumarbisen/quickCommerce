import CustomSafeAreaView from '@features/components/global/CustomSafeAreaView'
import React, { FC } from 'react'
import {StyleSheet, Text,View} from 'react-native'
import {GestureHandlerRootView, PanGestureHandler, State} from "react-native-gesture-handler"

const CustomerLogin:FC =()=>{
    return(
        <GestureHandlerRootView>
            <View style={styles.container}>
                <CustomSafeAreaView>
                    
                </CustomSafeAreaView>
            </View>
        </GestureHandlerRootView>
    )
}
export default CustomerLogin;

const styles = StyleSheet.create({
    container:{
        flex:1,

    }
})