/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';


const AuthScreen = ({navigation}) => {
const [signin, setSignin] = useState(false);
 const [data, setData] = React.useState({
        secureTextEntry: true,

    });

    const signInSwitch = () => {
        setSignin(!signin)
    }

     const updateSecureText = () => {
        setData({
           secureTextEntry: !data.secureTextEntry 
        });
    }

  return (
   <View style={[styles.container, {
            paddingTop: 35
        }]}>
        {signin ?
        <>
            <View style={styles.header}>
                <Text style={styles.text_header}>Sign up</Text>
                <Text style={styles.headerTitle}>Input your Email address and Password in the form below to Register.</Text>
            </View>
            <View style={styles.footer}>
                
                <Text style={[styles.text_footer, {
                    marginTop: 25
                }]}>Full Name</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Full Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 25
                }]}>Email</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                </View>
                <Text style={[styles.text_footer, {
                  marginTop: 25
                }]}>Password</Text>
                <View style={styles.action}>
                  <TextInput
                      placeholder="Your Password"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={styles.textInput}
                      autoCapitalize="none"
                  />
                  <TouchableOpacity
                      onPress={updateSecureText}
                  >
                      {data.secureTextEntry ? 
                      <Text>Show</Text>
                      :
                      <Text>Hide</Text>
                      } 
                  </TouchableOpacity>
                </View>

               
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Messages')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                    >

                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}> Sign up </Text>

                    </TouchableOpacity>
                    <View style={{marginTop: 10, alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>signInSwitch()}><Text style={styles.text_footer}>Already have an account? Sign in</Text></TouchableOpacity>
                    </View> 
                </View>
                </>
                :
                <>
                <View style={styles.header}>
                <Text style={styles.text_header}>Login </Text>
                <Text style={styles.headerTitle}>Input your Email address and Password in the form below to login.</Text>
            </View>
            <View style={styles.footer}>
                
                <Text style={[styles.text_footer, {
                    marginTop: 25
                }]}>Email</Text>
                <View style={styles.action}>
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                </View>
                <Text style={[styles.text_footer, {
                  marginTop: 25
                }]}>Password</Text>
                <View style={styles.action}>
                  <TextInput
                      placeholder="Your Password"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={styles.textInput}
                      autoCapitalize="none"
                  />
                  <TouchableOpacity
                      onPress={updateSecureText}
                  >
                      {data.secureTextEntry ? 
                      <Text>Show</Text>
                      :
                      <Text>Hide</Text>
                      } 
                  </TouchableOpacity>
                </View>

               
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Messages')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                    >

                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}> Sign in </Text>

                    </TouchableOpacity>
                    <View style={{marginTop: 10, alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>signInSwitch()}><Text style={styles.text_footer}>Are you new here? Sign up</Text></TouchableOpacity>
                    </View> 
                </View>

                </>
                }

            </View>
    );
};

export default AuthScreen;


 const {height} = Dimensions.get("screen");
 const height_logo = height * 0.28;

 const styles = StyleSheet.create({ 
container: {
     flex: 1,
     backgroundColor: '#009387'
   },
   header: {
     flex: 1,
     justifyContent: 'flex-end',
     paddingHorizontal: 20,
     paddingBottom: 50
     },
   footer: {
     flex: 3,
     backgroundColor: '#fff',
     borderTopLeftRadius: 30,
     borderTopRightRadius: 30,
     paddingVertical: 20,
     paddingHorizontal: 30
   },
   text_header: {
     color: '#fff',
     fontWeight: 'bold',
     fontSize: 30
   },
   text_footer: {
     color: '#05375a',
     fontSize: 18
   },
   title: {
     color: '#05375a',
     fontSize: 14,
     fontWeight: 'bold'
   },
   headerTitle: {
     paddingTop: 5,
     color: '#fff',
     fontSize: 14,
     fontWeight: 'bold'
   },
   action: {
     flexDirection: 'row',
     marginTop: 10,
     borderBottomWidth: 1,
     borderBottomColor: '#f2f2f2',
     paddingBottom: 5
   },
   textInput: { 
     flex: 1,
     marginTop: Platform.OS === 'ios' ? 0 : -12,
     paddingLeft: 10,
     color: '#05375a',
   },
   button: {
     alignItems: 'center',
     marginTop: 50
   },
   signIn: {
     width: '100%',
     height: 50,
     justifyContent: 'center',
     alignItems: 'center',
     borderRadius: 10,
   },
   textSign: {
     fontSize: 18,
     fontWeight: 'bold'
   }

 })