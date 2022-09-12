import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './Product.style';
import Icon from 'react-native-vector-icons/Ionicons';

const Product = () => {
  const [icon, setIcon] = useState('heart-outline');
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: 'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
          }}
        />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₺29999</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Xiaomi TWS Earbuds Speaker</Text>
        <View style={styles.iconContainer}>
          <Icon.Button
            style={styles.icon}
            size={30}
            activeOpacity={0.4}
            backgroundColor="transparent"
            underlayColor={'transparent'}
            color={icon === 'heart' ? '#F44538' : 'black'}
            onPress={() => {
              setIcon(icon === 'heart' ? 'heart-outline' : 'heart');
            }}
            name={icon}
          />
        </View>
      </View>
    </View>
  );
};

export default Product;
