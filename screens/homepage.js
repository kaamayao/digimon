import { Button } from 'react-native';

export default ({navigation}) => {
    return (
      <>
        <Button
          title="This is Nico's Page"
          onPress={() =>
            navigation.navigate('ChoosePokemon', {name: 'Jane'})
          }
        />
        <Button
          title="This is Quichi's Page"
          onPress={() =>
            navigation.navigate('Battleground', {name: 'Jane'})
          }
        />
      </>
    );
  };