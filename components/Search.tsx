import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { style } from '../src/style'; 

const Search = () => {
  return (
    <View className="flex-1 bg-black">

        <View className="px-6 mb-4 mt-10">
          <Text className="text-white text-lg mb-3 font-medium">
            Cherchez une musique pour vous accompagner dans votre lecture
          </Text>
          <View className="flex-row items-center">
            <View className="flex-1 flex-row items-center bg-white rounded-full px-4 py-3 mr-3">
              <Ionicons name="search" size={20} color="#666" />
              <TextInput
                className="flex-1 ml-3 text-black"
                placeholder="Titre, genre, catégories..."
                placeholderTextColor="#666"
                style={style.inputText}
              />
            </View>
            
            <TouchableOpacity className="bg-purple-600 w-12 h-12 rounded-full items-center justify-center">
              <Ionicons name="options" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default Search