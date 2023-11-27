import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookshop</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Book Title 1</Text>
        <Text style={styles.sectionDesc}>by Some Random Dude</Text>
        <Text style={styles.sectionInfo}>Lorem ipsum dolores text random shit omdat ik geen lorem ipsum generator wil opzoeken, ben momenteel te lui. Dus daarom schrijf ik even deze random bs.</Text>
        <Text style={styles.bookCode}>ISBN 978-8-2165-1860-1</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',  
    paddingLeft: 10,  
    marginTop: 50,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40
  },
  section: {
    padding: 5,
    margin: 5
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  sectionDesc: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  },
});
