import React from 'react'
import { View, SafeAreaView, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { books } from '../src/bookTests';
import { style } from '../src/style';
import { bookRead } from '../src/bookRead';



const Home = () => {

  {/* BookCover *
  const BookCover = ({ color, title }: { color: string; title: string }) => (
    <View style={[style.bookCover, { backgroundColor: color }]} className="items-center justify-center p-3">
      <Text className="text-white text-xs font-bold text-center px-2" numberOfLines={3} style={{fontFamily: 'Courier New'}}>
        {title}
      </Text>
    </View>
  ); */}


  return (
    <LinearGradient colors={['#000000', '#552586']} start={{ x: 0.1, y: 0.4 }} end={{ x: 0.5, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        
        {/* Homepage*/}
        <View className="flex-row items-center mt-6 px-6 pt-4 pb-6">
          <Image source={require('../assets/profile.png')} style={style.profileImage} className="mr-4" />
          <View className="flex-1">
            <Text className="text-3xl font-bold text-white mb-1" style={{fontFamily: 'Courier New'}}> Bonjour, Tora ! </Text>
            <Text className="text-white text-sm" style={{fontFamily: 'Courier New'}}>Nous sommes ravis de vous revoir </Text>
          </View>
        </View>


      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center px-6 mt-6">
            <Text className="text-white text-xl font-bold mt-3" style={{fontFamily: 'Courier New'}}>Que lisons nous aujourd'hui ?</Text>
        </View>

        {/* Book read  */}
        <View className="mt-10">
          <Text className="text-white text-lg font-bold px-6 mb-6" style={{fontFamily: 'Courier New'}}> Vos dernières lectures </Text>
          <ScrollView  horizontal  showsHorizontalScrollIndicator={false}>
            {bookRead.map((book) => (
              <View key={book.id} className="items-center justify-center mr-2">
                <View style={[style.bookCover, { backgroundColor: book.color }]} className="items-center justify-center p-3">
                  {book.image && (
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={{ uri: book.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5, opacity: 0.85 }}/>
                    </View>
                  )}
                </View>
                <Text className="text-white text-sm font-medium mb-1 mt-2 text-center" numberOfLines={3} style={{fontFamily: 'Courier New'}}>
                  {book.title.length > 10 ? book.title.slice(0, 25) + '...' : book.title}
                </Text>
                <Text className="text-gray-400  font-bold text-xs" style = {{fontFamily: 'Courier New'}}>
                  {book.author}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>



        {/* Book of the day */}
        <View className="mt-10">
          <Text className="text-white text-lg font-bold px-6 mb-6" style={{fontFamily: 'Courier New'}}>
            Livres du jour
          </Text>
          <ScrollView  horizontal  showsHorizontalScrollIndicator={false}>
            {books.slice(40, 50).map((book) => (
              <View key={book.id} className="items-center justify-center mr-2">
                <View style={[style.bookCover, { backgroundColor: book.color }]} className="items-center justify-center p-3">
                  {book.image && (
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                      <Image source={{ uri: book.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5, opacity: 0.85 }}/>
                    </View>
                  )}
                </View>
                <Text className="text-white text-sm font-medium mb-1 mt-2 text-center" numberOfLines={3} style={{fontFamily: 'Courier New'}}>
                  {book.title.length > 10 ? book.title.slice(0, 20) + '...' : book.title}
                </Text>
                <Text className="text-gray-400  font-bold text-xs" style={{fontFamily: 'Courier New'}}>
                  {book.author}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>



        {/* Bottom padding for safe area */}
        <View className="h-20" />

        {/*footer*/}
        <View className="mt-56">
          <Text className="text-white text-center text-sm" style={{fontFamily: 'Courier New'}}>© {new Date().getFullYear()} - All rights reserved -- developped by toranogix and mia-chan</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  </LinearGradient>
  )
}

export default Home
