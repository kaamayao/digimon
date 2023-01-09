import { Text, Pressable, View, StyleSheet, ScrollView } from 'react-native';


export default ({navigation, route}) => {
    return (
        <View>
        <Pressable style={styles.pressable}>
        <Text style={styles.text}> Ascuas </Text>
        </Pressable>
        <Pressable style={styles.pressable}>
        <Text style={styles.text}> Arañazo </Text>
        </Pressable>
        <Pressable style={styles.pressable}>
        <Text style={styles.text}> Gruñido </Text>
        </Pressable>
        <Pressable style={styles.pressable}>
        <Text style={styles.text}> Placaje </Text>
        </Pressable>
       
        
        </View>
    )
};
    
    const styles = StyleSheet.create({
        text: {
            color: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            fontSize: 16,
            fontWeight: '600'
        },
        wrapper: {
          backgroundColor: "gray",
          height: '100%'
        },
       
        pressable: {
          width: '100%',
          height: '25%',
          backgroundColor: "black",
          fontSize: 50,
        }
      })
    