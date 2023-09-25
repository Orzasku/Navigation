import React, { useEffect, useLayoutEffect } from "react";
import {StyleSheet, View, Text, BackHandler} from "react-native";

export default function SecondScreen({route,navigation}) {
    useEffect(() => {
        if (route.params?.message) {
            alert(route.params.message);
        }
        BackHandler.addEventListener("hardwareBackPress", close);
        return() => {
            BackHandler.removeEventListener("hardwareBackPress", close);
        }
    }, [])

    function close() {
        navigation.goBack(null);
        return true;
    }
    return (
        <View style={StyleSheet.container}>
            <Text>Second Nakki</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});