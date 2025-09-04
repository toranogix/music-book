import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Switch } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)
  const [locationEnabled, setLocationEnabled] = useState(true)

  const ProfileSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View className="mb-6">
      <Text className="text-gray-300 text-lg font-semibold mb-3 ml-4" style={{fontFamily: 'Courier New'}}>{title}</Text>
      <View className="bg-white/10 rounded-2xl mx-4 overflow-hidden">
        {children}
      </View>
    </View>
  )

  const ProfileItem = ({ icon, title, subtitle, onPress, showArrow = true }: {
    icon: string
    title: string
    subtitle?: string
    onPress?: () => void
    showArrow?: boolean
  }) => (
    <TouchableOpacity 
      className="flex-row items-center p-4 border-b border-white/10 last:border-b-0"
      onPress={onPress}
      disabled={!onPress}
    >
      <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-3">
        <Ionicons name={icon as any} size={20} color="white" />
      </View>
      <View className="flex-1">
        <Text className="text-white text-base font-medium" style={{fontFamily: 'Courier New'}}>{title}</Text>
        {subtitle && <Text className="text-gray-300 text-sm mt-1" style={{fontFamily: 'Courier New'}}>{subtitle}</Text>}
      </View>
      {showArrow && onPress && (
        <Ionicons name="chevron-forward" size={20} color="white" />
      )}
    </TouchableOpacity>
  )

  const StatCard = ({ value, label }: { value: string; label: string }) => (
    <View className="bg-white/10 rounded-xl p-4 items-center flex-1 mx-1">
      <Text className="text-white text-2xl font-bold" style={{fontFamily: 'Courier New'}}>{value}</Text>
      <Text className="text-gray-300 text-sm mt-1" style={{fontFamily: 'Courier New'}}>{label}</Text>
    </View>
  )

  return (
    <LinearGradient 
      colors={['#000000', '#552586']} 
      start={{ x: 0.1, y: 0.4 }} 
      end={{ x: 0.5, y: 1 }} 
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View className="items-center mt-8 mb-6">
            <View className="w-24 h-24 bg-black-500 rounded-full items-center justify-center mb-4">
              <Image 
                source={require('../assets/profile.png')} 
                className="w-20 h-20 rounded-full"
                resizeMode="cover"
              />
            </View>
            <Text className="text-white text-2xl font-bold mb-1" style={{fontFamily: 'Courier New'}}>
              Tora
            </Text>
            <Text className="text-gray-300 text-sm" style={{fontFamily: 'Courier New'}}>Fanatique de musique et de livres</Text>
            <TouchableOpacity className="mt-3 bg-white/20 px-6 py-2 rounded-full">
              <Text className="text-white text-sm font-medium" style={{fontFamily: 'Courier New'}}>Modifier le profil</Text>
              
            </TouchableOpacity>
          </View>

          {/* Stats ==> make it dynamic after*/} 
          <View className="flex-row mx-4 mb-6">
            <StatCard value="127" label="Livres lus" />
            <StatCard value="42" label="Favoris" />
          </View>





          {/* Profile Sections */}
          <ProfileSection title="Compte">
            <ProfileItem 
              icon="person-outline" 
              title="Informations personnelles" 
              subtitle="Gérer vos informations personnelles"
            />
            <ProfileItem 
              icon="lock-closed-outline" 
              title="Confidentialité & Sécurité" 
              subtitle="Contrôler vos paramètres de confidentialité"
            />
            <ProfileItem 
              icon="card-outline" 
              title="Méthodes de paiement" 
              subtitle="Gérer vos options de paiement"
            />
          </ProfileSection>

          <ProfileSection title="Préférences">
            <ProfileItem 
              icon="notifications-outline" 
              title="Notifications" 
              subtitle="Gérer vos notifications"
            />
            <View className="flex-row items-center justify-between p-4">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-3">
                  <Ionicons name="notifications" size={20} color="white" />
                </View>
                <Text className="text-white text-base font-medium" style={{fontFamily: 'Courier New'}}>Notifications</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={notificationsEnabled ? '#f5f5f5' : '#f4f3f4'}
              />
            </View>
            <View className="flex-row items-center justify-between p-4 border-t border-white/10">
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-white/20 rounded-full items-center justify-center mr-3">
                  <Ionicons name="moon" size={20} color="white" />
                </View>
                <Text className="text-white text-base font-medium" style={{fontFamily: 'Courier New'}}>Mode sombre</Text>
              </View>
              <Switch
                value={darkModeEnabled}
                onValueChange={setDarkModeEnabled}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={darkModeEnabled ? '#f5f5f5' : '#f4f3f4'}
              />
            </View>
          </ProfileSection>

          <ProfileSection title="Contenu">
            <ProfileItem 
              icon="book-outline" 
              title="Historique de lecture" 
              subtitle="Voir votre progression de lecture"
            />
            <ProfileItem 
              icon="musical-notes-outline" 
              title="Bibliothèque de musique" 
              subtitle="Votre collection de musique"
            />
            <ProfileItem 
              icon="heart-outline" 
              title="Favoris" 
              subtitle="Vos éléments sauvegardés"
            />
            <ProfileItem 
              icon="download-outline" 
              title="Téléchargements" 
              subtitle="Contenu hors ligne"
            />
          </ProfileSection>

          <ProfileSection title="Support">
            <ProfileItem 
              icon="help-circle-outline" 
              title="Centre d'aide" 
              subtitle="Obtenir de l'aide et du support"
            />
            <ProfileItem 
              icon="chatbubble-outline" 
              title="Contactez-nous" 
              subtitle="Contactez notre équipe"
            />
            <ProfileItem 
              icon="document-text-outline" 
              title="Conditions de service" 
              subtitle="Informations légales"
            />
            <ProfileItem 
              icon="shield-checkmark-outline" 
              title="Politique de confidentialité" 
              subtitle="Comment nous protégeons vos données"
            />
          </ProfileSection>


          {/* Logout Button */}
          <View className="mx-4 mb-10">
            <TouchableOpacity className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 items-center">
              <Text className="text-red-400 font-semibold text-lg" style={{fontFamily: 'Courier New'}}>Se déconnecter</Text>
            </TouchableOpacity>
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

export default Profile