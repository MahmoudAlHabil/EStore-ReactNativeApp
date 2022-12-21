import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppContainer from './src/navigations'

const App = () => {
  return (
    <View style={styles.contanier}>
      <AppContainer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: 'white'
  }
})