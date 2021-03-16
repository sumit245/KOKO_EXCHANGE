import React, { Component } from 'react'
import {SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../helpers/colors'
export default class CustomHeader extends Component {
    render() {
        return (
            <SafeAreaView style={styles.headerContainer}>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.headerTitle}>Nifty 50</Text>
                        <Icon name="arrow-upward" size={30} color={colors.primary_variant} />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.contentTitle}>14830.50</Text>
                        <Text style={styles.contentTitle}>40.25(0.27%)</Text>

                    </View>

                </View>

                <View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.headerTitle}>Nifty Bank</Text>
                        <Icon name="arrow-downward" size={30} color={colors.primary_variant} />
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.contentTitle}>14830.50</Text>
                        <Text style={styles.contentTitle}>40.25(0.27%)</Text>

                    </View>

                </View>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        maxHeight: 60,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5

    },
    headerTitle: {
        color: colors.primary_color2,
        fontSize: 20,

    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 1
    },
    contentTitle: {
        fontSize: 15,
        paddingHorizontal: 2
    }

})