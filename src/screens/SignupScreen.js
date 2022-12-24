import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, InputField } from '../components'
import Icon from "@expo/vector-icons/Feather"

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false)
  const { navigate } = useNavigation()

  const [isPasswordShown, setIsPasswordShown] = useState(true);
  const showPasswordHandler = () => {
    setIsPasswordShown((prevState) => !prevState);
  }

  const signupHandler = () => {
    if (firstName == '' || lastName == '' || email == '' || password == '') {
      setIsError(true)
    } else {
      navigate('MainTab')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image} />
        <View style={styles.formContainer}>
          <InputField
            label="First name"
            placeholder="Enter your first name"
            keyboardType='email-address'
            autoCapitalize="none"
            onChangeText={setFirstName}
            value={firstName}
            containerStyle={styles.input}
          />
          {isError && firstName == '' ? <Text style={{ color: 'red' }}>First name is required</Text> : null}
          <InputField
            label="Last name"
            placeholder="Enter your last name"
            keyboardType='email-address'
            autoCapitalize="none"
            onChangeText={setLastName}
            value={lastName}
            containerStyle={styles.input}
          />
          {isError && lastName == '' ? <Text style={{ color: 'red' }}>Last name is required</Text> : null}
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
            secureTextEntry={!isPasswordShown}
            onChangeText={setPassword}
            value={password}
            containerStyle={styles.input}
            rightIcon={isPasswordShown == true ?
              (<Icon name="eye" size={17} color="#6B7280" onPress={showPasswordHandler} />)
              : (<Icon name="eye-off" size={17} color="#6B7280" onPress={showPasswordHandler} />)}
          />
          {isError && password == '' ? <Text style={{ color: 'red' }}>Password is required</Text> : null}
          <Button
            title='Sign up'
            onPress={signupHandler}
            buttonStyle={styles.button}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.questionText}>Already have account? </Text>
          <TouchableOpacity onPress={() => navigate('LoginScreen')}>
            <Text style={styles.actionText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  error: {
    color: 'red',
  }
});