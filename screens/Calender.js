

import React, { useState } from 'react'
import { View, Button } from 'react-native'
import DatePicker from 'react-native-neat-date-picker'

const Calender = () => {

 
  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
   setShowDatePicker(true)

    
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)

    
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    return date.getDate()
  }

  
let arr = [];

function onChange(date, dateString) {
  arr.push(...[date, ...arr]);
  console.log(arr);
}

  return (
    <View>
      <Button title={'open'} onPress={openDatePicker}/>
      <DatePicker
        onChange={onchange}
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}

      />
      
    </View>
)};

export default Calender;