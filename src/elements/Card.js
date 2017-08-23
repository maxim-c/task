import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors, layout } from '../styles';

const Card = ({ children, style, ...props }) => {
  return (
    <TouchableOpacity style={[styles.card, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 2,
    paddingVertical: layout.cardVerticalPadding,
    paddingHorizontal: layout.cardHorizontalPadding,
    backgroundColor: colors.cardBg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default Card;