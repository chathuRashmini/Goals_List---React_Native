import React, { useState} from 'react'
import { StyleSheet, Modal, View, Button, TextInput } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputhandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={goalInputhandler}
                    value={enteredGoal} 
                />
                <View style={styles.btnContainer} >
                    <View style={styles.individualbtn}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.individualbtn}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    textInput: {
      borderColor: 'black', 
      borderWidth: 2, 
      padding: 10, 
      width: '70%',
      marginBottom: 10,
      borderRadius: 5,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    individualbtn: {
        width: '45%',
        borderRadius: 5,
    },
});

export default GoalInput;