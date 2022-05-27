

//navigation code


import * as React from 'react';
import { Button, View, Text , StyleSheet, Dimensions, ScrollView, Image, ImageBackground,FlatList,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//chart lib
import {LineChart, BarChart} from 'react-native-chart-kit';





//Import screens
import Calender from "./screens/Calender";
import OfferedPrayer from "./screens/OfferedPrayer";
import WeeklyReport from "./screens/WeeklyReport";
import MonthlyReport from './screens/MonthlyReport';
import DataRange from './screens/DataRange';








function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight:"900",
                padding: 16,
                marginTop: 10,
              }}>
              Salah Tracker App
            </Text>

            <view>

            <Button
      
      color="#fb8c00"
        title="            Calender          "
        onPress={() => navigation.navigate('Calender')}
      />


<Button
marginTop="10px"
        title="   Offered Prayers   "
        color="#fb8c00"
        onPress={() => navigation.navigate('Offered Prayers')}
      />

<Button
      color="#fb8c00"
        title="Weekly Report"
        onPress={() => navigation.navigate('Weekly Report')}
      />

<Button
 color="#fb8c00"
        title="Monthly Report"
        onPress={() => navigation.navigate('Monthly Report')}
      />

<Button

 color="#fb8c00"
        title="Data Range"
        onPress={() => navigation.navigate('Data Range')}
      />
            </view>

     



    </View>
  );
}






 




//Last 7 days report

//Monthly report


//Data Range



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calender" component={Calender} />
        <Stack.Screen name="Offered Prayers" component={OfferedPrayer} />
        <Stack.Screen name="Weekly Report" component={WeeklyReport} />
        <Stack.Screen name="Monthly Report" component={MonthlyReport} />
        <Stack.Screen name="Data Range" component={DataRange} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


