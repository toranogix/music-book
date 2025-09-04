import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { View, SafeAreaView, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'




const { width } = Dimensions.get('window')




const Playmusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(180) // 3 minutes in seconds
  const [isLiked, setIsLiked] = useState(false)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <LinearGradient colors={['#000000', '#552586']} start={{ x: 0.1, y: 0.4 }} end={{ x: 0.5, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">

        {/* Header */}
        <View className="flex-row items-center justify-between px-6 mt-10 mb-8">
          <TouchableOpacity>
            <Ionicons name="chevron-down" size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold" style={{fontFamily: 'Courier New'}}>
            Vous écoutez    {/* TODO: make it dynamic ==> add songs froms spotify or openmusic */}
          </Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Album Art */}
        <View className="items-center mb-12">
          <View className="w-80 h-80 rounded-3xl shadow-2xl shadow-black/50">
            <Image
              source={require("../assets/bookCovers/playsong_background.jpg")}
              className="w-full h-full rounded-3xl"
              resizeMode="cover"
            />
          </View>
        </View>



        {/* TODO: make it dynamic ==> add songs froms spotify or openmusic */}
        {/* Song Info */}
        <View className="px-8 mb-8">
          <View className="flex-row items-center justify-between mb-2">
            <TouchableOpacity onPress={toggleLike}>
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={24} 
                color={isLiked ? "#ff4757" : "white"} 
              />
            </TouchableOpacity>
            <Text className="text-white text-sm opacity-70">4:00</Text>
          </View>
          
          <Text className="text-white text-2xl font-bold mb-2" style={{fontFamily: 'Courier New'}}>
            Thriller
          </Text>
          <Text className="text-white text-lg opacity-70 mb-4" style={{fontFamily: 'Courier New'}}>
            Michael Jackson hee-hee-hee
          </Text>
          
          {/* Progress Bar */}
          <View className="mb-1">
            <View className="w-full h-1 bg-white/20 rounded-full mb-2">
              <View 
                className="h-1 bg-white rounded-full" 
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </View>
            <View className="flex-row justify-between">
              <Text className="text-white text-sm opacity-70">{formatTime(currentTime)}</Text>
              <Text className="text-white text-sm opacity-70">{formatTime(duration)}</Text>
            </View>
          </View>
        </View>

        {/* Player Controls */}
        <View className="px-8 mb-10">
          <View className="flex-row items-center justify-center space-x-8 mb-6">
            <TouchableOpacity className="w-16 h-16 items-center justify-center">
              <Ionicons name="play-skip-back" size={28} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={togglePlay}
              className="w-20 h-20 bg-white rounded-full items-center justify-center shadow-lg shadow-black/30"
            >
              <Ionicons 
                name={isPlaying ? "pause" : "play"} 
                size={32} 
                color="#000000" 
              />
            </TouchableOpacity>
            
            <TouchableOpacity className="w-16 h-16 items-center justify-center">
              <Ionicons name="play-skip-forward" size={28} color="white" />
            </TouchableOpacity>
          </View>

          {/* Additional Controls */}
          <View className="flex-row items-center justify-between space-x-16 ml-3 mr-3">
            <TouchableOpacity className="w-12 h-12 items-center justify-between">
              <Ionicons name="shuffle" size={28} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity className="w-12 h-12 items-center justify-between">
              <Ionicons name="repeat" size={28} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity className="w-12 h-12 items-center justify-between">
              <Ionicons name="list" size={28} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Playmusic