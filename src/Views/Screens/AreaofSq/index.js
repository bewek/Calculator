import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const AreaofSq =() => {
    const [length, setLength] = useState(0);
    const [total, setTotal] = useState();

    const Area = () => {
        const newTotal = length*length;
        setTotal(newTotal);
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Text style={styles.add}>Area of Square</Text>

            <TextInput
                placeholder="Enter length"
                keyboardType='numeric'
                value={length}
                style={commonStyles.input}
                onChangeText={length => {
                    setLength(parseInt(length));
                }}
            />

           <Button name={'Area'} onPress={Area} 
           style={{alignSelf:'center'}} />

                
            <Text style={{fontSize:20, color:'black', fontWeight:'600', margin:15}}>
                Area od Square is: {total}</Text>

        </View>
    );
}
export default AreaofSq

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
});