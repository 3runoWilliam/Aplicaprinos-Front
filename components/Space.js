import React from "react";
import {StyleSheet, View } from 'react-native';


export default function Space(){
    return (
        <View style={styles.space}></View>
    )
}


const styles = StyleSheet.create({ 
    space:{
        height: 30
    },
},);