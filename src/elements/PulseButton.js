import React, { Component } from 'react';
import PT from 'prop-types';
import {
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const RANGE = 10;
const HIT_SLOP = { top: RANGE, left: RANGE, bottom: RANGE, right: RANGE };

export default class extends Component {
  static propTypes = {
    ...Component.propTypes,
    style: Animated.View.propTypes.style,
    onPress: PT.func
  };
  static defaultProps = {
    ...Component.defaultProps,
    children: <Text>Press me!</Text>
  };
  scale = new Animated.Value(1);
  animStyles = { transform: [{ scale: this.scale }] }
  animateButton(toValue) {
    Animated.timing(this.scale, {
      duration: 150,
      toValue
    }).start();
  }
  pressInAnimation = () => {
    this.animateButton(0.9);
  }
  pressOutAnimation = () => {
    this.animateButton(1);
  }
  render() {
    let { children, style, onPress } = this.props;
    return (
      <TouchableWithoutFeedback
        hitSlop={HIT_SLOP}
        onPressIn={this.pressInAnimation}
        onPressOut={this.pressOutAnimation}
        onPress={onPress}
      >
        <Animated.View style={[style, this.animStyles]}>
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}