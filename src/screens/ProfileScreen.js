import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, InputField } from '../components';

const ProfileScreen = () => {
  const [name, setName] = useState('Doe');
  const [phoneNumber, setPhoneNumber] = useState('+972222222');
  const [email, setEmail] = useState('John@gmail.com');
  const [address, setAddress] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.headerScreen}>
          <Text style={styles.profileText}>Profile</Text>
        </View>
        <View style={styles.content}>
          <Image style={styles.imageProfile}
            source={require('../../assets/images/person.png')} />
          <InputField
            placeholder='Write your name'
            value={name}
            onChangeText={val => setName(val)}
            containerStyle={styles.input} />
          <InputField
            placeholder='Write your phone'
            value={phoneNumber}
            onChangeText={val => setPhoneNumber(val)}
            containerStyle={styles.input} />
          <InputField
            placeholder='Write your email'
            value={email}
            onChangeText={val => setEmail(val)}
            containerStyle={styles.input} />
          <InputField
            placeholder='Write your address'
            value={address}
            onChangeText={val => setAddress(val)}
            containerStyle={styles.input} />
          <TouchableOpacity>
            <Text style={styles.changePassword}>Change your password</Text>
          </TouchableOpacity>
          <Button
            buttonStyle={styles.button}
            title='Save' />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerScreen: {
    backgroundColor: '#eee',
    height: '17%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 32,
    paddingBottom: 24,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  profileText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    alignSelf: 'center',
  },
  input: {
    marginVertical: 8
  },
  changePassword: {
    color: '#00E1B4',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button: {
    marginVertical: 32,
  },
})