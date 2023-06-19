import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import commonStyles from '../Screens/css';
import TextCustom from './TextCustom';

const text = {
  color: 'black',
};

const Button = ({
  onPress,
  name,
  width = 120,
  style,
  textStyle = text,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[commonStyles.button, {width: width}, style]}>
        <TextCustom style={[commonStyles.buttonText, textStyle]}>{name}</TextCustom>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
