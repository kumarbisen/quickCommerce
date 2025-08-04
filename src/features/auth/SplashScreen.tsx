import { Colors } from '@utils/Constants';
import React, { FC, useEffect, } from 'react'
import {StyleSheet, Text,View,Image} from 'react-native'
import Logo from "@assets/images/logo.jpeg"
import { screenHeight, screenWidth } from '@utils/Scaling';
import { navigate } from '@utils/NavigationUtils';



const SplashScreen:FC =()=>{
    const navigateUser=async()=>{
        try {
            navigate("CustomerLogin")
        } catch (error) {
            console.log("Error nativating screen");
            
        }
    }

    useEffect(()=>{
        const timeoutId = setTimeout(navigateUser,1000)
        return ()=> clearTimeout(timeoutId)
    },[])



    return(
        <View style={styles.container}>
            <Image style={styles.LogoContainer} source={Logo}/>
        </View>
    )
}
export default SplashScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.primary,
        justifyContent:"center",
        alignItems:"center"

    },
    LogoContainer:{
        height:screenHeight*0.7,
        width:screenWidth*0.7,
        resizeMode:'contain'
    }
})