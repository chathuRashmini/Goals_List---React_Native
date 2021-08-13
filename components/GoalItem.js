import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listitem}> 
                <Text>{props.title}</Text> 
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listitem: {
        padding: 10,
        backgroundColor: '#90E0EF',
        borderColor: '#219EBC',
        borderWidth: 2,
        margin: 10,
        borderRadius: 20,
    }
});

export default GoalItem;