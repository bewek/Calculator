import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import commonStyles from '../css';
import Button from '../../Components/Button';

const AreaofTri =() => {
    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);
    const [total, setTotal] = useState();

    const Area = () => {
        const newTotal = 0.5*base*height;
        setTotal(newTotal);
    }

    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            
            <Text style={styles.add}>Area of Triangle</Text>

            <TextInput
                type ="number"
                placeholder="Enter base"
                keyboardType='numeric'
                value={base}
                style={commonStyles.input}
                onChangeText={base => {
                    setBase(parseInt(base));
                }}
            />
            <TextInput
                type ="number"
                placeholder="Enter height"
                keyboardType='numeric'
                style={commonStyles.input}
                value={height}
                onChange={height => {
                    setHeight(parseInt(height.nativeEvent.text));
                }}
            />

           <Button name={'Area'} onPress={Area} 
           style={{alignSelf:'center'}} />


            <Text style={{fontSize:20, color:'black', fontWeight:'600', margin:15}}>
                Area of Triangle is: {total}</Text>

        </View>
    );
}
export default AreaofTri

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
});