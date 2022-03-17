import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import Goal from './components/Goal';
import SnackBar from 'react-native-snackbar-component';


export default function App() {

  const [snackIsVisible, setSnackIsVisible] = useState(false);
  const [distance, setDistance] = useState(0);

  return (
    <View style={styles.container}>
      {/*Todays task*/}
      
      <View style={styles.goalWrapper}>
        <View style={styles.topSection}>
          <Text style={styles.sectionTitle1}>Afternoon Jo</Text>
          <Text style={styles.sectionDescription}>Here's the latest</Text>
          <Text style={styles.sectionAmount}>KES 42,000</Text>
          <Text style={styles.sectionDescription}>Total funds</Text>
        </View>
        
      </View>
      <View style={styles.goalSection}>
          {/*This is where the goals will go*/}
          <Text style={styles.sectionTitle}>Your Goals</Text>
          <Goal text={'Goal 1'} amount={'KES 12,000'}/>
          <Goal text={'Goal 2'} amount={'KES 12,000'}/>
          <Goal text={'Goal 3'} amount={'KES 12,000'}/>
        </View>
      {/* Show snackbar button*/}
      <View >
      <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => setSnackIsVisible(true)}>
          <Text style={styles.buttonTextStyle}>Show Snackbar</Text>
        </TouchableHighlight>
        <SnackBar
          
          visible={snackIsVisible}
          //SnackBar visibility control
          textMessage="This is an in-app notification snackbar to show to the user when they perform an action.Clicking it should
          change the text"
          backgroundColor="#d6385f"
          
          
          
          //Text on SnackBar
          buttonColor="white"
          
          actionHandler={() => {
            //function called while clicking on action Text
            alert("user clicked snackbar");
            //After handling click making snackBar invisible
            setSnackIsVisible(false);
          }}
          actionText="Click Snackbar"
          //action Text to print on SnackBar
          distanceCallback={(distance) => {
            //Number indicating distance taken up by snackbar
            setDistance(distance);
          }}
          animationTime='250'
          duration='10'
          infinite={false}
          accentColor='white'
          position='top'
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f7f7f7"
    
    
  },
  goalWrapper:{
    paddingTop:30,
    marginBottom: 20,
    paddingHorizontal:20,
    backgroundColor:"#2c485e",
    
    

  },
  sectionTitle1:{
    fontSize:24,
    fontWeight:'bold',
    color: 'white',
    marginBottom: 10,
    fontFamily:'normal'

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    color: '#2c485e',
    marginBottom: 20,
    fontFamily:'normal'
    

  },
  topSection:{
    marginBottom: 20,
    paddingTop:10,
    
    
    
    
    

  },
  sectionDescription:{
    fontSize: 16,
    color:  'white',
    marginBottom: 20,
  },
  sectionAmount:{
    color:'#09e82b',
    fontSize: 24,
    fontWeight:'bold'
  },
  goalSection: {
    margin: 10,
    paddingTop:15,
    flex: 1,
    
    
    
    
    

  },
   
  buttonStyle: {
    backgroundColor: '#09e82b',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    
    
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight:'bold'
  },
  
});
