import React from "react";
import {StyleSheet, View, Text } from 'react-native';


export default function Footer(){
    return (
        <View style={styles.footer}>
            <Text>From Crias</Text>
        </View>
    )
}


const styles = StyleSheet.create({ 
    footer:{
        height: 50,
        paddingTop: 15,
    }
},);