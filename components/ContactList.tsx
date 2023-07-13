/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'Faizaan Khan',
            status:'Just an active teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/85791064?s=96&v=4'
        },
        {
            uid:2,
            name:'Faizaan Khan',
            status:'Just an active teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/85791064?s=96&v=4'
        },
        {
            uid:3,
            name:'Faizaan Khan',
            status:'Just an active teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/85791064?s=96&v=4'
        },
        {
            uid:4,
            name:'Faizaan Khan',
            status:'Just an active teacher',
            imageUrl:'https://avatars.githubusercontent.com/u/85791064?s=96&v=4'
        }
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
    <ScrollView
    scrollEnabled={true}
    style={styles.container}>
        {contacts.map((item)=>(
            <View key={item.uid} style={styles.userCard}>
            <Image
                source={{
                    uri:item.imageUrl
                }}
                style={styles.userImage}
            />
            <View>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userStatus}>{item.status}</Text>
            
            </View>
            </View>
       ))}
    </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        paddingHorizontal:16,
        marginBottom:8,
        
    },
    userCard:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5,
        backgroundColor:'rgba(119,158,249,0.8)',
        borderRadius:10,
        padding:2,
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14

    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#FFF',
    },
    userStatus:{},
})