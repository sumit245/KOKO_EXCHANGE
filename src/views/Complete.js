import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import KeyTableStat from "../components/KeyTableStat";
import { s_w, s_h, f_s, scale } from "../helpers/dimens";
import TradingHeader from "../components/TradingHeader";
import CardLayout from "../components/CardLayout";
import { colors } from "../helpers/colors";
import { SearchBar } from "react-native-elements";
import ShowMatchComponent from '../components/ShowMatchComponent'
function Complete(props) {

    return (
        <>
            <TradingHeader />
            <ScrollView
                contentContainerStyle={styles.scrollArea}>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>MARKETS TODAY</Text>
                    <TouchableOpacity><Text style={styles.moreBtn}>VIEW ALL</Text></TouchableOpacity>
                </View>
                <CardLayout />
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>TRENDING STOCKS</Text>
                    <TouchableOpacity><Text style={styles.moreBtn}>VIEW ALL</Text></TouchableOpacity>
                </View>
                <View style={styles.rect6}>
                    <View style={styles.searchview}>
                        <SearchBar containerStyle={styles.searchbar} inputContainerStyle={{ height: 8, padding: 0 }} backgroundColor={colors.background_color} lightTheme />
                        <Icon name="add-task" size={26} color={colors.error_color} />
                    </View>
                    <KeyTableStat />
                </View>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionTitle}>MATCHES</Text>
                    <TouchableOpacity><Text style={styles.moreBtn}>VIEW ALL</Text></TouchableOpacity>
                </View>
                <View style={styles.rect6}>
                    <ShowMatchComponent />
                </View>
            </ScrollView>

        </>
    );
}

const styles = StyleSheet.create({
    scrollArea: {
        width: s_w,
        height: s_h
    },
    sectionRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 1,
        marginHorizontal: 4,
    },

    sectionTitle: {
        color: "#121212",
        fontSize: 16,
        textAlign: "justify"
    },
    moreBtn: {
        color: "rgba(239,57,57,1)",
        fontSize: 16,
        textAlign: "justify",
    },
    rect6: {
        width: s_w,
        height: 170,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: 5,
        marginLeft: 2
    },
    searchbar: {
        padding: 0,
        borderWidth: 0,
        height: 10,
        width: s_w / 1.2,
        marginLeft: 5,
    },
    searchview: {
        flexDirection: 'row',

    }

});

export default Complete;
