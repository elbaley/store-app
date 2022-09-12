import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width - 20;
const styles = StyleSheet.create({
  productContainer: {
    width: width / 2 - 10,
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },

  priceContainer: {
    position: 'absolute',
    right: 10,
    top: 15,
    backgroundColor: '#f1743c',
    padding: 7,
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  price: {
    fontSize: 15,
    color: 'white',
  },
  name: {
    color: '#5B5859',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  iconContainer: {
    height: 30,
    width: 30,
  },
  icon: {
    marginRight: -10,
    padding: 0,
  },
});

export default styles;
