import React, { Component } from 'react'
import { s_w, s_h, f_s, scale } from "../helpers/dimens";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Flag from 'react-native-flags'

export default class CardLayout extends Component {
    state = {
        stocks: []
    }
    getStock = () => {
        fetch(`https://latest-stock-price.p.rapidapi.com/any`,
            {
                "headers": {
                    "x-rapidapi-key": "c68988b5d5msh5aeb7662f070019p1d530ajsnd9b993c6dda3",
                    "x-rapidapi-host": "latest-stock-price.p.rapidapi.com"
                }
            }).then((response) => response.json()).then((json) => {
                this.setState({ stocks: json })
            }).catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        // Call this function so that it fetch first time right after mounting the component
        this.getStock();

        // set Interval
        this.interval = setInterval(this.getStock, 10000);
    }

    componentWillUnmount() {
        // Clear the interval right before component unmount
        clearInterval(this.interval);
    }
    render() {
        const stocks  = this.state.stocks
        return (
            <View style={styles.quadCard}>
                <View style={styles.rect9Stack}>
                    <View style={styles.innercard}>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
                            <Flag code="IN" size={32} />
                            <Text style={{ fontSize: 14, paddingHorizontal: 5, color: 'tomato' }} >
                                {stocks.symbol}
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0 }} >
                            <Text style={{ paddingHorizontal: 10, fontSize: 16 }} >50,719.32</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0, }} >
                            <Icon name="keyboard-arrow-down" style={{ paddingLeft: 10, fontSize: 12, color: 'red' }} />
                            <Text style={{ paddingHorizontal: 2, fontSize: 12, color: 'red' }}>-410 (0.77%) </Text>
                        </View>
                    </View>
                    <View style={styles.innercard}>
                        <Text style={{ fontSize: 14, paddingHorizontal: 5, color: 'tomato' }} >USDINR</Text>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0 }} >
                            <Text style={{ paddingHorizontal: 10, fontSize: 16 }} >53.3175</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0, }} >
                            <Icon name="keyboard-arrow-up" style={{ paddingLeft: 10, fontSize: 12, color: 'green' }} />
                            <Text style={{ paddingHorizontal: 2, fontSize: 12, color: 'green' }}>0.3260 (0.49%)</Text>
                        </View>

                    </View>
                </View>
                <View style={styles.rect11Column}>
                    <View style={styles.innercard}>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
                            <Flag code="IN" size={32} />
                            <Text style={{ fontSize: 14, paddingHorizontal: 5, color: 'tomato' }}>NIFTY 50</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0 }} >
                            <Text style={{ paddingHorizontal: 10, fontSize: 16 }} >50,405.32</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0, }} >
                            <Icon name="keyboard-arrow-down" style={{ paddingLeft: 10, fontSize: 12, color: 'red' }} />
                            <Text style={{ paddingHorizontal: 2, fontSize: 12, color: 'red' }}>-400 (0.87%) </Text>
                        </View>

                    </View>
                    <View style={styles.innercard}>
                        <Text style={{ fontSize: 14, paddingHorizontal: 5, color: 'tomato' }}>GOLD</Text>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0 }} >
                            <Text style={{ paddingHorizontal: 10, fontSize: 16 }} >50,405.32</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', padding: 0, }} >
                            <Icon name="keyboard-arrow-down" style={{ paddingLeft: 10, fontSize: 12, color: 'red' }} />
                            <Text style={{ paddingHorizontal: 2, fontSize: 12, color: 'red' }}>-400 (0.87%) </Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    quadCard: {
        width: s_w,
        height: 165,
        flexDirection: "row",
        backgroundColor: "#E6E6E6",
        marginTop: 5,
        marginLeft: 2,
    },
    innercard: {
        width: s_w/2.2,
        height: 79,
        backgroundColor: "rgba(249,247,247,1)",
        marginTop: 2,
        marginLeft: 2
    },
    rect11Column: {
        width: 172,
        marginLeft: 1
    },
})
