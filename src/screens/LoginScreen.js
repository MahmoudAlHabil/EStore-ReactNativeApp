import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, InputField } from '../components'
import Icon from "react-native-vector-icons/Feather"

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false)
  const { navigate } = useNavigation()

  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const showPasswordHandler = () => {
    setIsPasswordShown((prevState) => !prevState);
  }

  const loginHandler = () => {
    if (email == '' || password == '') {
      setIsError(true)
    } else {
      navigate('HomeScreen')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/background.png')}
          style={styles.backgroundImage}
        >
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image} />
          <View style={styles.formContainer}>
            <InputField
              label="Email"
              placeholder="Enter your email"
              keyboardType='email-address'
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              containerStyle={styles.input}
            />
            {isError && email == '' ? <Text style={{ color: 'red' }}>Email is required</Text> : null}
            <InputField
              label="Password"
              placeholder='* * * * * * *'
              secureTextEntry={isPasswordShown}
              onChangeText={setPassword}
              value={password}
              containerStyle={styles.input}
              rightIcon={!isPasswordShown ?
                (<Icon name="eye" size={17} color="#6B7280" onPress={showPasswordHandler} />)
                : (<Icon name="eye-off" size={17} color="#6B7280" onPress={showPasswordHandler} />)}
            />
            {isError && password == '' ? <Text style={{ color: 'red' }}>Password is required</Text> : null}
            <Button
              title='Login'
              onPress={loginHandler}
              buttonStyle={styles.button}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.questionText}>New here? </Text>
            <TouchableOpacity onPress={() => navigate('SignupScreen')}>
              <Text style={styles.actionText}>Create account</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    padding: 20,
  },
  image: {
    alignSelf: "center",
    width: 120,
    height: 120,
    marginTop: 80,
    marginBottom: 50,
  },
  formContainer: {
    flex: 1,
  },
  input: {
    marginVertical: 6,
  },
  button: {
    marginVertical: 18,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 18,
  },
  actionText: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: '#00E1B4',
  },
});