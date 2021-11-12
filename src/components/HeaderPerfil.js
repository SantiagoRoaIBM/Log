import React from 'react'
import { Image, ImageBackground, Pressable, Text, TouchableHighlight, TouchableOpacity, View,StyleSheet } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const image = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png';

const HeaderPerfil = () => {

    const navigator = useNavigation();

    const onNotifications = () => {
        // Open notifications
        navigator.dispatch(CommonActions.navigate({ name: 'LoginPage', }));

    }
    return (
        <View style={styles.headerProfileStyle}>
            <Text style={styles.headerTitleStyle}>Perfil</Text>
            <View style={[styles.container, { alignItems: 'center', justifyContent: 'center'}]}>
                <View style={{ height: '80%', width:'80%'}}>
                    <ImageBackground
                        source={{uri: image}}
                        style={styles.notificationImage}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.notificationButton}
                            onPress={onNotifications}>
                        </TouchableOpacity >
                    </ImageBackground >
                </View>

            </View>
        </View >
    )
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerProfileStyle: {
        height: "12%",
        width: "131.5%",
        flexDirection: 'row',
        backgroundColor: 'rgb(210,210,210)',
        justifyContent: 'center',
        marginTop: wp('-1.5%'),
        marginLeft: wp('0%'),
    },
    headerTitleStyle: {
        paddingTop: '1%',
        width: "100%",
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    notificationImage: {
        flex: 1,
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: wp('-7%'),
    },
    notificationButton: {
        flex: 1,
    },
})

export default HeaderPerfil;