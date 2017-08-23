import React, { PureComponent } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, PulseButton } from '../elements';
import { Play, Stop, Pause } from '../svg';
import { colors } from '../styles';

const Time = ({ duration }) => {
  let minutes = ('0' + parseInt(duration % 60)).slice(-2);
  let hours = ('0' + parseInt(duration / 60)).slice(-2);
  return <Text style={styles.time}>{`${hours}:${minutes}`}</Text>;
};

class Timer extends PureComponent {
  state = {
    duration: 0,
    isRunning: false
  }
  _duration = 0;
  _stopped = false;
  componentWillUnmount() {
    this.clearTimers();
  }
  componentWillUpdate(nextProps, nextState) {
    nextState.isRunning !== this.state.isRunning && this.animate(nextState.isRunning);
  }
  animationValue = new Animated.Value(0);
  animate = isRunning => {
    Animated.timing(this.animationValue, {
      toValue: isRunning ? 1 : 0,
      duration: 250
    }).start();
  }
  start = () => {
    this.setState({
      isRunning: true,
      duration: this._stopped ? 0 : this.state.duration //reset duration if was stopped;
    });
    this._stopped = false;
    this._timer = setInterval(() => {
      this._duration++;
      if (this._duration % 60 === 0) {
        this.setState({
          duration: this._duration / 60,
        });
      }
    }, 1000);
  }
  pause = () => {
    this.clearTimers();
    this.setState({ isRunning: false });
  }
  stop = () => {
    this._stopped = true;
    this.pause();
  }
  clearTimers = () => {
    clearInterval(this._timer);
  }
  handleStartPause = () => this.state.isRunning ? this.pause() : this.start();
  render() {
    let playBtnStyles = {
      backgroundColor: this.animationValue.interpolate({ inputRange: [0, 1], outputRange: [colors.accent, colors.darkPrimary] })
    };
    return (
      <View style={styles.page}>
        <Time duration={this.state.duration}/>
        <View style={styles.btnHolder}>
          <PulseButton style={[styles.btn, playBtnStyles]} onPress={this.handleStartPause}>
            {this.state.isRunning ? <Pause color={colors.primaryText}/> : <Play color={colors.primaryText}/>}
          </PulseButton>
          <PulseButton style={[styles.btn, styles.stop]} onPress={this.stop}>
            <Stop color={colors.primaryText}/>
          </PulseButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    padding: '10%'
  },
  time: {
    fontSize: 80,
    textAlign: 'center'
  },
  btnHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    marginTop: 15,
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  stop: {
    backgroundColor: colors.red
  }
});

export default Timer;