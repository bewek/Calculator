import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const SimpleIntrest =() => {
    const [principal, setPrincipal] = useState(0);
    const [time, setTime] = useState(0);
    const [rate, setRate] = useState(0);
    const [total, setTotal] = useState();

    const SI = () => {
        const newTotal = principal*time*rate/100;
        setTotal(newTotal);
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Text style={styles.add}>Simple Intrest</Text>

            <TextInput
                type ="number"
                placeholder="Principal"
                keyboardType='numeric'
                value={principal}
                style={commonStyles.input}
                onChangeText={principal => {
                    setPrincipal(parseInt(principal));
                }}
            />
            <TextInput
                type ="number"
                placeholder="Time"
                keyboardType='numeric'
                value={time}
                style={commonStyles.input}
                onChangeText={time => {
                    setTime(parseInt(time));
                }}
            />
            <TextInput
                type ="number"
                placeholder="Rate"
                keyboardType='numeric'
                style={commonStyles.input}
                value={rate}
                onChange={rate => {
                    setRate(parseInt(rate.nativeEvent.text));
                }}
            />

           <Button name={'Simple Intrest'} onPress={SI} 
           style={{alignSelf:'center'}} />

                
            <Text style={{fontSize:20, color:'black', fontWeight:'600', margin:15}}>
                SimpleIntrest is: {total}</Text>

        </View>
    );
}
export default SimpleIntrest

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
});