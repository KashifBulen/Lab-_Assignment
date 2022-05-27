
import * as React from 'react';
import { View, Text , Dimensions, ScrollView} from 'react-native';

//chart lib
import {LineChart, BarChart} from 'react-native-chart-kit';

const WeeklyReport=() => {

 
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
                Last_7_days_Report
              </Text>
              <BarChart data={{
                labels: [
                  'Fajar',
                  'Zuhr',
                  'Asr',
                  'Maghrib',
                  'Isha',
  
                ],
                datasets: [
                  {
                    
                    data: [60, 56, 58, 50, 70],
                  },
                ],
              }}
                width={Dimensions.get('window').width - 500}
                height={420}
                yAxisLabel={' '} chartConfig={{
                  backgroundColor: '#10c9bd',
                  backgroundGradientFrom: '#f2b40a',
                  backgroundGradientTo: '#99f7e3',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
  
  
        </View>
      </View>
      </ScrollView>
    );
  };
  export default WeeklyReport;
  