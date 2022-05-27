

import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const OfferedPrayer = () => {
  const [Fajr, setFajr] = useState(false);
  const [Dhuhr, setDhuhr] = useState(false);
  const [Asr, setAsr] = useState(false);
  const [Maghrib, setMaghrib] = useState(false);
  const [Isha, setIsha] = useState(false);

  const[count, setcounter]=useState([]);


//setter
  localStorage.setItem('Data1', Fajr);

  // getter
 var a =localStorage.getItem('Data1');
  
 
//Setter
localStorage.setItem('Data2', Dhuhr);

// getter
var b=localStorage.getItem('Data2');

//setter
localStorage.setItem('Data3', Asr);
  // getter
var c=  localStorage.getItem('Data3');

 
//Setter
localStorage.setItem('Data4', Maghrib);
// getter
var d= localStorage.getItem('Data4');

 
//Setter
localStorage.setItem('Data5', Isha);
// getter
var e=localStorage.getItem('Data5');

var myarray=[a,b,c,d,e]


try {
AsyncStorage. setItem('@key', JSON. stringify(myarray));
} catch (error) {
// Error saving data.
}
console.log(localStorage.setItem('key', myarray))
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Prayer:  </Text>
      
      <Text>{localStorage.getItem('Data1')}</Text>
      <Text>{localStorage.getItem('Data2')}</Text>
      <Text>{localStorage.getItem('Data3')}</Text>
      <Text>{localStorage.getItem('Data4')}</Text>
      <Text>{localStorage.getItem('Data5')}</Text>
             
     
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={Fajr}
          onValueChange={setFajr}
          style={styles.checkbox}
          
        />
        <Text style={styles.label}>Fajar   </Text>

    
        <CheckBox
          value={Dhuhr}
          onValueChange={setDhuhr}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Dhuhr  </Text>


        


      
        <CheckBox
          value={Asr}
          onValueChange={setAsr}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Asr    </Text>
      

       <CheckBox
           value={Maghrib}
           onValueChange={setMaghrib}
           style={styles.checkbox}
         />
         <Text style={styles.label}>Maghrib</Text>
 
        <CheckBox
          value={Isha}
          onValueChange={setIsha}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Isha   </Text>

        
      </View>


     

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
    width:30,
    height:30,
  },
  label: {
    margin: 8,
    fontWeight:'bold'
    
  },
});




export default OfferedPrayer;


/*
import React, {Component} from 'react';  
import {Platform, StyleSheet, Text,  
  View,TouchableOpacity, AsyncStorage,  
} from 'react-native';  
  
export default class OfferedPrayer extends Component {  
  saveData(){  
    let name = "Michal";  
    AsyncStorage.setItem('user',name);  
  }  
  displayData = async ()=>{  
    try{  
      let user = await AsyncStorage.getItem('user');  
      alert(user);  
    }  
    catch(error){  
      alert(error)  
    }  
  }  
  render() {  
    return (  
      <View style={styles.container}>  
        <TouchableOpacity onPress ={this.saveData}>  
          <Text>Click to save data</Text>  
        </TouchableOpacity>    
        <TouchableOpacity onPress ={this.displayData}>  
          <Text>Click to display data</Text>  
        </TouchableOpacity>   
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#F5FCFF',  
  },  
});  */