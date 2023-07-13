/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet,Linking, Image,
   TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink);
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.elevatedcard, styles.card]}>
          <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in javascript 21 -ES12
          </Text>
          <Image 
                source={{
                  uri:'https://images.unsplash.com/photo-1616499370260-485b3e5ed653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',  
                }}
                style={styles.cardimg}
              />
              <View style={styles.bodycontainer}>
                <Text numberOfLines={3}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quaerat repudiandae qui numquam rem, voluptatem vel possimus, placeat reiciendis culpa earum eaque quo! Laudantium, praesentium perspiciatis aliquam culpa eveniet officia!
                </Text>
              
              <View style={styles.footerContainer}>
                <TouchableOpacity
                onPress={()=> openWebsite('https:\\www.google.com')}
                
                >
                  <Text style={styles.sociallinks}>Read More</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> openWebsite('google.com')}
               
                >
                  <Text  style={styles.sociallinks}>Follow me</Text>
                </TouchableOpacity>
              </View>
              </View>
          </View>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
  footerContainer:{
    padding:8,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  bodycontainer:{
    padding:8,
  },
  sociallinks:{
    fontSize:16,
    color:'#000',
    backgroundColor:'#FFF',
    paddingHorizontal:20,
    paddingVertical:6,
  borderRadius:12,
  },
  headingContainer:{
    // height:40,
    // display:'flex',
    // flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
  },
  headerText:{
    color:'#000000',
    fontSize:15,
    padding:10,
    fontWeight:'600',
  },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingBottom:8,
       },
       card:{
          maxWidth:350,
          maxHeight:360,
          borderRadius:10,
          marginVertical:12,
          marginHorizontal:16,
          
       },
       cardimg:{
        minHeight:180,
    
    },
       elevatedcard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
          width:1,
          height:1,
        }
        ,shadowColor:'#333',
        shadowOpacity:0.5,
       },
       
})