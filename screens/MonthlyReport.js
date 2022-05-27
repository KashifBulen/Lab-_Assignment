
import * as React from 'react';
import { View, Text , Dimensions, ScrollView} from 'react-native';

//chart lib
import {LineChart, BarChart} from 'react-native-chart-kit';

const MonthlyReport = () => {
    return (
  
      <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
  
        <View>
        <Text
           style={{
                  textAlign: 'center',
                  fontSize: 18,
                  padding: 16,
                  marginTop: 16,
                }}>
                Monthly Report
              </Text>
    <LineChart
      data={{
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
      }}
      width={Dimensions.get('window').width - 500}
                height={420}
      yAxisLabel=" "
      yAxisSuffix=" "
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
  </View>
      </View>
      </ScrollView>
  
  
  
    );
  };
  export default MonthlyReport;