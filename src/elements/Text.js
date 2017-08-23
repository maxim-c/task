import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../styles';

//we can add here default font family colors etc...
const CustomText = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props}/>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  }
});

export default CustomText;