import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Product from './components/Product/Product';
import productList from './products.json';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([...productList]);
  const renderProduct = ({item}) => {
    return <Product productData={item} />;
  };

  function handleSearch(keyword) {
    const searchResult = productList.filter(product =>
      product.title.toLowerCase().includes(keyword.toLowerCase().trim()),
    );

    setFilteredProducts(searchResult);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        <Icon size={30} name="logo-react" />
        Store App
      </Text>

      <View style={styles.searchContainer}>
        <TextInput
          onSubmitEditing={({nativeEvent}) => {
            handleSearch(nativeEvent.text);
          }}
          placeholder="Search products..."
          placeholderTextColor="rgba(0,0,0,0.2)"
          style={styles.searchInput}
        />
      </View>
      <FlatList
        style={styles.productsContainer}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 30,
        }}
        horizontal={false}
        data={filteredProducts}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    flex: 1,
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 32,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginBottom: 5,
  },

  productsContainer: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 2,
    height: 50,
    padding: 10,
    fontSize: 18,
    margin: 10,
    borderRadius: 8,
  },
  testText: {
    color: 'red',
  },
});
