import React, { PureComponent } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text, Card, ListSeparator } from '../elements';
import { ArrowRight } from '../svg';
import { layout } from '../styles';

import range from 'lodash/range';

const DATA = range(1, 51);


const Item = ({ item, onPress }) => (
  <Card onPress={onPress}>
    <Text style={styles.itemTitle}>Item {item}</Text>
    <ArrowRight />
  </Card>
);

class Items extends PureComponent {
  _keyExtractor = item => item;
  renderItem = ({ item }) => {
    const link = () => this.props.navigation.navigate('Timer', { id: item });
    return <Item item={item} onPress={link} />;
  }
  render() {
    return (
      <FlatList
        style={styles.list}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={ListSeparator}
        data={DATA}
        renderItem={this.renderItem}
        initialNumToRender={10}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: layout.listHorizontalPadding,
    paddingVertical: layout.listVerticalPadding
  },
  itemTitle: {
    fontSize: 20
  },
});

export default Items;