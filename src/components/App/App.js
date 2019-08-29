import React, { Component } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  onChangeSearch = (e) => {
    this.value = e.target.value;

    this.url = `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${this.value}&page=1`;
  }

  submitSearch = (e) => {
    e.preventDefault();
    this.destructor()
  }

  async destructor() {
    const responceInfo = await fetch(this.url);
    const data = await responceInfo.json();

    this.setState(() => {
      return {
        data: data,
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Header
          onChangeSearch={this.onChangeSearch}
          submitSearch={this.submitSearch}
        />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
