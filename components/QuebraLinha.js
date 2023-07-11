import React from "react";
import {StyleSheet, View } from 'react-native';


export default function QuebraLinha(){
    return (
        <View style={styles.br}></View>
    )
}


const styles = StyleSheet.create({ 
    br:{
        width: 500,
        borderColor: '#000',
        borderWidth: 1,
    },
},);