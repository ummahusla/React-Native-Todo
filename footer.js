import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Footer extends Component {
  render() {
    const { filter } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.filters}>
          <TouchableOpacity style={[styles.filter, filter === 'ALL' && styles.selected]} onPress={() => this.props.onFilter('ALL')}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'ACTIVE' && styles.selected]} onPress={() => this.props.onFilter('ACTIVE')}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'COMPLETED' && styles.selected]} onPress={() => this.props.onFilter('COMPLETED')}>
            <Text>Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  filters: {
    flexDirection: 'row'
  },
  filter: {
    padding: 8,
    margin: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  selected: {
    borderColor: '#ccc'
  }
})

export default Footer;
