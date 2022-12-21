import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const imageSlider = [
  { image: require('../../assets/images/slide1.png') },
  { image: require('../../assets/images/slide2.png') },
  { image: require('../../assets/images/slide3.png') },
]

const newestProducts = [
  { productImage: require('../../assets/images/jeans.png'), price: '$10.99', productName: 'Jeans' },
  { productImage: require('../../assets/images/sweaters.png'), price: '$12.99', productName: 'Sweaters' },
  { productImage: require('../../assets/images/boots.png'), price: '$14.99', productName: 'Boots' },
  { productImage: require('../../assets/images/runningshoes.png'), price: '$16.99', productName: 'Running Shoes' },
];

const productCategories = [
  { categoryImage: require('../../assets/images/clothing.png'), categoryName: 'Clothing' },
  { categoryImage: require('../../assets/images/shoes.png'), categoryName: 'Shoes' },
];

const NewestProduct = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.productImage} style={styles.productImage} />
    <Text style={styles.productName}>{item.productName}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
  </View>
);

const ProductCategories = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.categoryImage} style={styles.categoryImage} />
    <Text style={styles.categoryName}>{item.categoryName}</Text>
  </View>
);

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
    padding: 20,
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
  card: {
    marginRight: 20,
  },
  productImage: {
    width: 175,
    height: 200,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
  },
  productPrice: {
    fontSize: 16,
  },
  categoryImage: {
    width: 175,
    height: 200,
    borderRadius: 6,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});