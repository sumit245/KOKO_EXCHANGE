import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ImageEditor } from 'react-native';
import { colors } from '../helpers/colors';
import { s_w } from '../helpers/dimens';

const Item = ({ symbol, opening, volume, ltp, change, perchange }) => (
  <View style={styles.item}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={styles.column}>
        <Text style={[styles.title, { color: colors.primary_color }]}>{symbol}</Text>
        <Text style={[styles.title, { fontSize: 10, color: '#777' }]}>{volume}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.volume}>{ltp.toFixed(2)}</Text>
        <Text style={[styles.title, { color: perchange >= 0 ? 'green' : 'red', fontSize: 10 }]}>{change.toFixed(2)}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.volume}>{opening}</Text>
        <Text style={[styles.title, { color: perchange >= 0 ? 'green' : 'red', fontSize: 10 }]}>{perchange}</Text>
      </View>
    </View>
  </View>
);
export default class KeyTableStat extends Component {
  state = {
    tableData: []
  }
  getStock = () => {
    fetch(`https://latest-stock-price.p.rapidapi.com/any`,
      {
        "headers": {
          "x-rapidapi-key": "c68988b5d5msh5aeb7662f070019p1d530ajsnd9b993c6dda3",
          "x-rapidapi-host": "latest-stock-price.p.rapidapi.com"
        }
      }).then((response) => response.json()).then((json) => {
        this.setState({ tableData: json })
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


  renderItem = ({ item }) => (
    <Item symbol={item.symbol} opening={item.open} change={item.change} ltp={item.lastPrice} volume={item.totalTradedVolume} perchange={item.pChange} />
  );

  render() {
    const state = this.state;
    return (
      <FlatList
        data={state.tableData}
        renderItem={this.renderItem}
        keyExtractor={item => item.symbol}
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 1,
    borderBottomColor: '#777',
    borderBottomWidth: 0.5

  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',

  },
  volume: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  column: {
    width: s_w / 2.5
  }

});
