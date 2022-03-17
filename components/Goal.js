import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Goal = (props) => {
  return (
    <View style={styles.goal}>
      <View style={styles.goalLeft}>
      <Text style={styles.goalText}>{props.text}</Text>
      <Text style={styles.goalAmount}>{props.amount}</Text>
      
      </View>
      <View style={styles.square}>
        <Text style={styles.goalFinish}>Finish Goal</Text>
      </View>
      <View style={styles.circular}></View>
      
    </View>
  )
}

export default Goal

const styles=StyleSheet.create({
  goal:{
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 5,
  },
  goalLeft:{
    flex:2,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  square:{
    width: 80,
    height: 24,
    backgroundColor: '#09e82b',
    borderRadius: 4,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goalFinish:{
    color: 'white',
    fontWeight:'bold',
    maxWidth: '100%',

  },
  goalText:{
    maxWidth: '80%',
    color: '#2c485e',
    fontWeight:'bold'
    

  },
  goalAmount:{
    maxWidth: '80%',
    flexDirection: 'row',
    color: 'gray',
    fontWeight: '400',
    

  },
  circular:{
    width: 12, 
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  }
})