import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    // setCourseGoals(curentGoals => [...curentGoals, enteredGoal]);
    setCourseGoals(curentGoals => [...curentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(curretGoals => {
      return curretGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandelr = () => {
      setIsAddMode(false);
  };

  return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />

        <GoalInput 
          visible={isAddMode} 
          onAddGoal={addGoalHandler} 
          onCancel={cancelGoalHandelr} 
        />

        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={courseGoals} 
          renderItem={itemData => (
            <GoalItem 
              id={itemData.item.id} 
              onDelete={removeGoalHandler} 
              title={itemData.item.value} 
            />
          )} 
        />
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  },
});
