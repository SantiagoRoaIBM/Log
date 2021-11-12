import React from 'react'
import { Image, ImageBackground, Pressable, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

const image = require("../../assets/user-icon.png");

export const HeaderProfile = () => {

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
                        source={image}
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
