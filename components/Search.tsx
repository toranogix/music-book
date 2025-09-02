import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { style } from '../src/style'; 
import { books } from '~/bookTests';
import { LinearGradient } from 'expo-linear-gradient';

const Search = () => {
  return (
    <LinearGradient colors={['#000000', '#552586']} start={{ x: 0.1, y: 0.4 }} end={{ x: 0.5, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        {/* Search */}
          <View className="mt-10 items-left justify-left">
              <Text className="text-white text-2xl font-bold mb-3" style={{fontFamily: 'Courier New'}}> Rechercher </Text>
          </View>
          
          {/* Search bar */}
          <View className="flex-row items-center mt-3">
            <View className="flex-1 flex-row items-center bg-white rounded-full border border-gray-300 px-4 py-3 mr-3">
              <Ionicons name="search" size={25} color="black" />
              <Ionicons position="absolute" right={10} name="filter-outline" size={25} color="black" />
              <TextInput
                className="flex-1 ml-3 text-black font-light"
                placeholder="Titre, genre, catégories..."
                placeholderTextColor="#666"
                style={style.inputText}
              />
            </View>      
          </View>
        
        <ScrollView>

          {/*List of popular genres*/}
          <View className="mt-5">
            <Text className="text-white text-xl font-bold px-6 mb-6" style={{fontFamily: 'Courier New'}}> Genres populaires </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {books.slice(0, 10).map((book) => (
                <View key={book.id} className="items-center justify-center mr-2">
                  <Text className="text-white text-sm font-medium mt-2 mb-1" style={{fontFamily: 'Courier New'}} numberOfLines={3} > {book.title.length > 10 ? book.title.slice(0, 15) + '...' : book.title} </Text>
                  <Text className="text-gray-400  font-bold text-xs" style = {{fontFamily: 'Courier New'}}>{book.author}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Discover more books */}
          <View className="mt-56">
            <Text className="text-white text-xl font-bold px-6 mb-6" style={{fontFamily: 'Courier New'}}> Découvrer plus de livres </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {books.slice(50, 60).map((book) => (
                <View key={book.id} className="items-center justify-center mr-2">
                  <View style={[style.bookCover, { backgroundColor: book.color, position: 'relative', overflow: 'hidden' }]} className="items-center justify-center p-3">
                    {book.image && (
                      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: book.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5, opacity: 0.85 }}/>
                      </View>
                    )}

                  </View>
                  <Text className="text-white text-sm font-medium mt-2 mb-1" style={{fontFamily: 'Courier New'}} numberOfLines={3} > {book.title.length > 10 ? book.title.slice(0, 15) + '...' : book.title} </Text>
                  <Text className="text-gray-400  font-bold text-xs" style = {{fontFamily: 'Courier New'}}>{book.author}</Text>
                </View>
              ))}     
            </ScrollView>
          </View>

          {/* Ten latest books */}
          <View className="mt-10">
            <Text className="text-white text-xl font-bold px-6 mb-6" style={{fontFamily: 'Courier New'}}> Les derniers livres ajoutés </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {books.slice(90, 100).map((book) => (
                <View key={book.id} className="items-center justify-center mr-2">
                  <View style={[style.bookCover, { backgroundColor: book.color }]} className="items-center justify-center p-3" >
                    {book.image && (
                      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: book.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5, opacity: 0.85 }}/>
                      </View>
                    )}
                  </View>

                  <Text className="text-white text-sm font-medium mt-2 mb-1" style={{fontFamily: 'Courier New'}}> {book.title.length > 10 ? book.title.slice(0, 15) + '...' : book.title} </Text>
                  <Text className="text-gray-400  font-bold text-xs" style = {{fontFamily: 'Courier New'}}>{book.author}</Text>
                </View>
              ))}
            </ScrollView>
          </View>


          {/* Ten popular books */}
          <View className="mt-10">
            <Text className="text-white text-xl font-bold px-6 mb-6" style={{fontFamily: 'Courier New'}}> Les livres les plus populaires </Text>
            <View
              style={{ borderWidth: 1, borderColor: '#444', borderRadius: 12, padding: 16, marginHorizontal: 12, backgroundColor: 'rgba(0,0,0,0.2)'}}>
              {books.slice(0, 10).map((book) => (
                <View key={book.id} className="mr-2 mb-4 flex-row items-center" style={{ borderWidth: 1, borderColor: '#666', borderRadius: 8, padding: 12, marginBottom: 12, backgroundColor: 'rgba(255,255,255,0.03)'}}>
                  <View
                    style={[
                      {width: 80,height: 120,borderRadius: 5,padding: 10,alignItems: 'center',justifyContent: 'center',backgroundColor: book.color},]}
                    className="items-center justify-center p-3 mr-4">
                    {book.image && (
                      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: book.image }} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5, opacity: 0.85 }}/>
                      </View>
                    )}
                  </View>
                  <View className="flex-1">
                    <Text className="text-white text-sm font-bold mb-1" numberOfLines={2} style={{ fontFamily: 'Courier New' }}> 
                      {book.title}
                    </Text>
                    <Text className="text-gray-400 font-bold text-xs" style={{ fontFamily: 'Courier New' }}>
                      {book.author}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>




        {/*footer*/}
        <View className="mt-56">
          <Text className="text-white text-center text-sm" style={{fontFamily: 'Courier New'}}>© {new Date().getFullYear()} - All rights reserved -- developped by toranogix and mia-chan</Text>
        </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient> 
  )
}

export default Search