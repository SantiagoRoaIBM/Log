import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from '../theme/appTheme';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

export const DocumentsPannel = () => {

    const navigator = useNavigation();

    const [checked, setChecked] = React.useState('profile');

    const onIngress = () => {
        // Ingress success
    }

    const onProfile = () => {
        setChecked('profile');
        // Profile Selected
    }

    const onDocuments = () => {
        setChecked('documents');
        // Documents Selected
    }

    return (
        <View style={styles.DocumentsPannelStyle}>
            <View style={styles.DocummentsPannelMenuStyle}>
                <View style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Perfil</Text>
                    <RadioButton
                        value="profile"
                        status={checked === 'profile' ? 'checked' : 'unchecked'}
                        onPress={onProfile}
                    />
                </View>
                <View style={{ height: '100%', width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Documentos</Text>
                    <RadioButton
                        value="documents"
                        status={checked === 'documents' ? 'checked' : 'unchecked'}
                        onPress={onDocuments}
                    />
                </View>
            </View>
            <View style={styles.DocummentsPannelStepsStyle}>
                <View style={{ height: '35%', width: '85%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textProfile}>Vinculación Fondo</Text>
                </View>
                <View style={{ flexDirection: 'row', height: '65%', width: '85%', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <Text>BarraProgreso</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                            <Text>MensajeEstado</Text>
                        </View>
                        <View style={{ height: '100%', width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={[styles.button, { marginHorizontal: '2%' }]}
                                onPress={onIngress}>
                                <Text style={styles.buttonText}>Ingresar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    )
}
