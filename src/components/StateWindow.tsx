import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const StateWindow = () => {
    return (
        <View style={styles.windowDocuments}>
            <View style={{ marginLeft: '5%' }} >
                <Text style={{ fontWeight: 'bold', color: 'rgb(180,180,180)' }}>
                    Información General
                </Text>
            </View>
            <View style={{ marginRight: '5%' }}>
                <Text style={{ fontWeight: 'bold', color: 'rgb(180,180,180)' }}>
                    En progreso
                </Text>
            </View>
        </View >
    )
}
