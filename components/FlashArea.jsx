import { View, Text } from 'react-native'
import React from 'react'

const FlashArea = () => {
  return (
    <View className="absolute bottom-20 w-0 h-0" style={{
            borderLeftWidth: 180,
            borderRightWidth: 180,
            borderTopWidth: 400,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'rgba(255,228,172,0.4)',
          }}>
          </View>
  )
}

export default FlashArea