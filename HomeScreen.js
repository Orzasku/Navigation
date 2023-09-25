import React, { useLayoutEffect } from "react";
import {StyleSheet, View, Text, TextInput} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from 'react'; 

export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState("Testing");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#f0f0f0"
            },
        headerRight: () => (
            <AntDesign
                style={styles.navButton}
                    name="arrowright"
                    size={24}
                    onPress={() => navigation.navigate("Second", {message: message})}
                />
            )
        })
    }, [message])
    return (
        <View style={StyleSheet.container}>
            <Text>Home nakki</Text>
            <TextInput onChangeText={text => setMessage(text)} value={message} placeholder="Type message here"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 25,
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    }
});