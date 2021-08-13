import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    setCourseGoals(curentGoals => [...curentGoals, { key: Math.random().toString(), value: enteredGoal }]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(curretGoals => {
      return curretGoals.filter((goal) => goal.id !==goalId);
    });
  }

  return (
    <View style={styles.screen}>
      
      {/* <GoalInput onAddGoal={addGoalHandler} /> */}

        <View style={styles.inputContainer}>
            <TextInput
            style={styles.textInput} 
            onChangeText={goalInputhandler}
            value={enteredGoal} 
            />
            <Button title="ADD" onPress={addGoalHandler} />
        </View>

        <FlatList 
            data={courseGoals} 
            renderItem={itemData => (
            <View style={styles.listitem}> 
                <Text>{itemData.item}</Text> 
            </View>
            )} 
        />
        {/* {courseGoals.map((goal) => 
          <GoalItem title={goal} onDelete={() => console.log('This doesn\'t work :/')} />
        ) } */}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 10, 
    width: 200
  },
  listitem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
  }
});
