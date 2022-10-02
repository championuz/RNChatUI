
 import React, { useEffect, useState} from 'react';
 import {
   SafeAreaView,
   StatusBar,

   StyleSheet,
   TouchableOpacity,
   Text,
   Image,
   FlatList,
   Button,
   useColorScheme,
   View,
 } from 'react-native';

 
 const MessagesScreen = ({navigation}) => {

 const messages = [
  {
    id: '1',
    name: 'John Doe',
    userImg: 'https://placeimg.com/140/140/any',
    messageTime: '4 mins ago',
    messageText:
      'Using the services Firebase provide, a chat functionality can be built into your application.',
  },
  {
    id: '2',
    name: 'Sarah Doe',
    userImg: 'https://placeimg.com/140/140/any',
    messageTime: '2 hours ago',
    messageText:
      'Using the services Firebase provide, a chat functionality can be built into your application.',
  },
  {
    id: '3',
    name: 'Josh Doe',
    userImg: 'https://placeimg.com/140/140/any',
    messageTime: '1 hours ago',
    messageText:
      'Using the services Firebase provide, a chat functionality can be built into your application.',
  },
  {
    id: '4',
    name: 'Abigail Doe',
    userImg: 'https://placeimg.com/140/140/any',
    messageTime: '1 day ago',
    messageText:
      'Using the services Firebase provide, a chat functionality can be built into your application.',
  },
  {
    id: '5',
    name: 'Christy Doe',
    userImg: 'https://placeimg.com/140/140/any',
    messageTime: '2 days ago',
    messageText:
      'Using the services Firebase provide, a chat functionality can be built into your application.',
  },
];
 
   return (
     <SafeAreaView >
       <StatusBar />
         <View>
             <FlatList
                 data={messages}
                 keyExtractor={(item)=>item.id}
                 renderItem={({item}) => (
                     <TouchableOpacity
                     onPress={() => navigation.navigate('Chats', {name: item.name})}
                     >
                     <View style={styles.card} >
                         <Image style={styles.userImageST} source={{uri: 'https://placeimg.com/140/140/any'}} />
                         <View style={styles.textArea}>
                         <Text style={styles.nameText} >{item.name}</Text>
                         <Text style={styles.msgContent} >{item.messageText}</Text>
                        </View>
                     </View>
                     </TouchableOpacity>
                 )}
                 />
         </View>

     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
     Contain: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
     },
   Container: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   card: {
     width: '100%',
     height: 'auto',
     marginHorizontal: 4,
     marginVertical: 6,
     flexDirection: 'row',
     flexWrap: 'wrap',
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   imageContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   userImage: {
     paddingTop: 15,
     paddingBottom: 15,
   },
   userImageST: {
     width: 50,
     height: 50,
     borderRadius: 25,
   }, 
   textArea: {
     flexDirection: 'column',
     justifyContent: 'center',
     padding: 5,
     paddingLeft: 10,
     width: 300,
     backgroundColor: 'transparent',
     borderBottomWidth: 1,
     borderBottomColor: '#cccccc',
   },
   userText: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   nameText: {
     fontSize: 14,
     fontWeight: '900',
     fontFamily: 'Verdana'
   },
   msgTime: {
     textAlign: 'right',
     fontSize: 11,
     marginTop: -20,
   },
   msgContent: {
     paddingTop: 5,
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default MessagesScreen;
 