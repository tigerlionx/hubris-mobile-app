import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfessionalHailing from '../screens/ProfessionalHailing';
import DeliveryPartner from '../screens/DeliveryPartner';
import BusinessLocations from '../screens/BusinessLocations';
import AccountManagement from '../screens/AccountManagement';
import Accessibility from '../screens/Accessibility';
import CustomerSupport from '../screens/CustomerSupport';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Professional Hailing" component={ProfessionalHailing} />
        <Stack.Screen name="Delivery Partner" component={DeliveryPartner} />
        <Stack.Screen name="Business Locations" component={BusinessLocations} />
        <Stack.Screen name="Account Management" component={AccountManagement} />
        <Stack.Screen name="Accessibility" component={Accessibility} />
        <Stack.Screen name="Customer Support" component={CustomerSupport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;