import React from 'react'
import { View } from 'react-native'
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { styles } from '../theme/appTheme';

export const LoginPage = () => {
    return (
        <View style={[styles.container, { flexDirection: 'row' }]}>
            <Login />
            <Register />
        </View>
    )
}
