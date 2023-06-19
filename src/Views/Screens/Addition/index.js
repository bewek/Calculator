import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const Addition =()=> {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState();

    const Add = ()=> {
        const newTotal = number1 + number2;
        setTotal(newTotal);
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
    
            <Text style={styles.add}>Addition</Text>

            <TextInput
                type ="number"
                placeholder="Enter first number"
                keyboardType='numeric'
                value={number1}
                style={commonStyles.input}
                onChangeText={number1 => {
                    setNumber1(parseInt(number1));
                }}
            />
            <TextInput
                type ="number"
                placeholder="Enter second number"
                keyboardType='numeric'
                style={commonStyles.input}
                value={number2}
                onChange={number2 => {
                    setNumber2(parseInt(number2.nativeEvent.text));
                }}
            />

           <Button name={'Sum'} onPress={Add} 
           style={{alignSelf:'center'}} />

            <Text style={{fontSize:20, color:'black', fontWeight:'600', margin:15}}>
                Addition is: {total}</Text>

        </View>
    );
}

export default Addition;

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
    text:{
        fontSize:20,
        paddingHorizontal:15,
        marginTop:20,
    }
});