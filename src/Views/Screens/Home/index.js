import {StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Button from '../../Components/Button'
import Addition from '../Addition'
import Subtract from '../Subtract'
import Multiply from '../Multiply'
import Divide from '../Divide'
import Remainder from '../Remainder'
import SimpleIntrest from '../SimpleIntrest'
import AreaofRect from '../AreaofRect'
import AreaofCir from '../AreaofCir'
import AreaofTri from '../AreaofTri'
import AreaofSq from '../AreaofSq'

const Home = () => {
    const navigation = useNavigation();

  const [tabs, setTabs] = useState([{screenName:'Addition',Component:Addition}, {screenName:'Subtract',Component:Subtract}, {screenName:'Multiply', Component:Multiply}, {screenName:'Divide', Component:Divide},
   {screenName:'Remainder', Component:Remainder}, 
  {screenName:'SimpleIntrest', Component:SimpleIntrest}, {screenName:'AreaofRect', Component:AreaofRect}, {screenName:'AreaofCir', Component:AreaofCir}, 
  {screenName:'AreaofTri', Component:AreaofTri}, {screenName:'AreaofSq', Component:AreaofSq}
])

const [selectedtab, setSelectedtab] = useState({screenName:'Addition', Component:Addition})

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
      <Text style={styles.home}>Home</Text>

        <View style={{alignSelf:'center', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', marginTop:50}}>
        {
          tabs.map((tab, index)=>{
            return(
              <Button name={tab.screenName} onPress={()=>setSelectedtab(tab)} style={{backgroundColor:selectedtab==tab?'green':'white'}}/>

            )
          })
        }
        </View>
        <selectedtab.Component/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center',
        marginTop:20
    },
})