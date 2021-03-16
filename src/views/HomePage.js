/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import OtherBanner from '../components/OtherBanner';
import Complete from './Complete';

export default class HomePage extends Component {
  render() {
    return (
      <>
      <Complete/>
      <OtherBanner/>
      </>
    );
  }
}
