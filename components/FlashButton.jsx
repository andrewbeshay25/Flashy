import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'

import { images } from '../constants'

const ToolButton = ({image, handlePress, containerStyle, imageStyles, isLoading}) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        className={`bg-green-100 rounded-full h-[100px]  w-[100px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
        disabled={isLoading}
    >
        <Image
            source={image}
            className={` ${imageStyles}`}
            resizeMode='contain'
            />
    </TouchableOpacity>
  )
}

export default ToolButton