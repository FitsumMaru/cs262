import  React, { useState} from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';

export default function DetailsScreen({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
        {/* Display the fields of the received movie object. */}
        <Text>{ route.params.email }</Text>
        <Text>ID: { route.params.id }</Text>
        <Text>Aka: { route.params.name }</Text>
    </View>
);
}
