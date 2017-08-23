import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Groups from './groups';
import Items from './items';
import Timer from './timer';

import { colors } from './styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
  },
  title: {
    alignSelf: 'center'
  }
});

const stackConfig = {
  navigationOptions: {
    headerStyle: styles.header,
    headerTintColor: colors.primaryText,
    headerTitleStyle: styles.title
  },
};

const Navigator = StackNavigator({
  Groups: {
    screen: Groups,
    navigationOptions: {
      title: 'Groups'
    }
  },
  Items: {
    screen: Items,
    path: 'expenses/:id/',
    navigationOptions: ({ navigation }) => ({
      title: `Group ${navigation.state.params.id} Items`,
      headerRight: <View />, //added empty element to center title for android
      headerBackTitle: 'Items'
    })
  },
  Timer: {
    screen: Timer,
    path: 'items/:id/',
    navigationOptions: {
      title: 'Timer',
      headerRight: <View />, //added empty element to center title for android
    }
  }
}, stackConfig);

export default Navigator;