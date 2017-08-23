import React, { PureComponent } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ArrowRight, Logo } from '../svg';
import { ListSeparator, Text, Card } from '../elements';
import { layout } from '../styles';

import range from 'lodash/range';

const DATA = range(1, 51);

const Group = ({ item, onPress }) => (
  <Card onPress={onPress}>
    <Text style={styles.itemTitle}>Group {item}</Text>
    <ArrowRight />
  </Card>
);

class Groups extends PureComponent {
  renderGroup = ({ item }) => {
    const link = () => this.props.navigation.navigate('Items', { id: item });
    return <Group item={item} onPress={link}/>;
  }
  _keyExtractor = item => item;
  render() {
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        style={styles.list}
        ListHeaderComponent={<Logo style={styles.logo}/>}
        ItemSeparatorComponent={ListSeparator}
        data={DATA}
        renderItem={this.renderGroup}
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
  logo: {
    alignSelf: 'center'
  },
});

export default Groups;