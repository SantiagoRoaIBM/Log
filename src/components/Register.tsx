import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from '../theme/appTheme';
import { CommonActions } from '@react-navigation/native';

export const Register = () => {
    const navigator = useNavigation();

    const onRegister = () => {
        // Create account
        navigator.dispatch(CommonActions.navigate({ name: 'Registro', }));
    }

    return (
        <View style={styles.registerStyle}>
            <View style={styles.contentRegistry}>
                <Text
                    style={styles.hugeText}
                >Crea una cuenta</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.button, { marginHorizontal: '2%' }]}
                    onPress={onRegister}>
                    <Text style={styles.buttonText}>Crea tu cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
