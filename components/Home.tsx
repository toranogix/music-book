import React from 'react'
import { View, SafeAreaView, Text, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { books } from '../src/bookTests';
import { style } from '../src/style';
import { bookRead } from '../src/bookRead';



const Home = () => {
  const BookCover = ({ color, title }: { color: string; title: string }) => (
    <View style={[style.bookCover, { backgroundColor: color }]} className="items-center justify-center p-3">
      <Text className="text-white text-xs font-bold text-center px-2" numberOfLines={3} style={{fontFamily: 'Poppins-ExtraBold'}}>
        {title}
      </Text>
    </View>
  );




  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* Homepage*/}
        <View className="flex-row items-center px-6 pt-4 pb-6">
          <Image source={require('../assets/profile.png')} style={style.profileImage} className="mr-4" />
          <View className="flex-1">
            <Text className="text-lg font-bold text-white mb-1" style={{fontFamily: 'Poppins-ExtraBold'}}> Bonjour, Tora ! </Text>
            <Text className="text-gray-400 text-sm" style={{fontFamily: 'Poppins-Regular'}}>Nous sommes ravis de vous revoir </Text>
          </View>
        </View>
        

        <View className="flex-row items-center px-6 mt-6">
            <Text className="text-white text-xl font-bold mt-3" style={{fontFamily: 'Poppins-ExtraBold'}}>Que lisons nous aujourd'hui ?</Text>
        </View>

        {/* Book read  */}
        <View className="mt-24">
          <Text className="text-white text-xl font-bold px-6 mb-10" style={{fontFamily: 'Poppins-ExtraBold'}}>
            Vos dernières lectures
          </Text>

          <ScrollView  horizontal  showsHorizontalScrollIndicator={false} className="pl-6">
            {bookRead.map((book) => (
              <View key={book.id} className="items-center justify-center mr-2">
                <BookCover color={book.color} title={book.title} />
                <Text className="text-white text-sm font-medium mb-1 mt-2 text-center" numberOfLines={3} style={{fontFamily: 'Poppins-Bold'}}>
                  {book.title.length > 10 ? book.title.slice(0, 25) + '...' : book.title}
                </Text>
                <Text className="text-gray-400  font-bold text-xs">
                  {book.author}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>



        {/* Book  */}
        <View className="mt-24">
          <Text className="text-white text-xl font-bold px-6 mb-10">
            Livres du jour
          </Text>
          <ScrollView  horizontal  showsHorizontalScrollIndicator={false} className="pl-6">
            {books.map((book) => (
              <View key={book.id} className="items-center justify-center mr-2">
                <BookCover color={book.color} title={book.title} />
                <Text className="text-white text-sm font-medium mb-1 mt-2 text-center" numberOfLines={3} style={{fontFamily: 'Poppins-Bold'}}>
                  {book.title.length > 10 ? book.title.slice(0, 20) + '...' : book.title}
                </Text>
                <Text className="text-gray-400  font-bold text-xs">
                  {book.author}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>



        {/* Bottom padding for safe area */}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
