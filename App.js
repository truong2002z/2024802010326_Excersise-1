import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import { Platform } from 'react-native';
const  App= ()=>
{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPress= ()=> {
    const message = `Đăng nhập với:\nTaiKhoan: ${username}\nMatkhau: ${password}`;
    if (Platform.OS === 'web') {
      window.alert(message); 
    } else {
      Alert.alert('Thông tin đăng nhập', message); 
    }
  };
  

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={styles.img}>
      <View style={ styles.container}>
        <Image source={require('./assets/hinhnen_pokemongo.jpg')} style={styles.logo} />
       <Text style={{color:"white", marginLeft:250}}>
         Register
       </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  img :{
    marginLeft:500,
  },
  container: {
    marginLeft : 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
 
  
  logo: {
    width: 300,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'green',
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  backgroundImageStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;