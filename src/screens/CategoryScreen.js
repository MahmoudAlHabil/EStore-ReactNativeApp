import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Product = ({ item }) => {
  const { navigate } = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigate('ProductScreen', { product: item })}
      style={styles.productWrapper}>
      <Image source={item.productImage} style={styles.productImage} />
      <Text style={styles.productName}>{item.productName}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  )
};

const CategoryScreen = () => {
  const { category } = useRoute().params
  const flatListHeader = <Text style={styles.categoryName}>{category.categoryName}</Text>
  return (
    <View style={styles.container}>
      <FlatList
        data={category.products}
        renderItem={({ item }) => <Product item={item} />}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.content}
        numColumns={2}
        ListHeaderComponent={flatListHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  categoryName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  content: {
    paddingTop: 10,
  },
  productWrapper: {
    width: '48%',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 220,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: -10,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555'
  },
})