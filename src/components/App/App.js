import React, { Component } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      nickName: '',
      page: 1,
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

  onChangeLogin = (e) => {
    this.nickName = e.target.value;
  }

  submitLogin = () => {
    this.setState(() => {
      return {
        login: true,
        nickName: this.nickName,
      }
    })
  }

  render() {
    return (
      <>
        <Header
          onChangeSearch={this.onChangeSearch}
          submitSearch={this.submitSearch}
          onChangeLogin={this.onChangeLogin}
          submitLogin={this.submitLogin}
          login={this.state.login}
          nickName={this.state.nickName}
        />
        {(this.state.data) && (
          <Main
            data={this.state.data}
            value={this.value}
          />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
