import { View, SafeAreaView } from 'react-native';
import React, { useRef } from 'react';
import { images } from '../../constants';
import ToolButton from '../../components/FlashButton';
import * as Animatable from 'react-native-animatable';

const HammerTool = () => {
  const hammerRef = useRef(null);

  const handlePress = () => {
    if (hammerRef.current) {
      hammerRef.current.animate({
        0: {
          rotate: '-30deg',
        },
        0.5: {
          rotate: '-80deg',
        },
        1: {
          rotate: '-30deg',
        },
      }, 500);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full w-full space-y-10">
      <View className="py-10 items-center">
        <Animatable.Image
          ref={hammerRef}
          source={images.hammer}
          resizeMode="contain"
          className="h-[400px]"
          style={{ 
            transform: [
              { rotate: '-30deg' }
            ]
          }}
        />
      </View>
      <View className="items-center pt-20">
        <ToolButton 
          image={images.hammer}
          imageStyles={"h-20"}
          handlePress={handlePress}
        />
      </View>
    </SafeAreaView>
  );
}

export default HammerTool;
