import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

const Page = ({ backgroundColor, iconName, title, message }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
      }}
    >
      <Icon name={iconName} size={172} color="white" />
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: "center" }}>
          {title} {"\n"} {message}
        </Text>
      </View>
    </View>
  );
};

export default Page;