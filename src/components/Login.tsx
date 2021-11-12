import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { styles } from '../theme/appTheme';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../../hooks/UseForm';
import { useNavigation } from '@react-navigation/core';
import Perfil from './Perfil';

export const Login = () => {

    const navigator = useNavigation();


    const { email, password, form, onChange } = useForm({
        email: '',
        password: ''
    });

    const onLogin = () => {
        // Login success
        navigator.dispatch(CommonActions.navigate({ name: 'Perfil', }));
    }

    const onForgottenPass = () => {
        // Recover password
    }

    return (
        <View style={styles.loginStyle}>
            <View style={[styles.contentLogin]} >
                <TextInput
                    placeholder="Usuario"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.inputField}
                    onChangeText={(value) => onChange(value, 'email')}
                    value={email}
                    onSubmitEditing={onLogin}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Contraseña"
                    style={styles.inputField}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(value) => onChange(value, 'password')}
                    value={password}
                    onSubmitEditing={onLogin}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ marginHorizontal: '2%' }}>
                        <Text style={[styles.regularText]}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.button, { marginHorizontal: '2%' }]}
                        onPress={onLogin}>
                        <Text style={styles.buttonText}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}