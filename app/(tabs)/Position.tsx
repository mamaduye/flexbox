import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image 
          source={{
            uri: 'https://upload.https://e7.pngegg.com/pngimages/323/161/png-clipart-computer-icons-shopping-cart-cart-angle-logo.pngwikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png',
          }} 
          style={styles.image} 
        />
      </View>
      <Text style={styles.text}>Keranjang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cartWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Position;
