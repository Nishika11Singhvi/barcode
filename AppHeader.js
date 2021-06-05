import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component
{
  render()
  {
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}> • BARCODE SCANNER •</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
  textContainer : 
  {
    backgroundColor : 'rgb(40,40,40)',
    marginTop : 0,
    borderRadius : 0,
  },

  text : 
  {
    color : 'white',
    fontFamily : 'courier',
    fontSize : 24,
    padding : 10,
    marginTop : 0,
    marginRight : 15,
    textAlign : 'center'
  }
});

export default AppHeader;