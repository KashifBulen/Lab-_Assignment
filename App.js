

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  checkbox,
} from "react-native";
//import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <Image style={{
margin:0,
width: 100,
height: 100,

      }} source={require("./assets/clogo.png")} />
    <Text style={{padding:0, 
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20,
    marginRight:5,
    paddingBottom:50
    }}> LOG IN</Text>
      <StatusBar style="auto" />
      <View style={styles.buttonStyleContainer}>
      <TouchableOpacity style={{
        backgroundColor:"green",
         width:50,
         height:30,
         bottom:10,
         padding:0
   
         }}>
        <Text style={{color:"white",
        textAlign:"center",
       paddingTop:5

      }}>CNIC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"black",
      width:80,
    height:30,
    bottom:10
    }}>
        <Text style={{color:"white",
      textAlign:"center",
      paddingTop:5
      }}>Passport #</Text>
      </TouchableOpacity>
         </View>

    
      

      
      

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="XXXX-XXXXXXX-X."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        
      </View>

      <View>
      <checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {setChecked(!checked); }}
    />
      </View>
  

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      
      <view>
      <Text style={styles.forgot_button}>Forgot Password?</Text>
      </view>

      <view>
      <Text style={{color:"red"}}>Tutorials</Text>
      </view>

      <view>
      <Text style={styles.Register_form}>Don't have an account ?  </Text>
      <Text style={{color:"red"}}> Register </Text>
      </view>
    </View>

    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a9a9a9",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width: 150,
    height: 150,
    
  },
 
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    paddingRight:110,
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft:0,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"red"
  },
 
  loginBtn: {

    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#228b22",
  },
  loginText:{
    color:"#a9a9a9",
    fontWeight:'bolder'
    
  },
 

 
buttonStyleContainer: {
   flex: 1,
   marginRight:150,
   maxHeight:20,
  flexDirection: 'row',
   marginHorizontal: 0,
    marginTop: 0,
    
  },


});



//Intro Screen of Lab-Activity

/*
import React from "react";
import { StyleSheet, Text, View, Button,Dimensions ,ImageBackground, TouchableOpacity} from "react-native";
//import { TouchableOpacity } from "react-native-web";
import { normalizeRect } from "react-native/Libraries/StyleSheet/Rect";
//import { tintColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      
      <View style={{ flex: 2, 
      backgroundColor: "#f08df7",
       borderRadius:60 ,
       maxHeight:800,
     
       
    
    
    }} >
      <ImageBackground source={require('./assets/Saly-1intro-image.png')} style={{top: 0,  width: '90%', height: '97%', left: (Dimensions.get('window').width / 2) - 170,}}>
    
  </ImageBackground>
        
        </View>

      <View style={{ flex: 1, backgroundColor: " ", alignItems:"center" }} >
       <text style={{ paddingTop:40, fontWeight:"bolder", fontSize:30, fontFamily:"Arial", textAlign:'center'}}> 
       Discover Your <br/>Own Dream House
       </text>
      <br/>
       <text style={{
           textAlign:'center'

       }} > 
       Don't forget that gifts often come with costs that go 
       beyond their purchase price. When you purchase a 
       child the latest smartphone, you're also committing
        
        

       </text>
       </View>
      <View style={{ flex: 1, flexDirection:'row', backgroundColor: " ", maxHeight:60 }} >
      <TouchableOpacity style={styles.button1}>
      <View  >
        <text style={{
          fontSize:20,
          color:'white',
          paddingTop:20,
          fontWeight:'bolder',
          fontFamily:'Arial'
          }}>Sign in</text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
        <View  >
      <text style={{
        fontSize:20,
        color:'black',
        paddingTop:20,
        fontWeight:'bold',
        fontFamily:'Arial'
        
        }}>
        Register
        </text>
        </View>
        </TouchableOpacity>
      
        
      
       
       
        </View>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  button1: {
    backgroundColor: '#f08df7',
    width: '50%',
    height: 65,
    alignItems:'center',
    borderTopLeftRadius:12,
    borderBottomLeftRadius:12,
    left:0,
    top:0

  },

  button2: {
    top:0,
    left:0,
    backgroundColor: '#f2f3f5',
    width: '50%',
    height: 65,
    alignItems:'center',
    borderTopRightRadius:12,
    borderBottomRightRadius:12
   

  },


});

export default Flex;

*/

/*

//login screen of lab-Activity

import React from "react";
import { StyleSheet,Image, Text, View, Button, TextInput, TouchableOpacity} from "react-native";



const Flex = () => {
  return (
    
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      
      <View style={{ flex: 2, 
      backgroundColor: " ",
       
       maxHeight:800,
    }} >
    
    <Text style={{fontSize:30, textAlign:'center', fontWeight:'bolder', fontFamily:'Arial'}}>
        Welcome Back
        </Text>
       
        <Text style={{ textAlign:'center', marginBottom:40 }}>
        Don't forget that gifts often come with costs  
       beyond their purchase price. When you purchase a

        </Text>

        <TextInput
          style={{height: 45,width: "95%", backgroundColor:'#ebf2f7', borderColor: "#ebf2f7",borderWidth: 2, borderRadius:10, marginBottom:10}}
          placeholder="   Username, Email & Phone Number"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        
        <TextInput
          style={{height: 45,width: "95%", backgroundColor:'#ebf2f7',borderColor: "#ebf2f7",borderWidth: 2, borderRadius:10}}
          placeholder="   Password"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />
        <Text style={{ 
          textAlign:'center',
           marginBottom:40, 
           textAlign:'right',
            marginRight:22,
            marginTop:10
            }}>
        Forgot Password ?

        </Text>

        <TouchableOpacity style={styles.button1}>
      <View  >
        <text style={{
          fontSize:20,
          color:'white',
          paddingTop:20,
          fontWeight:'bolder',
          fontFamily:'Arial'
          }}>Sign in</text>
        </View>
        </TouchableOpacity>

        <Text style={{ 
          textAlign:'center',
           marginBottom:40, 
           textAlign:'center',
            marginRight:22,
            marginTop:10
            }}>

        -------- Or Sign up with -------- 

        </Text>

        </View>

      <View style={{ flex: 2, flexDirection:'row', backgroundColor: "", alignItems:'flex-start' }} >
      
 <Image style={{  width:50, height:50, border:'#bdbbb7' , left:100, bottom:30}} source={require('./assets/Google logo.png')}/>
 <Image style={{ width:50, height:50, border:'#bdbbb7' , left:100, bottom:30}} source={require('./assets/Facbook.png')}/>
 <Image style={{width:50, height:50, border:'#bdbbb7' , left:100, bottom:30}} source={require('./assets/Group.png')}/>
      
        
      
       
       
        </View>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  button1: {
    backgroundColor: '#f08df7',
    width: '95%',
    height: 65,
    alignItems:'center',
    borderRadius:20,
    left:0,
 

  },

 


});

export default Flex;
*/