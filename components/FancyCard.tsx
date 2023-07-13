/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending</Text>
       <View style={[styles.card,styles.cardelevated]}>
            <Image source={{
                uri:'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',  
            }}
            style={styles.cardimg}
            />
            <View style={styles.cardbody} >
                <Text style={styles.cardtitle}>IOT</Text>
                <Text style={styles.cardlabel}>Technology Today</Text>
                <Text style={styles.carddisc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti quis magnam explicabo neque voluptas autem obcaecati excepturi? Temporibus rerum quod voluptates officiis, tempore praesentium a modi mollitia fugiat nihil.</Text>
                <Text style={styles.cardfooter}>Islamabad City Today</Text>

            </View>
        </View> 
    </View>
  )
}


const styles = StyleSheet.create({
    headingText: {
     fontSize: 24,
     fontWeight: 'bold',
     paddingHorizontal: 10,
     paddingBottom:8,
    },
    container: {
    padding:10,
    },
    cardimg:{
        height:180,
    
    },
    cardbody:{
        padding:5,
        display:'flex',
        flexGrow:1,
    },
    cardlabel:{
        color:'#000000',
        fontSize:14,
        fontWeight:'bold',
        marginBottom:6,
    },
    cardtitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    carddisc:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1,
    },
    cardfooter:{
        color:'#000000',
        fontSize:14,
        fontWeight:'bold',
    },
    cardelevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },

    card: {
        Width:350,
        minHeight:360,
        borderRadius:10,
        overflow:'hidden',
        marginVertical:12,
        marginHorizontal:16,
    },
    
   
   });