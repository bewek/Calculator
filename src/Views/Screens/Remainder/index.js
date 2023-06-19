import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const Remainder =() => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState();

    const Rem = () => {
        const newTotal = number1 % number2;
        setTotal(newTotal);
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Text style={styles.add}>Remainder</Text>

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

           <Button name={'Remainder'} onPress={Rem} 
           style={{alignSelf:'center'}} />

            <Text style={{fontSize:20, color:'black', fontWeight:'600', margin:15}}>
                Remainder is: {total}</Text>

        </View>
    );
}
export default Remainder

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
});