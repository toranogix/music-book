import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'

const Playmusic = () => {
  return (
    <LinearGradient colors={['#000000', '#552586']} start={{ x: 0.1, y: 0.4 }} end={{ x: 0.5, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <View className="mt-10 items-left justify-left">
          <Text className="text-white text-2xl font-bold" style={{fontFamily: 'Courier New'}}> Musique </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Playmusic