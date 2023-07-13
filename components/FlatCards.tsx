/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function FlatCards(): JSX.Element {

  return (  
   <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.cardred]}>
            <Text>
                Red
           </Text>
        </View>
        <View style={[styles.card , styles.cardblue]}>
            <Text>
                Purples
           </Text>
        </View>
        <View style={[styles.card , styles.cardgreen]}>
            <Text>
                Aqua
           </Text>
        </View>
  
      </View>
   </View>
  );
}

const styles = StyleSheet.create({
 headingText: {
  fontSize: 24,
  fontWeight: 'bold',
  paddingHorizontal: 10,
 },
 container: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap'
 },
 card: {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  height: 100,
  width: 100,
  margin: 8,
  borderRadius: 25,
 },
 cardred: {
  backgroundColor: '#EF5354',
 },
 cardblue: {
  backgroundColor: 'rebeccapurple',
 },
 cardgreen: {
  backgroundColor: 'teal',
 },
});

export default FlatCards;
