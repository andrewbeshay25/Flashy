import { View, SafeAreaView } from 'react-native';
import React, { useRef } from 'react';
import { images } from '../../constants';
import ToolButton from '../../components/FlashButton';
import * as Animatable from 'react-native-animatable';

const WrenchTool = () => {
  const wrenchRef = useRef(null);

  const handlePress = () => {
    if (wrenchRef.current) {
      wrenchRef.current.animate({
        0: {
          rotate: '-30deg',
        },
        0.5: {
          rotate: '80deg',
        },
        1: {
          rotate: '-30deg',
        },
      }, 1000); 
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full w-full space-y-10">
      <View className="py-20 items-center mr-40">
        <Animatable.Image
          ref={wrenchRef}
          source={images.wrench}
          resizeMode="contain"
          className="h-[400px]"
          style={{
            transform: [
              { rotate: '-30deg' } 
            ],
            transformOrigin: 'top center'
          }}
        />
      </View>
      <View className="items-center pt-10 ">
        <ToolButton 
          image={images.wrench}
          imageStyles={"h-20"}
          handlePress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
}

export default WrenchTool;
