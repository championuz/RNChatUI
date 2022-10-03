 import React, { useState, useEffect} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 import ChatScreen from './screens/ChatScreen';
 import AuthScreen from './screens/AuthScreen';
 import MessagesScreen from './screens/MessagesScreen';
 import { StyleSheet } from 'react-native';
 const Stack = createNativeStackNavigator();




 const App = () => {
   const [user, setUser] = useState('');


  return(
  
  <NavigationContainer >
        <Stack.Navigator screenOptions = {{ 
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {user ?
        <>
       <Stack.Screen name="Messages" options={() => ({
          headerBackVisible: false,
        })}>
         {props => <MessagesScreen {...props} user={user}/>}
        </Stack.Screen>
        <Stack.Screen name="Chats" options={({route}) => ({
          title: route.params.name,
          headerBackTitleVisible: false})}>
           {props => <ChatScreen {...props} user={user}/>}
        </Stack.Screen> 
          </>
          :
          
          <Stack.Screen name="Auth" component={AuthScreen} options={() => ({
          headerBackVisible: false,
          headerShown: false,
        })}/>
        }
        
      </Stack.Navigator>
</NavigationContainer>
 )};


 export default App;

 const styles = StyleSheet.create({
   image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconColor: {
    color: '009387',
  }
 });
 
 
 