import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const AreaofCir =() => {
    let pi = [3.14]

    const [radius, setRadius] = useState(0);
    const [total, setTotal] = useState();

    const Area = () => {
        const newTotal = pi*radius*radius;
        setTotal(newTotal);
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Text style={styles.add}>Area of Circle</Text>

            <TextInput
                placeholder="Enter Radius"
                keyboardType='numeric'
                value={radius}
                style={commonStyles.input}
                onChangeText={radius => {
                    setRadius(parseInt(radius));
                }}
            />

           <Button name={'Area'} onPress={Area} 
           style={{alignSelf:'center'}} />

                
            <Text style={{fontSize:20, color:'black', fontWeight:'600', margin:15}}>
                Area of Circle is: {total}</Text>

        </View>
    );
}
export default AreaofCir

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
});