import { View, Text } from 'react-native'
import React from 'react'
import FlashArea from '../../components/FlashArea'
import ToolButton from '../../components/FlashButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';


import * as Animatable from "react-native-animatable";


const FlashlightTool = () => {
  const [flashOn, setFlashOn] = useState(false)

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
  const fadOut = {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <Animatable.View className="h-[550px]" animation={flashOn ? fadeIn : fadOut} duration={300}>
      <View className="flex-1 items-center justify-center relative">
        {flashOn && (
          FlashArea()
        )}
      </View>

      </Animatable.View>

      <View className="w-full items-center pt-10">
        <ToolButton
          image={flashOn ? images.flashOn : images.flashOff}
          imageStyles={"text-xl text-primary"}
          handlePress={() => setFlashOn(prevState => !prevState)}
        />
      </View>

    </SafeAreaView>
  )
}

export default FlashlightTool