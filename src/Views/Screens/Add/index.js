import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import commonStyles from '../css'
import Button from '../../Components/Button'

const Add = () => {
    const [no1, setNo1] = useState();
    const [no2, setNo2] = useState();

    const addition = ()=>{
        no1 = this.no1
        no2 = this.no2
        let sum = no1+no2
        Alert(sum)
    }

    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
            <Text>Back</Text>
        </TouchableOpacity>
      <Text style={styles.add}>Addition</Text>

        <TextInput placeholder='Enter first number' style={commonStyles.input} keyboardType='numeric'/>
        <TextInput placeholder='Enter second number' style={commonStyles.input} keyboardType='numeric'/>

        <Button name={'Sum'} style={{alignSelf:'center'}} onPress={this.addition}/>

    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    add:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20, marginBottom:20
    },
})