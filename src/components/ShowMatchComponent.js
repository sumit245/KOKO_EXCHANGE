import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { colors } from '../helpers/colors';
import { s_w } from '../helpers/dimens';

const Item = ({ logo_A, logo_B, title, status, score_A, score_B }) => (
  <View style={styles.item}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={{ uri: logo_A }} style={{ height : 20, width: 20 }} />
        <Text style={styles.volume}>{title}</Text>
        <Image source={{uri:logo_B}} style={{ heigh: 50, width: 50 }} />
    </View>
  </View>
);

export default class ShowMatchComponent extends Component {
  state = {
    tableData: []
  }
  getMatches = () => {
    fetch(`https://rest.entitysport.com/v2/matches/?status=2&token=f572f4d3cde3b0af35f4f2bdba081043`)
      .then((response) => response.json()).then((json) => {
        this.setState({ tableData: json.response.items })
      }).catch((error) => {
        console.error(error);
      });
  }
  componentDidMount() {
    // Call this function so that it fetch first time right after mounting the component
    this.getMatches();
    // set Interval
    this.interval = setInterval(this.getMatches, 1000);
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }
  renderItem = ({ item }) => (
    <Item logo_A={item.teama.logo_url} logo_B={item.teamb.logo_url} title={item.title} status={item.competition.status} score_A={item.teama.scores_full} score_B={item.teamb.scores_full} />
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
        }} />
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
