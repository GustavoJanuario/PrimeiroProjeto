import React from "react";
import { View, Text, Image, SafeAreaView, Button, ScrollView } from 'react-native';

function App() {

  return (

    // View Principal
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    }}>
      <SafeAreaView>
        <ScrollView>

          <View style={{
            paddingTop:20,
          }}>

            <Text style={{ fontSize: 20, marginBottom: 10, color: '#000000' }}>

              Este é meu primeiro projeto!
              {'\n'}
              Hoje é dia 17.


            </Text>

            <Image
              style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDmo0NOFOJKfeb64hUIbmLBzT_jqtMSgujg&usqp=CAU',
              }}
            />
            <Button style={{with:100, height:100, paddingTop:50}} title="OK"></Button>
          </View>


        </ScrollView>
      </SafeAreaView>
    </View>


  );


}

export default App;