import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Header from './header';
import Footer from './footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleonToggleAllComplete = this.handleonToggleAllComplete.bind(this);
  }

  handleonToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }));
    console.table(newItems);
    this.setState({
      items: newItems,
      allComplete: complete
    })
  }

  handleAddItem() {
    if(!this.state.value) return;

    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ]
    this.setState({
      items: newItems,
      value: ''
    })
  }

  render() {

    return (
      <View style={styles.container}>

        <Header
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value) => this.setState({ value })}
          onToggleAllComplete={this.handleonToggleAllComplete}
        />

        <View style={styles.content}>

        </View>

        <Footer />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    flex: 1
  }
});

export default App;
