/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardelevated]}>
                 <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardelevated]}>
                 <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardelevated]}>
                 <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardelevated]}>
                 <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardelevated]}>
                 <Text>Tap</Text>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
     fontSize: 24,
     fontWeight: 'bold',
     paddingHorizontal: 10,
    },
    container: {
    padding:10,
    },
    card: {
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     height: 100,
     width: 100,
     margin: 8,
     borderRadius:20,
     
    },
    cardelevated:{
        backgroundColor:'rgb(41,44,41)',
        borderWidth:2,
        borderColor:'white',
        elevation: 10,
        shadowOffset:{
            width:2,
            height:1,
        },
        shadowColor:'white',
        shadowOpacity:0.5,
        shadowRadius:2,
    },
    cardred: {
     backgroundColor: 'teal',
    },
    cardblue: {
     backgroundColor: 'rebeccapurple',
    },
    cardgreen: {
     backgroundColor: 'teal',
    },
   });
   