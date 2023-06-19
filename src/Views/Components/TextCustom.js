import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextCustom = (props) => {
  return (
    <Text {...props}>
        {props.children}
    </Text>
  )
}

export default TextCustom

const styles = StyleSheet.create({})