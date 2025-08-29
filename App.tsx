import Home from 'components/Home';
import Profile from 'components/Profile';
import Search from 'components/Search';
import { View, Text, TouchableOpacity } from 'react-native';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';



const Tab = createBottomTabNavigator();

// Tabbar blur effect
const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <BlurView
      intensity={80}
      tint="light"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 20,
        paddingTop: 10,
      }}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            {options.tabBarIcon({ 
              size: 24, 
              color: isFocused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)' 
            })}
            <View style={{ marginTop: 4 }}>
              <Text style={{
                color: isFocused ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
                fontSize: 12,
                fontWeight: '600',
                textAlign: 'center',
              }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      
      {/* Tab Navigator */}
      <Tab.Navigator 
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        
        <Tab.Screen name="Acceuil" component={Home} options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="home" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Recherche" component={Search} options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="search" color={color} size={size} />
          )
        }}/>
        <Tab.Screen name="Profil" component={Profile} options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}/>
      </Tab.Navigator>



    </NavigationContainer>
  );
}
