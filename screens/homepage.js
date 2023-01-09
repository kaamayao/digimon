import { Button, StyleSheet, Pressable} from 'react-native';

import { Text, View, Image }  from 'react-native'  


export default ({navigation}) => {
    return (
      <View style={styles.wrapper} >
        <Image source={require('../img/pokemon.jpeg')} style={styles.image}/>
        <Text style={styles.text}>Bienvenido a esta cosa c:</Text>
        <Pressable  style={styles.pressable}>
          <Text></Text>
          <Button
        title="Start"
        onPress={() =>
          navigation.navigate('Battleground', {name: 'Jane'})
        }
        ></Button>
        </Pressable>
      
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      color: "blue",
      fontSize: 80,
    },
    wrapper: {
      backgroundColor: "gray",
      height: '100%'
    },
    image: {
      height: '40%',
      width: '100%',

    

    },
    pressable: {
      width: '100%',
      height: '8%',
      backgroundColor: "white",
      fontSize: 50,
    }
  })
