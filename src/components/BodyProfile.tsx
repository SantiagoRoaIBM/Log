import React from 'react'
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { DocumentsPannel } from './DocumentsPannel';
import { ProfilePannel } from './ProfilePannel';

export const BodyProfile = () => {
    return (
        <View style={[styles.container, { flexDirection: 'row', justifyContent: 'space-around' }]}>
            <View style={styles.container1}>
                <ProfilePannel />
            </View>
            <View style={styles.container2}>
                <DocumentsPannel />
            </View>
        </View>
    )
}
