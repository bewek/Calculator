import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const MainLayout = ({children}) => {
  return (
<KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS == 'ios'?'padding':'height'} keyboardVerticalOffset={300}>
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
        {children}
    </SafeAreaView>
    <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
</KeyboardAvoidingView>
  )
}

export default MainLayout

const styles = StyleSheet.create({})