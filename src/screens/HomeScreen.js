import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { imageSlider, newestProducts, productCategories } from '../constants/dataApp';

const NewestProduct = ({ item }) => {
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

const ProductCategories = ({ item }) => {
  const { navigate } = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigate('CategoryScreen', { category: item })}
      style={styles.categoryWrapper}>
      <Image source={item.categoryImage} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.categoryName}</Text>
    </TouchableOpacity>
  )
};

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="notifications-outline"
          size={30}
          color="black"
        />
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <FlatList
            data={imageSlider}
            renderItem={({ item }) => <Image source={item.image} style={styles.imageSlider} />}
            keyExtractor={item => item.image}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
        <View>
          <Text style={styles.sectionText}>Newest Product</Text>
          <FlatList
            data={newestProducts}
            renderItem={({ item }) => <NewestProduct item={item} />}
            keyExtractor={item => item.productName}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Text style={styles.sectionText}>Product Categories</Text>
          <FlatList
            data={productCategories}
            renderItem={({ item }) => <ProductCategories item={item} />}
            keyExtractor={item => item.categoryName}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -10,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  imageSlider: {
    width: 350,
    height: 170,
    borderRadius: 10,
    marginRight: 5,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  productWrapper: {
    width: 200,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 6,
  },
  productImage: {
    width: 198,
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
  categoryWrapper: {
    width: 200,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  categoryImage: {
    width: 200,
    height: 220,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    margin: -11,
    marginBottom: 0,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 6,
  },
});