import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ToolCard = ({ handlePress, name, caption, icon, active, zoomIn, zoomOut }) => {
  const cardHeight = active ? 250 : 200; // Adjust the height as needed

  return (
    <Animatable.View
      className="mr-5"
      animation={active ? zoomIn : zoomOut}
      duration={500}
      style={{ height: cardHeight }}
    >
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`mt-5 rounded-3xl h-[200px] w-[150px] bg-green-100 `}
      >
        <View className="py-2 space-y-5 items-center">
          <Text className="px-5 font-psemibold text-xl">{name}</Text>
          <Image source={icon} resizeMode='contain' className="h-20 w-20" />
          <Text className="px-5 font-pregular text-sm text-center">{caption}</Text>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default ToolCard;
