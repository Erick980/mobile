import { Text, SafeAreaView, StyleSheet, View, useState } from 'react-native';
import { Button, Appbar, Avatar, Card, Checkbox,  ActivityIndicator, ProgressBar, IconButton} from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={(props) => <Avatar.Icon {...props} icon="folder" />}
      right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
      />
      <ActivityIndicator animating={true} color={'red'} size={'large'} />
      <Button icon="arm-flex" mode="contained-tonal" onPress={() => console.log('Pressed')}>
        Press me
      </Button> 
     

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
