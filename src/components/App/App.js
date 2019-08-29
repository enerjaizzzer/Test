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

  onChangeSearch = () => {

  }

  submitSearch = (e) => {
    e.preventDefault();
  }

  async destructor() { }

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
