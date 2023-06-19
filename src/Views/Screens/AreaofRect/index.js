import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const AreaofRect =() => {
    const [length, setLength] = useState(0);
    const [breadth, setBreadth] = useState(0);
    const [total, setTotal] = useState();

    const Area = () => {
        const newTotal = 2*(length+breadth);
        setTotal(newTotal);
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Text style={styles.add}>Area of Rectangle</Text>

            <TextInput
                type ="number"
                placeholder="Enter length"
                keyboardType='numeric'
                value={length}
                style={commonStyles.input}
                onChangeText={length => {
                    setLength(parseInt(length));
                }}
            />
            <TextInput
                type ="number"
                placeholder="Enter breadth"
                keyboardType='numeric'
                style={commonStyles.input}
                value={breadth}
                onChange={breadth => {
                    setBreadth(parseInt(breadth.nativeEvent.text));
                }}
            />

           <Button name={'Area'} onPress={Area} 
           style={{alignSelf:'center'}} />

           
                <Text style={{fontSize:20, color:'black', fontWeight:'600', margin:15}}>
                Area of Rectangle is: {total}</Text>
        </View>
    );
}
export default AreaofRect

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
});