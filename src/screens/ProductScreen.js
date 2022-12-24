import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { InputField, Button } from '../components'

const ProductScreen = () => {
  const { goBack } = useNavigation()
  const { product } = useRoute().params
  const [isInterest, setIsInterest] = useState(false)
  const [cart, setCart] = useState(0)
  const [notes, setNotes] = useState()
  const [counter, setCounter] = useState(1)
  const [toggleButton, setToggleButton] = useState(true)

  const handleCounter = (type) => {
    if (type === 'decrement') {
      if (counter > 1) {
        setCounter(counter - 1)
      }
    } else {
      setCounter(counter + 1)
    }
  }

  const handleAddRemoveCart = () => {
    if (toggleButton) {
      setCart(cart + 1)
    } else {
      setCart(cart - 1)
    }
    setToggleButton(!toggleButton)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <Image source={product.productImage} style={styles.image}/>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backIconWrapper} activeOpacity={0.8}
              onPress={goBack}>
              <Icon name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8}
                onPress={() => setIsInterest(!isInterest)}>
                <Icon name="heart" size={24} color={isInterest ? 'red' : '#ccc'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8}>
                <Icon name="cart-outline" size={24} color='#00E1B4' />
                <View style={styles.badge} >
                  <Text style={styles.badgeText} >{cart}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        <View style={styles.content}>
          <View style={styles.headerText}>
            <Text style={styles.productName}>{product.productName}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          <View style={styles.rating}>
            <Icon name='star' size={20} color='#00E1B4' />
            <Icon name='star' size={20} color='#00E1B4' />
            <Icon name='star' size={20} color='#00E1B4' />
            <Icon name='star' size={20} color='#00E1B4' />
            <Icon name='star' size={20} color='#00E1B4' />
          </View>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.notes}>Notes:</Text>
          <InputField
            containerStyle={styles.input}
            placeholder='Enter your notes'
            onChangeText={setNotes}
            value={notes} />
          <View style={styles.footer}>
            <View style={styles.counterWrapper}>
              <TouchableOpacity style={styles.counterButton} activeOpacity={0.8}
                onPress={() => handleCounter('decrement')}>
                <Icon name="remove" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.counterText}>{counter}</Text>
              <TouchableOpacity style={styles.counterButton} activeOpacity={0.8}
                onPress={() => handleCounter('increment')}>
                <Icon name="add" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <Button title={toggleButton ? 'Add to cart' : 'Remove from cart'} buttonStyle={styles.button}
              onPress={handleAddRemoveCart} />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    marginTop: 45,
    marginHorizontal: 20,
    position: 'absolute',
  },
  headerRight: {
    flexDirection: 'row',
    marginLeft: 210,
  },
  backIconWrapper: {
    backgroundColor: '#00E1B4',
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  badge: {
    position: "absolute",
    top: 3,
    right: 2,
    backgroundColor: '#00e1a1',
    borderRadius: 10,
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    lineHeight: 12,
  },
  content: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: -50,
    borderRadius: 24,
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#00E1B4',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  notes: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    marginTop: 6,
    height: 100,
    alignItems: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  counterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#00e1a1',
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  button: {
    flex: 1,
    width: 150,
    height: 50,
    marginLeft: 20,
  },
})