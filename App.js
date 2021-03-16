import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from './src/helpers/colors';
import HomePage from './src/views/HomePage';
import TradingScreen from './src/views/TradingScreen';
import MatchScreen from './src/views/MatchScreen'

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
          activeTintColor: colors.primary_variant,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Matches" component={MatchScreen} />
        <Tab.Screen name="Tradings" component={TradingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
