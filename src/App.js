import * as React from 'react';
import Complete from './views/Complete';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from './helpers/colors';
import HomePage from './views/HomePage';
import TradingScreen from './views/TradingScreen';
import MatchScreen from './views/MatchScreen'
import LoginPage from './views/LoginPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Matches') {
            iconName = 'sports-cricket';
          } else {
            iconName = 'stacked-line-chart';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary_color,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Matches" component={MatchScreen} />
      <Tab.Screen name="Tradings" component={TradingScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  

      );
}
